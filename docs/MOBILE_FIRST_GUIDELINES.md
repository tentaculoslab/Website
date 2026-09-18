# 📱 Diretrizes de Desenvolvimento Mobile-First — Tentáculos Lab

Este documento estabelece os padrões e as melhores práticas obrigatórias para o desenvolvimento do website do **Tentáculos Lab**, focado integralmente na abordagem **Mobile-First**.

---

## 🎯 1. Filosofia Central: O que é Mobile-First?

No Tentáculos Lab, **Mobile-First** não significa apenas "fazer o site caber no celular". Significa:
1. **Design de Conteúdo Prioritário**: Se uma informação ou ação não é essencial na tela pequena de um smartphone, ela não deveria sobrecarregar o usuário no desktop.
2. **CSS Progressivo**: Todo o CSS padrão (sem prefixos de mídia) é escrito para a menor tela suportada (320px). Classes responsivas (`sm:`, `md:`, `lg:`, `xl:`) são usadas exclusivamente para expandir a experiência em telas maiores.
3. **Ergonomia e Toque**: Interações pensadas para os dedos e polegares, respeitando tempo de resposta tátil e eliminando dependência de eventos de *hover* (já que smartphones não possuem cursor).

---

## 📐 2. Sistema de Breakpoints (Tailwind CSS v4)

Escreva todas as classes de layout pensando na tela vertical do celular primeiro:

| Prefixo | Resolução Mínima | Dispositivo Alvo | Estratégia de Layout |
| :--- | :--- | :--- | :--- |
| *(nenhum)* | `0px – 639px` | **Smartphones (Base)** | Coluna única (flex-col / grid-cols-1), menus em gaveta/bottom-sheet, tipografia legível |
| `sm:` | `640px` | Celulares grandes / Paisagem | Ajustes de margens horizontais e grids de 2 colunas leves |
| `md:` | `768px` | Tablets (iPad, Galaxy Tab) | Transição para navegação horizontal parcial, grids de 2 a 3 colunas |
| `lg:` | `1024px` | Laptops / Desktops | Ativação completa de controles 3D avançados, multi-colunas |
| `xl:` | `1280px` | Monitores Widescreen | Limites de largura máxima do container (`max-w-7xl mx-auto`) |

### Exemplo de Código Mobile-First:
```jsx
// ✅ CORRETO (Mobile-First):
<div className="flex flex-col gap-4 p-4 md:flex-row md:gap-8 md:p-8">
  <div className="w-full md:w-1/2">...</div>
</div>

// ❌ INCORRETO (Desktop-First com override):
<div className="flex flex-row p-8 max-md:flex-col max-md:p-4">...</div>
```

---

## 👆 3. Ergonomia, Área de Toque & Interatividade Tátil

### 3.1. Dimensões Mínimas de Alvos de Toque (Touch Targets)
* **Tamanho Mínimo**: Qualquer botão, link ou gatilho clicável deve ter no mínimo **`44 x 44 px`** (idealmente `48 x 48 px`).
* **Espaçamento**: Mínimo de `8px` entre botões clicáveis para evitar toques acidentais.
* **Padding Tátil**: Em botões compactos com ícones, utilize padding generoso (`p-3` ou `p-4`) ou áreas invisíveis expandidas.

### 3.2. A "Zona do Polegar" (Thumb Zone)
* Elementos de navegação primários, gatilhos de orçamento e botões de chamada para ação (ex: "Solicitar Orçamento", "WhatsApp", "Ver Modelo 3D") devem ser acessíveis confortavelmente com uma mão.
* Modais em mobile devem se comportar como **Bottom Sheets** (gavetas que sobem a partir da base da tela) com arrasto ou botão fechar de fácil acesso inferior.

### 3.3. Formulários & Teclados Virtuais
* **Prevenção de Zoom Indesejado no iOS**: Inputs de texto devem ter `font-size: 16px` (1rem) ou maior. Fontes menores que 16px fazem o Safari iOS aplicar zoom automático na tela ao focar.
* **Tipos de Teclado Específicos**:
  * Telefone: `<input type="tel" inputMode="tel" />`
  * E-mail: `<input type="email" inputMode="email" autoCapitalize="none" />`
  * Valores / Metragens: `<input type="text" inputMode="numeric" />`

---

## ⚡ 4. Otimização de Performance 3D & WebGL em Dispositivos Móveis

O portfólio do Tentáculos Lab conta com cenas 3D imersivas (Three.js) e visualizador de modelos. Em dispositivos móveis, isso requer cuidados rigorosos com bateria e aquecimento:

### 4.1. Limitação de Device Pixel Ratio (DPR)
Telas modernas de celulares possuem densidades de pixels muito altas (DPR 3x ou 4x). Renderizar WebGL na resolução nativa drena a bateria e reduz os FPS:
```javascript
// ✅ Limitar a resolução do canvas WebGL em no máximo 2x:
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```

### 4.2. Pausa Inteligente em Background (Page Visibility API)
Quando o usuário troca de aba ou minimiza o navegador no smartphone, o loop de animação 3D deve ser pausado imediatamente:
```javascript
useEffect(() => {
  const handleVisibility = () => {
    isPausedRef.current = document.hidden;
  };
  document.addEventListener('visibilitychange', handleVisibility);
  return () => document.removeEventListener('visibilitychange', handleVisibility);
}, []);
```

### 4.3. Fallback Gracioso de Alta Definição (HD 360° Orbit)
Aparelhos móveis com pouca memória ou navegadores sem aceleração gráfica WebGL ativa utilizam o modo fallback automático já implementado no `Interactive3DViewer`:
* Carrega a sequência de ângulos renderizados em alta definição (`/models/papai_noel_real_angle_*.png`).
* Permite rotação por toque no estilo arrastar (touch drag), entregando fidelidade visual sem sobrecarregar a GPU.

---

## 🛡️ 5. Áreas Seguras (Safe Area Insets)

Dispositivos modernos (iPhone com Dynamic Island/Notch, barras de navegação gestuais do Android) necessitam de suporte às variáveis de ambiente CSS:

```css
/* Utilizado em headers fixos e footers/barras de navegação móvel */
.header-safe {
  padding-top: max(1rem, env(safe-area-inset-top));
}

.bottom-bar-safe {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}
```

---

## ✅ 6. Checklist para Novos Componentes

Antes de subir qualquer alteração para a branch **`Website`**, verifique:

- [ ] O componente abre e funciona perfeitamente em uma tela de 360px de largura?
- [ ] Nenhum elemento ultrapassa horizontalmente a largura da tela (`overflow-x` indesejado)?
- [ ] Os botões possuem área de clique de no mínimo 44x44px?
- [ ] Textos e contrastes estão legíveis sob luz solar (modo escuro com alto contraste)?
- [ ] As animações respeitam a preferência do usuário (`prefers-reduced-motion`)?
- [ ] O visualizador 3D roda sem travamentos e aceita gestos de toque suaves?
- [ ] Todos os testes locais passam via `bun run build` e `bun run lint`?
