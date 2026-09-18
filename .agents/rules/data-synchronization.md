# Protocolo de Sincronização Contínua de Metadados (JSON-LD & Rich Snippets)

Como as definições técnicas de projetos, fotos, serviços e informações de contato podem sofrer alterações ou ampliações durante a evolução do Tentáculos Lab:

## Regra de Ouro:
Sempre que uma nova informação técnica, projeto ou dado institucional for adicionado ou alterado no código ou nos componentes:
1. **Nunca deixe dados desatualizados nos Rich Snippets**:
   * Revisite o arquivo `index.html` e atualize o grafo `@graph` JSON-LD (`ProfessionalService`, `ItemList`, `FAQPage`, etc.).
2. **Atualize os Endpoints Agênticos**:
   * Sincronize `public/api/projects.json` e `public/api/services.json`.
3. **Mantenha os Arquivos LLM Alinhados**:
   * Atualize `public/llms.txt` e `public/llms-full.txt`.
4. **Atualize o Sitemap de Imagens**:
   * Adicione novos renders ao `public/sitemap.xml` com o namespace de imagens.
