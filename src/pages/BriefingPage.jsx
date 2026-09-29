import React from 'react';
import { ProjectEstimator } from '../components/ProjectEstimator';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const BriefingPage = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <SEOHead 
        title={`${t('briefing.titlePrefix', 'Briefing Técnico')} | Tentáculos Lab`}
        description={t('briefing.subtitle', 'Encaminhe as especificações do seu evento, palco ou ativação diretamente para a Tentáculos Lab e receba estimativa técnica e proposta 3D.')}
        canonicalPath="/briefing"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 space-y-3">
        <span className="rotulo-tecnico block">
          {t('briefing.tag', 'BRIEFING TÉCNICO')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('briefing.titlePrefix', 'Terminal executivo:')}{' '}
          <span className="font-semibold text-[#63A4FF]">
            {t('briefing.titleHighlight', 'alinhe sua produção')}
          </span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
          {t('briefing.subtitle', 'Preencha os parâmetros essenciais da sua demanda. Seu briefing será sintetizado em memorial técnico e enviado para a Tentáculos Lab.')}
        </p>
      </div>

      <ProjectEstimator hideHeader={true} />
    </div>
  );
};
