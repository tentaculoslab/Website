# UI & Design System Guidelines — Tentáculos Lab

Ao gerar ou refatorar código frontend neste projeto, siga estritamente estes princípios visuais:

## 1. Hierarquia Visual
* **Distinção por Peso e Cor**: Em vez de depender apenas do aumento de tamanho de fonte (`text-4xl`, etc.), utilize o peso tipográfico (`font-medium` / 500 ou `font-semibold` / 600) e o contraste tonal cromático (ex: `text-slate-400` / `text-gray-500` para metadados/apoio vs `text-slate-100` / `text-gray-900` para títulos e ênfases).
* **Escala Tipográfica Contida**: Mantenha tamanhos harmoniosos e previsíveis, com foco na legibilidade e ritmo vertical.

## 2. Espaçamento & Respiro (Whitespace)
* **Regra do Espaçamento Duplo**: Aplique deliberadamente o dobro do espaçamento convencional. Páginas e seções devem ter respiro amplo (`py-24`, `py-32`, `gap-12`, `gap-16`).
* **Princípio da Proximidade (Gestalt)**:
  * Agrupe elementos diretamente relacionados com proximidade estreita (`gap-1.5`, `gap-2`, `space-y-1`).
  * Separe blocos conceituais e grupos distintos com distâncias generosas (`space-y-8`, `gap-12`, `mb-16`).

## 3. Sofisticação Cromática & Profundidade
* **Fundos Neutros e Não Saturados**: Evite fundos de cores puras ou saturadas (azuis/verdes/vermelhos berrantes). Utilize tons profundos e refinados de cinza/ardósia (ex: `#070d18`, `bg-slate-900/50`, `bg-slate-950`).
* **Bordas Sutis & Delicadas**: Empregue linhas ultra-finas e discretas (ex: `border border-white/[0.07]` ou `border-slate-800` no dark mode; `border-gray-200` no light mode) para delimitar superfícies sem pesar visualmente.
* **Sombras Suaves & Difusas**: Prefira elevações com sombras multicamadas suaves (`shadow-2xl shadow-black/40`, `backdrop-blur-md`) em vez de sombras duras ou brilhos artificiais exagerados.

## 4. Estilo & Identidade Visual
* **Evitar o 'Dashboard Padrão'**: Rejeite padrões visuais genéricos de templates corporativos (excesso de cards empilhados, bordas grossas, gráficos coloridos desnecessários).
* **Identidade Editorial & Cênica**: Como o estúdio trabalha com arquitetura cênica e experiências imersivas, a interface deve transmitir a sobriedade, precisão técnica (toques sutis de CAD) e elegância de uma publicação de arquitetura contemporânea e design conceitual.
