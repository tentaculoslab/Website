# Diretrizes de SEO & Rankeamento no Google — Tentáculos Lab

Ao criar páginas, novos componentes ou adicionar imagens e projetos:

1. **Hierarquia de Títulos (Headings)**:
   * Mantenha um único `<h1>` por página (no componente Hero).
   * Utilize `<h2>` para seções macro e `<h3>` para cards ou subseções.

2. **Otimização de Imagens (Google Imagens & Core Web Vitals)**:
   * Sempre inclua `alt` descritivo com palavras-chave relevantes (ex: `"Nome do Projeto - Cenografia 3D e Arquitetura Efêmera | Tentáculos Lab"`).
   * Forneça `width` e `height` explícitos ou classes de proporção (`aspect-video`) para evitar Cumulative Layout Shift (CLS).
   * Mantenha `loading="lazy"` em todas as imagens que não estiverem acima da dobra (Hero).

3. **Metatags & Dados Estruturados**:
   * Preserve o grafo JSON-LD (`WebSite`, `ProfessionalService`, `ItemList`, `FAQPage`) no `index.html`.
   * Atualize o `public/sitemap.xml` incluindo o namespace de imagens para novos renders adicionados.
