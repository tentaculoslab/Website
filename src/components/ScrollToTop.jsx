import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restaura o scroll para o topo da página a cada mudança de rota
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
