# 🐙 Tentáculos Lab — Website & Portfólio Imersivo

Website oficial e portfólio interativo do **Tentáculos Lab** — estúdio especializado em cenografia, arquitetura cênica/efêmera, experiências imersivas e modelagem 3D.

O projeto foi concebido sob a filosofia **Mobile-First**, garantindo carregamento ultrarrápido, experiência tátil fluida em smartphones e tablets, e enriquecimento progressivo com gráficos 3D (Three.js / WebGL) em telas maiores ou dispositivos compatíveis.

---

## 🚀 Tecnologias Principais

* **Runtime & Package Manager**: [Bun](https://bun.sh) (v1.3+)
* **Build Tool & Bundler**: [Vite](https://vite.dev) (v8)
* **Frontend Library**: [React](https://react.dev) (v19)
* **Estilização**: [Tailwind CSS](https://tailwindcss.com) (v4) + CSS Vanilla modular
* **Gráficos 3D & Interatividade**: [Three.js](https://threejs.org), Three-stdlib, GSAP, Anime.js, Canvas Confetti
* **Ícones**: [Lucide React](https://lucide.dev)
* **Linter**: [Oxlint](https://oxc.rs)

---

## 📱 Filosofia Mobile-First

O site prioriza a experiência do usuário em dispositivos móveis através de:
1. **Layout Base Móvel (Zero Breakpoints padrão)**: todo estilo base é escrito para smartphones (320px–480px), adicionando regras com `sm:`, `md:`, `lg:` e `xl:` apenas para expandir a tela.
2. **Otimização de GPU & Bateria**: shaders e cenas Three.js com limitação de DPR (`Math.min(window.devicePixelRatio, 2)`), detecção de suporte WebGL com fallback gracioso para fotos 360° em conexões lentas ou aparelhos mais simples.
3. **Áreas de Toque Acessíveis**: botões e elementos interativos com altura mínima de 44px a 48px e navegação inferior/drawer acessível ao polegar.
4. **Respeito a Safe Areas**: suporte a `env(safe-area-inset-*)` para telas com entalhes (notches) e barras de navegação nativas.

Consulte o guia completo em [docs/MOBILE_FIRST_GUIDELINES.md](docs/MOBILE_FIRST_GUIDELINES.md).

---

## 🤖 Conceito Agêntico & GEO (Generative Engine Optimization)

O site foi projetado para ser **100% legível e recomendado por Agentes de Inteligência Artificial** (ChatGPT Search, Perplexity, Claude, Gemini, DeepSeek, etc.):
1. **Padrão `llms.txt` e `llms-full.txt`**: Base de conhecimento em Markdown puro localizada na raiz pública para ingestão direta por LLMs sem custos de renderização.
2. **Endpoints de Dados para Agentes**: APIs REST estáticas (`/api/projects.json` e `/api/services.json`) para extração imediata de especificações técnicas e portfólio.
3. **Esquema Semântico JSON-LD**: Grafo com `ProfessionalService`, `FAQPage` e `ItemList` para citação direta em respostas de busca conversacional.
4. **Robots.txt Aberto a IAs**: Permissão explícita para os principais crawlers de IA (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, etc.).

Consulte o guia completo em [docs/AGENTIC_WEB_GUIDELINES.md](docs/AGENTIC_WEB_GUIDELINES.md).

---

## 🛠️ Instalação e Execução

Este projeto utiliza **Bun** como runtime e gerenciador de pacotes:

```powershell
# 1. Instalar as dependências
bun install

# 2. Iniciar servidor local de desenvolvimento (com HMR rápido)
bun dev

# 3. Gerar build de produção otimizado
bun run build

# 4. Testar localmente a build gerada
bun run preview

# 5. Executar análise estática de código (Linter)
bun run lint
```

---

## 📂 Estrutura de Pastas

```text
Tentaculos Lab/
├── public/                # Ativos estáticos públicos (logos, modelos, texturas, ícones)
│   ├── models/            # Renders e ativos dos projetos
│   └── ...
├── src/
│   ├── assets/            # Imagens e mídias empacotadas
│   ├── components/        # Componentes React
│   │   ├── admin/         # Painel administrativo interno de projetos
│   │   ├── AboutSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HexPrismBackground.jsx   # Fundo 3D procedural com prismas
│   │   ├── Interactive3DViewer.jsx   # Visualizador 3D interativo WebGL
│   │   ├── Navbar.jsx               # Cabeçalho responsivo com drawer móvel
│   │   ├── PortfolioGrid.jsx        # Grade de projetos responsiva
│   │   ├── ProjectEstimator.jsx     # Calculadora interativa de orçamento
│   │   └── ProjectModal.jsx         # Modal de detalhamento de projetos
│   ├── context/           # Estado global (PortfolioContext)
│   ├── data/              # Dados iniciais e catálogo padrão (defaultProjects.js)
│   ├── App.jsx            # Componente raiz da aplicação
│   ├── index.css          # Design System e utilitários globais
│   └── main.jsx           # Ponto de entrada React 19
├── docs/                  # Documentação de apoio e arquitetura
│   ├── MOBILE_FIRST_GUIDELINES.md   # Diretrizes de design e código mobile-first
│   ├── ARCHITECTURE.md              # Visão geral da arquitetura de software
│   └── DEPLOYMENT_AND_WORKFLOW.md   # Fluxo Git, branch Website e deploy
├── bun.lock               # Lockfile de dependências do Bun
├── package.json           # Manifesto de pacotes e scripts
└── vite.config.js         # Configuração do Vite com plugins React e Tailwind
```

---

## 📚 Documentação de Apoio

* 📱 **[Diretrizes Mobile-First (docs/MOBILE_FIRST_GUIDELINES.md)](docs/MOBILE_FIRST_GUIDELINES.md)**: padrões de toque, performance móvel e regras de layout.
* ⚡ **[Manual Técnico de Core Web Vitals (docs/CORE_WEB_VITALS_GUIDELINES.md)](docs/CORE_WEB_VITALS_GUIDELINES.md)**: code-splitting, zero CLS, LCP < 1.2s e INP < 50ms (Não-Negociável).
* 🔍 **[Diretrizes de SEO & Rankeamento no Google (docs/SEO_GUIDELINES.md)](docs/SEO_GUIDELINES.md)**: palavras-chave, Rich Snippets Schema.org e Google Imagens.
* 🤖 **[Diretrizes de Web Agêntica & GEO (docs/AGENTIC_WEB_GUIDELINES.md)](docs/AGENTIC_WEB_GUIDELINES.md)**: padrões para ingestão e recomendação por Agentes de IA.
* 🎨 **[Manual do Design System (docs/DESIGN_SYSTEM.md)](docs/DESIGN_SYSTEM.md)**: regras de hierarquia tonal, whitespace generoso e sofisticação visual.
* 🏛️ **[Arquitetura do Projeto (docs/ARCHITECTURE.md)](docs/ARCHITECTURE.md)**: componentes, ciclo de vida Three.js e gerenciamento de estado.
* 🚀 **[Fluxo de Trabalho & Deploy (docs/DEPLOYMENT_AND_WORKFLOW.md)](docs/DEPLOYMENT_AND_WORKFLOW.md)**: branch `Website`, políticas de gitignore e hospedagem.

---

## 🌿 Git & Controle de Versão

* **Branch de Trabalho**: `Website` (rastreando `origin/Website`).
* **Repositório**: [github.com/tentaculoslab/Website](https://github.com/tentaculoslab/Website)
* **Arquivos Protegidos**: Arquivos sensíveis (`Credenciais.txt`, `.env`) e binários pesados de modelagem bruta (`*.skp` > 100MB) são estritamente ignorados pelo `.gitignore`.
