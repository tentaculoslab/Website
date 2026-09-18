import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

const STORAGE_KEY = 'tentaculos_lang';
export const SUPPORTED_LANGUAGES = [
  { code: 'pt-BR', label: 'PT', name: 'Português' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' }
];

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (saved === 'pt-BR' || saved === 'en' || saved === 'es')) {
        return saved;
      }
    } catch (e) {
      console.warn('Não foi possível ler idioma do localStorage:', e);
    }
    return 'pt-BR';
  });

  const setLanguage = useCallback((newLang) => {
    if (!['pt-BR', 'en', 'es'].includes(newLang)) return;
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch (e) {
      console.warn('Não foi possível salvar idioma no localStorage:', e);
    }
  }, []);

  useEffect(() => {
    // Sincroniza o atributo lang do HTML para GEO/SEO e leitores de tela
    document.documentElement.lang = language;
  }, [language]);

  /**
   * Resolve chaves de tradução aninhadas por notação de ponto ('hero.taglineHighlight')
   */
  const t = useCallback((path, fallback = '') => {
    if (!path) return fallback;
    const parts = path.split('.');
    
    // Tenta no idioma selecionado
    let current = translations[language];
    for (const part of parts) {
      if (current && typeof current === 'object' && part in current) {
        current = current[part];
      } else {
        current = undefined;
        break;
      }
    }
    
    if (current !== undefined) {
      return current;
    }

    // Fallback para pt-BR
    let ptCurrent = translations['pt-BR'];
    for (const part of parts) {
      if (ptCurrent && typeof ptCurrent === 'object' && part in ptCurrent) {
        ptCurrent = ptCurrent[part];
      } else {
        ptCurrent = undefined;
        break;
      }
    }

    if (ptCurrent !== undefined) {
      return ptCurrent;
    }

    return fallback || path;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, supportedLanguages: SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};
