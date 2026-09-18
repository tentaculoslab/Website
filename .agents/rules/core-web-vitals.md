# Diretrizes de Core Web Vitals (Não-Negociável) — Tentáculos Lab

Ao gerar, alterar ou adicionar código no frontend, cumpra obrigatoriamente as seguintes regras de performance:

1. **Orçamento de JavaScript Inicial (LCP / INP)**:
   * O bundle crítico inicial da página não deve ultrapassar 70 kB gzipped (220 kB descompactado).
   * Modais e painéis administrativos secundários devem sempre ser carregados sob demanda via `React.lazy()` e `<Suspense fallback={null}>`.
   * Bibliotecas pesadas (ex: Three.js, loaders de malha 3D) devem permanecer isoladas em seus próprios chunks assíncronos (`manualChunks`).

2. **Estabilidade Visual Absoluta (Zero CLS)**:
   * Toda tag `<img>` deve conter dimensões explícitas (`width` e `height`) ou envolver-se em contêiner com aspect ratio fixo (`aspect-video`, `aspect-square`).
   * Nunca insira dinamicamente blocos acima da dobra sem espaço reservado.
   * Fontes externas devem utilizar `display=swap` e conexões prévias com `preconnect`.

3. **Interatividade Rápida (INP < 50ms)**:
   * Todos os event listeners de rolagem e toque (`scroll`, `touchstart`, `touchmove`) devem ser configurados como passivos: `{ passive: true }`.
   * Evite tarefas síncronas bloqueantes na Main Thread com duração superior a 50ms.
   * Cenas e malhas Three.js devem descartar geometrias, texturas e materiais (`dispose()`) no desmonte dos componentes para evitar travamentos de Garbage Collection na GPU e CPU.
