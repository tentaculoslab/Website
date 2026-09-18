import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const NotFoundPage = () => {
  const { t } = useLanguage();

  return (
    <div className="py-28 sm:py-40 max-w-4xl mx-auto px-4 text-center space-y-6">
      <SEOHead 
        title={`404 • ${t('notFound.tag', 'Página Não Encontrada')} | Tentáculos Lab`}
        description={t('notFound.desc', 'A página solicitada não existe ou foi movida.')}
        canonicalPath="/404"
      />

      <span className="rotulo-tecnico block text-[#63A4FF]">
        {t('notFound.tag', '4 0 4 · E R R O  D E  C O O R D E N A D A')}
      </span>

      <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {t('notFound.titlePrefix', 'Elemento fora do')}{' '}
        <span className="font-semibold text-[#63A4FF]">
          {t('notFound.titleHighlight', 'grid técnico')}
        </span>
      </h1>

      <p className="text-slate-400 text-sm max-w-md mx-auto font-light leading-relaxed">
        {t('notFound.desc', 'A rota que você tentou acessar não foi localizada no projeto. Retorne à página inicial ou explore as páginas do acervo técnico.')}
      </p>

      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-medium uppercase tracking-wider transition-all shadow-lg shadow-[#377BDB]/25"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('notFound.returnBtn', 'Retornar à Página Inicial')}</span>
        </Link>
      </div>
    </div>
  );
};
