import { useEffect } from 'react';

/**
 * Atualiza dinamicamente as meta tags e o título da página para Google SEO e Web Agêntica
 */
export const SEOHead = ({ 
  title = 'Tentáculos Lab • Cenografia, Arquitetura Cênica & Projetos 3D',
  description = 'O laboratório onde o conceito vira projeto executável. Modelagem 3D, cenografia e detalhamento estrutural para grandes palcos, festivais e ativações de marca.',
  canonicalPath = '/'
}) => {
  useEffect(() => {
    // Atualiza o título da aba
    document.title = title.includes('Tentáculos Lab') ? title : `${title} | Tentáculos Lab`;

    // Atualiza a meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Atualiza o link canonical
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    const baseUrl = 'https://tentaculoslab.com.br';
    const fullUrl = `${baseUrl}${canonicalPath}`;
    if (linkCanonical) {
      linkCanonical.setAttribute('href', fullUrl);
    }
  }, [title, description, canonicalPath]);

  return null;
};
