# 🔍 Diretrizes de SEO & Rankeamento no Google — Tentáculos Lab

Este documento detalha o modelo técnico de otimização para mecanismos de busca (**Google**, **Bing**, etc.) do website do **Tentáculos Lab**, visando posicionamento de topo para termos de alta intenção comercial no setor de cenografia, arquitetura efêmera e eventos.

---

## 🎯 1. Matriz de Palavras-Chave Estratégicas

O conteúdo, metatags e esquemas foram desenhados para capturar a intenção de diretores criativos, produtoras de eventos, agências de live marketing e prefeituras:

| Categoria de Busca | Palavras-Chave Principais | Intenção do Usuário |
| :--- | :--- | :--- |
| **Cenografia & Festivais** | *Cenografia de festivais*, *arquitetura de palcos*, *palcos 3D eventos*, *cenografia para shows* | Contratação de projeto espacial para grandes arenas e festivais |
| **Tecnologia & Formato** | *Modelagem 3D SketchUp*, *arquivos .skp cenografia*, *visualizador 3D webgl* | Busca por fornecedores com compatibilidade técnica direta com montadoras |
| **Arquitetura Efêmera** | *Arquitetura efêmera*, *pavilhões temporários*, *projetos temporários executáveis* | Projetos públicos, culturais ou corporativos de rápida montagem |
| **Ativações de Marca** | *Estandes imersivos*, *ativação de marca festival*, *cenografia promocional* | Agências e marcas buscando experiências instagramáveis e engajamento |
| **Geolocalização (Local)** | *Cenografia São Paulo*, *estúdio 3D eventos SP*, *projetos cenográficos Brasil* | Fornecedores sediados no polo de eventos de São Paulo com atuação nacional |

---

## 🏗️ 2. Fatores Técnicos On-Page (Arquitetura e Semântica)

### 2.1. Hierarquia de Títulos (Heading Tags)
* **`<h1>` Único**: Localizado na seção Hero:
  `"Arquitetura 3D para Projetos Criativos & Grandes Eventos"`
* **`<h2>` Estruturais**:
  * `"Projetos & Cenografia Efêmera"` (`#portfolio`)
  * `"Quem Somos • Manifesto Tentáculos Lab"` (`#about`)
  * `"Solicitação de Orçamento Técnico 3D"` (`#estimator`)
* **`<h3>` Detalhados**: Nomes específicos dos projetos e diferenciais técnicos.

### 2.2. Otimização de Imagens para o Google Imagens
Como o mercado cenográfico é altamente visual, uma fatia expressiva de tomadores de decisão busca referências no **Google Imagens**:
1. **Alt Texts Contextuais e Descritivos**:
   Em vez de `alt="Casa do Papai Noel"`, utilizamos:
   `alt="Casa do Papai Noel - Projeto de Cenografia 3D e Arquitetura Efêmera | Tentáculos Lab"`.
2. **Dimensões Explícitas**: Todas as tags `<img>` possuem `width` e `height` (ou classes de aspect ratio) para evitar **Cumulative Layout Shift (CLS)**, preservando nota 100 no Core Web Vitals.
3. **Google Image Sitemap**: O arquivo [`public/sitemap.xml`](../public/sitemap.xml) contém o namespace oficial `xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"` mapeando os renders fotográficos dos projetos.

---

## 📊 3. Dados Estruturados Schema.org (Google Rich Snippets)

O cabeçalho do [`index.html`](../index.html) injeta um grafo JSON-LD unificado `@graph` contendo:

* **`WebSite`**: Declara a entidade canônica, nome e idioma (`pt-BR`).
* **`ProfessionalService`**:
  * Especifica o tipo de empresa, logo oficial, faixa de preço (`$$$`), telefone e e-mail.
  * Coordenadas geográficas (`GeoCoordinates`) centradas em São Paulo.
  * Relação de competências técnicas (`knowsAbout`).
* **`FAQPage`**:
  * Respostas para dúvidas comuns indexadas diretamente nos resultados de pesquisa (SERP) do Google:
    * *Qual é a especialidade do Tentáculos Lab?*
    * *O Tentáculos Lab fornece modelos nativos em SketchUp (.skp)?*
    * *Como solicitar um orçamento de cenografia 3D?*
* **`ItemList`**:
  * Lista indexável dos principais trabalhos do catálogo como instâncias de `CreativeWork`.

---

## 📍 4. SEO Local & Regional (Geo Tags)

Para reforçar a autoridade geográfica e o ranqueamento em pesquisas com intenção local em São Paulo e no Brasil:

```html
<meta name="geo.region" content="BR-SP" />
<meta name="geo.placename" content="São Paulo" />
<meta name="geo.position" content="-23.5505;-46.6333" />
<meta name="ICBM" content="-23.5505, -46.6333" />
```

---

## ⚡ 5. Checklist de Core Web Vitals para Novas Páginas

Para assegurar nota máxima nos critérios de experiência de página do Google:

- [ ] **LCP (Largest Contentful Paint < 2.5s)**: Fontes pré-conectadas (`preconnect`), imagens críticas carregadas com alta prioridade.
- [ ] **FID/INP (Interaction to Next Paint < 200ms)**: Scripts leves, Three.js inicializado de forma não-bloqueante.
- [ ] **CLS (Cumulative Layout Shift < 0.1)**: Todas as imagens e blocos com dimensões reservadas previamente.
- [ ] **Mobile-Friendly**: 100% aprovado no teste de compatibilidade com dispositivos móveis do Google.
- [ ] **HTTPS & Canonical**: URLs canônicas estritamente declaradas apontando para `https://tentaculoslab.com.br/`.

---

## 🔄 6. Protocolo de Manutenção Contínua (JSON-LD, Rich Snippets e Metadados)

> ⚠️ **Aviso de Evolução Contínua:**  
> Diversas questões técnicas e informações do estúdio (novos projetos cenográficos, métricas de área, parceiros, contatos ou novas FAQs) sofrerão adições e refinamentos ao longo do projeto.

Para garantir que o Google, outros motores de busca e crawlers de IA nunca sirvam dados defasados, **é obrigatório revisitar os dados estruturados** sempre que novas informações forem introduzidas:

### 📋 Checklist de Sincronização Obrigatória:
1. **Grafo JSON-LD / Rich Snippets (`index.html`)**:
   * Revisitar os esquemas `@graph` (`ProfessionalService`, `ItemList`, `CreativeWork` e `FAQPage`) sempre que novos projetos forem incorporados ou escopos de serviço forem refinados.
2. **Endpoints de Dados para IAs (`public/api/`)**:
   * Manter `public/api/projects.json` e `public/api/services.json` em perfeita paridade com os dados da aplicação.
3. **Base Textual para Agentes de IA**:
   * Atualizar `public/llms.txt` e `public/llms-full.txt` com as novas especificações e projetos de destaque.
4. **Sitemap de Imagens (`public/sitemap.xml`)**:
   * Incluir novas imagens e renders recém-adicionados no namespace `<image:image>` e atualizar `<lastmod>`.
5. **Catálogo de Dados (`src/data/defaultProjects.js`)**:
   * Garantir que as informações exibidas nos cards visuais correspondam exatamente ao que está declarado nos esquemas estruturados.

