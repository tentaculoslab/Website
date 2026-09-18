# Graph Report - Tentaculos Lab  (2026-09-18)

## Corpus Check
- 53 files · ~1,054,668 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: .css 2, (none) 1, .lock 1)

## Summary
- 281 nodes · 464 edges · 20 communities (15 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c93322da`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- useLanguage
- dependencies
- projects.json
- README.md
- Layout.jsx
- 📘 Manual de Identidade Visual e Guia Técnico de Marca
- .oxlintrc.json
- ⚡ Manual Técnico de Core Web Vitals (Nota Máxima) — Tentáculos Lab
- 📱 Diretrizes de Desenvolvimento Mobile-First — Tentáculos Lab
- 🚀 Fluxo de Trabalho, Git e Deploy — Tentáculos Lab
- 🔍 Diretrizes de SEO & Rankeamento no Google — Tentáculos Lab
- 🏛️ Arquitetura do Sistema — Tentáculos Lab
- App.jsx
- UI & Design System Guidelines — Tentáculos Lab
- Protocolo de Sincronização Contínua de Metadados (JSON-LD & Rich Snippets)
- agentic-web.md
- rules/graphify.md
- seo-ranking.md
- workflows/graphify.md

## God Nodes (most connected - your core abstractions)
1. `useLanguage()` - 39 edges
2. `react` - 30 edges
3. `lucide-react` - 14 edges
4. `react-router-dom` - 11 edges
5. `SEOHead()` - 9 edges
6. `usePortfolio()` - 9 edges
7. `📘 Manual de Identidade Visual e Guia Técnico de Marca` - 9 edges
8. `🐙 Tentáculos Lab — Website & Portfólio Imersivo` - 8 edges
9. `🤖 Diretrizes de Desenvolvimento Web Agêntica & GEO — Tentáculos Lab` - 8 edges
10. `⚡ Manual Técnico de Core Web Vitals (Nota Máxima) — Tentáculos Lab` - 7 edges

## Surprising Connections (you probably didn't know these)
- `4.3. Fallback Gracioso de Alta Definição (HD 360° Orbit)` --references--> `Interactive3DViewer()`  [INFERRED]
  docs/MOBILE_FIRST_GUIDELINES.md → src/components/Interactive3DViewer.jsx
- `Diretrizes de Core Web Vitals (Não-Negociável) — Tentáculos Lab` --references--> `manualChunks()`  [INFERRED]
  .agents/rules/core-web-vitals.md → vite.config.js
- `Footer()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Footer.jsx → src/context/LanguageContext.jsx
- `Interactive3DViewer()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Interactive3DViewer.jsx → src/context/LanguageContext.jsx
- `Navbar()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Navbar.jsx → src/context/LanguageContext.jsx

## Import Cycles
- None detected.

## Communities (20 total, 5 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.05
Nodes (38): Diretrizes de Core Web Vitals (Não-Negociável) — Tentáculos Lab, devDependencies, oxlint, tailwindcss, @tailwindcss/vite, @types/bun, @types/react, @types/react-dom (+30 more)

### Community 1 - "useLanguage"
Cohesion: 0.15
Nodes (24): lucide-react, react, ComparativoPage, AboutSection(), ComparativoViewer(), Hero(), WhatsAppIcon(), LanguageSelector() (+16 more)

### Community 2 - "dependencies"
Cohesion: 0.13
Nodes (15): dependencies, animejs, assimpjs, canvas-confetti, gsap, @loaders.gl/core, @loaders.gl/gltf, lucide-react (+7 more)

### Community 3 - "projects.json"
Cohesion: 0.17
Nodes (11): email, phone, whatsapp, projects, publisher, contact, name, url (+3 more)

### Community 4 - "README.md"
Cohesion: 0.08
Nodes (21): 🎯 1. O que é um Website Agêntico?, 🏗️ 2. Pilares da Arquitetura Agêntica do Tentáculos Lab, 📄 3. Padrão `llms.txt` e `llms-full.txt` (Answer.AI Standard), 🔌 4. Endpoints de Dados Legíveis por Máquina (`/api/`), 🔍 5. Schema.org e Dados Estruturados em JSON-LD (`index.html`), 🤖 6. Permissões de Crawlers no `robots.txt`, ✅ 7. Protocolo de Revisitação Contínua de Dados (JSON-LD & Rich Snippets), 🤖 Diretrizes de Desenvolvimento Web Agêntica & GEO — Tentáculos Lab (+13 more)

### Community 5 - "Layout.jsx"
Cohesion: 0.16
Nodes (13): react-router-dom, three, AdminDashboard(), Footer(), HexPrismBackground(), AdminDashboard, Layout(), ProjectModal (+5 more)

### Community 6 - "📘 Manual de Identidade Visual e Guia Técnico de Marca"
Cohesion: 0.10
Nodes (20): 🎯 1. Conceito e Território da Marca, 2.1 Tabela de Cores (Tokens Técnicos), 2.2 Proporções de Uso das Cores, 🎨 2. Paleta de Cores Oficial, ✍️ 3. Tipografia Oficial, 4.1 A Logomarca (`tentáculos ◉ lab`), 4.2 O Símbolo (Os Anéis Concêntricos), 📐 4. Logomarca e Símbolo (+12 more)

### Community 7 - ".oxlintrc.json"
Cohesion: 0.33
Nodes (5): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema

### Community 8 - "⚡ Manual Técnico de Core Web Vitals (Nota Máxima) — Tentáculos Lab"
Cohesion: 0.13
Nodes (14): 🎯 1. Metas & Orçamento de Performance (Performance Budgets), 2.1. Desacoplamento de Chunks no Vite (`vite.config.js`), 2.2. Carregamento Preguiçoso com `React.lazy` e `Suspense` (`src/App.jsx`), 🏎️ 2. Arquitetura de Divisão de Código (Code-Splitting), 3.1. Reserva Obrigatória de Proporção (Aspect Ratio), 3.2. Estratégia de Fontes sem FOUT/FOIT, 🎨 3. Eliminação Total de Layout Shift (Zero CLS), 🚀 4. Aceleração Máxima do LCP (Largest Contentful Paint) (+6 more)

### Community 9 - "📱 Diretrizes de Desenvolvimento Mobile-First — Tentáculos Lab"
Cohesion: 0.12
Nodes (15): 🎯 1. Filosofia Central: O que é Mobile-First?, 📐 2. Sistema de Breakpoints (Tailwind CSS v4), 3.1. Dimensões Mínimas de Alvos de Toque (Touch Targets), 3.2. A "Zona do Polegar" (Thumb Zone), 3.3. Formulários & Teclados Virtuais, 👆 3. Ergonomia, Área de Toque & Interatividade Tátil, 4.1. Limitação de Device Pixel Ratio (DPR), 4.2. Pausa Inteligente em Background (Page Visibility API) (+7 more)

### Community 10 - "🚀 Fluxo de Trabalho, Git e Deploy — Tentáculos Lab"
Cohesion: 0.20
Nodes (9): 🌿 1. Estratégia de Branches no Git, 🛡️ 2. Política de Segurança e Arquivos Ignorados, 🏗️ 3. Processo de Build, 🌐 4. Opções de Hospedagem e Deploy Contínuo, Comandos de Trabalho Diário:, 🚀 Fluxo de Trabalho, Git e Deploy — Tentáculos Lab, Opção A: Vercel (Recomendada), Opção B: Netlify (+1 more)

### Community 11 - "🔍 Diretrizes de SEO & Rankeamento no Google — Tentáculos Lab"
Cohesion: 0.18
Nodes (10): 🎯 1. Matriz de Palavras-Chave Estratégicas, 2.1. Hierarquia de Títulos (Heading Tags), 2.2. Otimização de Imagens para o Google Imagens, 🏗️ 2. Fatores Técnicos On-Page (Arquitetura e Semântica), 📊 3. Dados Estruturados Schema.org (Google Rich Snippets), 📍 4. SEO Local & Regional (Geo Tags), ⚡ 5. Checklist de Core Web Vitals para Novas Páginas, 🔄 6. Protocolo de Manutenção Contínua (JSON-LD, Rich Snippets e Metadados) (+2 more)

### Community 12 - "🏛️ Arquitetura do Sistema — Tentáculos Lab"
Cohesion: 0.22
Nodes (8): 🧭 1. Visão Geral da Arquitetura, 📦 2. Camada de Estado Global (`PortfolioContext`), 3.1. `HexPrismBackground.jsx` (Cenário de Fundo 3D), 3.2. `Interactive3DViewer.jsx` (Visualizador 3D do Projeto), 3.3. `ProjectEstimator.jsx` (Calculadora Interativa), 🎨 3. Módulos & Componentes Principais, ⚡ 4. Pipeline de Assets e Mídia, 🏛️ Arquitetura do Sistema — Tentáculos Lab

### Community 13 - "App.jsx"
Cohesion: 0.12
Nodes (14): ref_react_dom_client, AboutPage, App(), BriefingPage, HomePage, MethodPage, NotFoundPage, ProjectDetailPage (+6 more)

### Community 14 - "UI & Design System Guidelines — Tentáculos Lab"
Cohesion: 0.33
Nodes (5): 1. Cores Oficiais da Marca, 2. Tipografia Oficial & Hierarquia, 3. Elementos Gráficos & Estruturais, 4. Espaçamento & Whitespace, UI & Design System Guidelines — Tentáculos Lab

## Knowledge Gaps
- **138 isolated node(s):** `$schema`, `plugins`, `react/rules-of-hooks`, `react/only-export-components`, `name` (+133 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 148 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Interactive3DViewer()` connect `📱 Diretrizes de Desenvolvimento Mobile-First — Tentáculos Lab` to `package.json`, `useLanguage`, `Layout.jsx`?**
  _High betweenness centrality (0.376) - this node is a cross-community bridge._
- **What connects `$schema`, `plugins`, `react/rules-of-hooks` to the rest of the system?**
  _138 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05110336817653891 - nodes in this community are weakly interconnected._
- **Should `useLanguage` be split into smaller, more focused modules?**
  _Cohesion score 0.1494949494949495 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `README.md` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `📘 Manual de Identidade Visual e Guia Técnico de Marca` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._