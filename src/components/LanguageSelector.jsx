import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSelector = ({ variant = 'default', className = '' }) => {
  const { language, setLanguage, supportedLanguages } = useLanguage();

  return (
    <div 
      className={`inline-flex items-center gap-1.5 p-1 rounded-full bg-[#121D31]/90 border border-white/[0.08] shadow-inner ${className}`}
      role="group"
      aria-label="Seleção de idioma / Language selector"
    >
      <div className="pl-1.5 pr-0.5 text-[#63A4FF]/80 flex items-center justify-center">
        <Globe className="w-3.5 h-3.5" aria-hidden="true" />
      </div>

      <div className="flex items-center gap-0.5">
        {supportedLanguages.map((lang) => {
          const isActive = language === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => setLanguage(lang.code)}
              aria-pressed={isActive}
              title={lang.name}
              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase transition-all duration-200 ${
                isActive
                  ? 'bg-[#377BDB] text-white shadow-sm ring-1 ring-[#63A4FF]/50'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {lang.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
