import React from 'react';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const ProjectsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <SEOHead 
        title={`${t('projects.titlePrefix', 'Projetos')} | Tentáculos Lab`}
        description={t('projects.subtitle', 'Explore o acervo de projetos cenográficos, palcos, bares, ativações e ambientações imersivas desenvolvidas em modelagem 3D executável pela Tentáculos Lab.')}
        canonicalPath="/projects"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-3">
        <span className="rotulo-tecnico block">
          {t('projects.pageTag', 'A C E R V O  T É C N I C O')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('projects.pageTitlePrefix', 'Projetos cenográficos:')}{' '}
          <span className="font-semibold text-[#63A4FF]">
            {t('projects.pageTitleHighlight', 'do conceito à execução')}
          </span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
          {t('projects.pageSubtitle', 'Navegue pelas 5 tipologias oficiais atendidas pelo estúdio. Cada projeto possui espacialização 3D, memorial descritivo, cálculo volumétrico e compatibilização estrutural.')}
        </p>
      </div>

      <PortfolioGrid hideHeader={true} />
    </div>
  );
};
