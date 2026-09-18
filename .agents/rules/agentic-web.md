# Diretrizes de Web Agêntica & GEO — Tentáculos Lab

Ao criar páginas, componentes ou atualizar dados de projetos, mantenha a conformidade com a arquitetura agêntica:

1. **Sincronização de Dados para IAs**:
   * Sempre que um novo projeto for adicionado ou modificado em `src/data/defaultProjects.js`, atualize também o endpoint estático `public/api/projects.json`.
   * Se houver especificações técnicas de destaque (área, materiais, LED, montagem), garanta que o resumo esteja presente em `public/llms-full.txt`.

2. **Tags Semânticas & Descoberta**:
   * Mantenha os links de descoberta no cabeçalho do `index.html` (`/llms.txt`, `/llms-full.txt`, `/api/projects.json`, `/api/services.json`).
   * Preserve o grafo JSON-LD (`ProfessionalService`, `FAQPage`, `ItemList`) no `index.html`.

3. **Respeito aos Crawlers de IA**:
   * Nunca bloqueie crawlers de LLM (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, etc.) no `robots.txt`.
   * Mantenha `sitemap.xml` atualizado com as rotas estáticas e os endpoints de dados.
