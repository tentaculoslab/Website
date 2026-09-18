# ⚡ Manual Técnico de Core Web Vitals (Nota Máxima) — Tentáculos Lab

> **Status:** Obrigatório e Não-Negociável.  
> Todas as decisões de frontend, novos componentes e atualizações de mídia devem cumprir rigorosamente as metas deste manual para garantir pontuação 95–100 no **Google Lighthouse** e aprovação no **CrUX (Chrome User Experience Report)**.

---

## 🎯 1. Metas & Orçamento de Performance (Performance Budgets)

| Métrica | Meta do Google (Good) | **Meta Interna Tentáculos Lab** | Impacto no Usuário |
| :--- | :--- | :--- | :--- |
| **LCP** (Largest Contentful Paint) | `< 2.5s` | **`< 1.2s`** | Velocidade percebida de carregamento da dobra superior |
| **INP** (Interaction to Next Paint) | `< 200ms` | **`< 50ms`** | Responsividade imediata a qualquer toque ou clique |
| **CLS** (Cumulative Layout Shift) | `< 0.10` | **`0.00`** | Estabilidade visual absoluta (nenhum elemento pula de lugar) |
| **FCP** (First Contentful Paint) | `< 1.8s` | **`< 0.8s`** | Primeiro pixel de conteúdo renderizado na tela |
| **TTFB** (Time to First Byte) | `< 800ms` | **`< 300ms`** | Tempo de resposta do servidor de borda (Edge CDN) |
| **Bundle Crítico Inicial (Gzip)** | `< 150 kB` | **`< 70 kB`** | Peso do JavaScript necessário para hidratar a página inicial |

---

## 🏎️ 2. Arquitetura de Divisão de Código (Code-Splitting)

O maior vilão do **INP** e do **LCP** em sites com gráficos 3D é o envio de pacotes monolíticos de JavaScript que travam a Thread Principal (Main Thread) do navegador.

### 2.1. Desacoplamento de Chunks no Vite (`vite.config.js`)
Configurado para isolar bibliotecas pesadas de 3D e interfaces secundárias da carga crítica inicial:
```javascript
// vite.config.js
build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules/three')) {
          return 'vendor-three'; // Isolado: 540 kB carregados sob demanda
        }
        if (id.includes('node_modules/lucide-react') || id.includes('node_modules/canvas-confetti')) {
          return 'vendor-ui';    // Isolado: 28 kB
        }
      }
    }
  }
}
```

### 2.2. Carregamento Preguiçoso com `React.lazy` e `Suspense` (`src/App.jsx`)
Nenhum modal pesado (como o detalhamento de projetos com visualizador 3D ou o painel administrativo) é baixado ou executado no primeiro carregamento:
```jsx
// ✅ Carregamento sob demanda estrita:
const ProjectModal = lazy(() => import('./components/ProjectModal').then(m => ({ default: m.ProjectModal })));
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));

<Suspense fallback={null}>
  <ProjectModal />
  <AdminDashboard />
</Suspense>
```
* **Resultado Real**: O bundle crítico inicial caiu de **894 kB** para **220 kB (67 kB gzipped)** — uma redução de **75%** no bloqueio de CPU mobile!

---

## 🎨 3. Eliminação Total de Layout Shift (Zero CLS)

O Google penaliza severamente websites cujos elementos se movem enquanto imagens, fontes ou blocos 3D carregam.

### 3.1. Reserva Obrigatória de Proporção (Aspect Ratio)
Todas as imagens devem ter contêineres com proporção fixa (`aspect-video` para 16:9, `aspect-square` para 1:1) e atributos `width` e `height` explícitos:
```jsx
// ✅ CORRETO (Sem CLS):
<div className="relative aspect-video overflow-hidden bg-slate-950">
  <img
    src={project.coverImage}
    alt="..."
    width="800"
    height="450"
    className="w-full h-full object-cover"
    loading="lazy"
  />
</div>

// ❌ INCORRETO (Causa salto de layout quando a imagem baixa):
<img src={project.coverImage} className="w-full" />
```

### 3.2. Estratégia de Fontes sem FOUT/FOIT
No `index.html`, utilizamos `display=swap` em conjunto com `preconnect` aos servidores do Google Fonts:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
```

---

## 🚀 4. Aceleração Máxima do LCP (Largest Contentful Paint)

O LCP mede quando o maior elemento visível na tela inicial termina de renderizar (geralmente a manchete Hero ou a imagem de destaque):

1. **Priorização de Recursos Acima da Dobra (Above-the-Fold)**:
   * Elementos dentro do Hero nunca devem ter `loading="lazy"`.
   * Para imagens críticas de fundo: utilizar `<link rel="preload" as="image" href="..." fetchpriority="high" />`.
2. **CSS Crítico em Linha / Tailwind v4 Otimizado**:
   * O Tailwind CSS v4 compila apenas utilitários usados em um arquivo único minificado (`~55 kB`), carregado com prioridade máxima.
3. **Inicialização do Three.js Assíncrona**:
   * O fundo animado de prismas (`HexPrismBackground.jsx`) inicia o loop de renderização após o First Paint, garantindo que o texto e a estrutura da página fiquem visíveis em menos de 500ms.

---

## ⏱️ 5. Minimização do INP (Interaction to Next Paint < 50ms)

O **INP** mede a latência de qualquer interação do usuário (toque no botão de orçamento, clique no filtro, rolagem do carrossel):

### 5.1. Listeners de Toque e Rolagem Passivos (`{ passive: true }`)
Todo evento de `scroll`, `touchstart` ou `touchmove` deve ser registrado como passivo para que o navegador não congele o thread de rolagem esperando o JavaScript:
```javascript
window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('touchmove', handleTouchMove, { passive: true });
```

### 5.2. Quebra de Tarefas Longas (Long Tasks > 50ms)
Se um processamento pesado for necessário (como parse de malha 3D ou filtragem massiva de projetos), quebre a execução para liberar a thread de renderização:
```javascript
// Liberar a Main Thread antes de atualizar estado pesado:
requestAnimationFrame(() => {
  setTimeout(() => {
    setActiveFilter(newCategory);
  }, 0);
});
```

### 5.3. Limitação e Descarte de Recursos 3D (Anti-Memory Leak)
Objetos 3D órfãos na memória GPU provocam coletas de lixo periódicas (Garbage Collection Spikes) que causam travamentos perceptíveis:
```javascript
// Sempre descartar geometrias e materiais no desmonte do componente:
return () => {
  cancelAnimationFrame(animationFrameId);
  geometry.dispose();
  material.dispose();
  renderer.dispose();
};
```

---

## 🧪 6. Checklist de Verificação Contínua (Não-Negociável)

Antes de qualquer merge ou deploy na branch **`Website`**:

- [ ] O bundle JS inicial minificado e gzippado permanece **abaixo de 100 kB**?
- [ ] Todas as novas tags `<img>` possuem `width`, `height`, `alt` descritivo e `loading="lazy"` (se abaixo da dobra)?
- [ ] Nenhum elemento novo causa descolamento de layout durante o carregamento (CLS = 0)?
- [ ] O componente Three.js possui `Math.min(window.devicePixelRatio, 2)` e limpeza no `return` do `useEffect`?
- [ ] O comando `bun run build` completa em menos de 3 segundos sem avisos de chunks excedidos?
- [ ] A pontuação no Google Lighthouse (Performance) é de **95 ou superior** no perfil Mobile (Slow 4G / Throttled CPU)?
