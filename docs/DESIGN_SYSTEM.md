# 🎨 Manual do Design System — Tentáculos Lab

Este documento formaliza os fundamentos de Design System e UI do website do **Tentáculos Lab**, estabelecendo diretrizes visuais para garantir sofisticação, legibilidade editorial e respiro visual.

---

## 🏛️ 1. Hierarquia Tipográfica

A diferenciação entre níveis de informação deve priorizar o **peso da fonte** e o **contraste cromático tonal**, em vez de recorrer apenas ao aumento exagerado do tamanho dos caracteres:

| Nível de Informação | Peso | Cor (Dark Mode) | Cor (Light Equiv.) | Aplicação |
| :--- | :--- | :--- | :--- | :--- |
| **Título Principal / Hero** | `font-semibold` (600) | `text-slate-100` | `text-gray-900` | Nomes de projetos, manchetes de seções |
| **Subtítulos & Seções** | `font-medium` (500) | `text-slate-200` | `text-gray-800` | Nomes de blocos, subtítulos explicativos |
| **Texto Corrido / Corpo** | `font-normal` (400) | `text-slate-400` | `text-gray-600` | Parágrafos descritivos, memoriais de projeto |
| **Metadados & Rótulos** | `font-medium` (500) | `text-slate-500` | `text-gray-500` | Tags de categoria, ano, dimensões, specs |
| **Micro-labels / Código** | `font-mono` (400) | `text-cyan-400/80` | `text-cyan-600` | Coordenadas CAD, status técnico, dimensões |

### Exemplo Prático:
```jsx
// ✅ Hierarquia por peso e contraste de cor
<div className="space-y-1.5">
  <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
    Cenografia Imersiva • 2026
  </span>
  <h3 className="text-xl font-semibold tracking-tight text-slate-100">
    Casa do Papai Noel
  </h3>
  <p className="text-sm font-normal leading-relaxed text-slate-400">
    Estrutura efêmera em escala real com detalhamento construtivo completo.
  </p>
</div>
```

---

## 🌬️ 2. Espaçamento & Whitespace Generoso

Seguimos a **regra do dobro do whitespace**: interfaces sofisticadas respiram com calma e transmitem exclusividade.

* **Seções Principais**: Espaçamento vertical generoso entre blocos:
  * Mobile: `py-20` (80px)
  * Desktop: `py-32` a `py-40` (128px a 160px)
* **Princípio da Proximidade**:
  * Título e subtítulo imediato: `space-y-1.5` ou `space-y-2` (estreito)
  * Bloco de texto e botão de ação: `mt-8` ou `mt-10` (amplo)
  * Separação entre cards em grade: `gap-8` a `gap-12` (amplo)

---

## 💎 3. Sofisticação Cromática & Superfícies

* **Fundos Neutros**:
  * Base principal: `#070d18` (ardósia escuro com toque técnico cênico, sem saturação estridente).
  * Painéis e Superfícies: `rgba(11, 19, 34, 0.7)` com `backdrop-blur-md`.
* **Bordas Ultrafinas (1px)**:
  * Separação de cards e divisores com opacidade sutil: `border border-white/[0.07]` ou `border-slate-800/80`.
  * Destaque sutil no hover: transição para `border-cyan-500/30` ou `border-slate-700`.
* **Profundidade por Sombras Suaves**:
  * Sombras orgânicas e difusas: `shadow-2xl shadow-black/40` ao invés de contornos pesados.

---

## 🚫 4. O que Evitar

1. **Evitar a estética 'Dashboard Corporativo Padrão'**: Nada de dezenas de pequenos cards de métricas genéricas, gráficos coloridos desnecessários ou tabelas densas e claustrofóbicas.
2. **Evitar fundos coloridos saturados**: Não usar blocos inteiros em azul ou vermelho elétrico. As cores de destaque (como ciano ou âmbar) aparecem apenas em pontos cirúrgicos: um detalhe de linha, um badge sutil ou um indicador técnico.
3. **Evitar botões maciços sem respiro**: Botões devem ter espaçamento interno equilibrado (`px-6 py-3.5`) e tipografia comedida.
