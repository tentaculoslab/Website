import React from 'react';
import { JuxtaposeViewer } from '../components/JuxtaposeViewer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const JuxtaposePage = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <SEOHead 
        title={`${t('juxtapose.titlePrefix', 'Tecnologia Comparativa 3D vs. Real')} | Tentáculos Lab`}
        description={t('juxtapose.subtitle', 'Inspecione a fidelidade estrutural e cenográfica da Tentáculos Lab. Compare lado a lado o projeto executivo 3D e a execução física real do evento.')}
        canonicalPath="/comparativo"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-3">
        <span className="rotulo-tecnico block">
          {t('juxtapose.pageTag', '0 2 · T E C N O L O G I A  J U X T A P O S E')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('juxtapose.pageTitlePrefix', 'O que é idealizado:')}{' '}
          <span className="font-semibold text-[#63A4FF]">
            {t('juxtapose.pageTitleHighlight', 'vira fato executado')}
          </span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
          {t('juxtapose.pageSubtitle', 'Nossa modelagem não é uma ilustração artística ou render genérico de IA. É uma planta executiva tridimensional parametrizada para montagem real sem surpresas no evento.')}
        </p>
      </div>

      {/* Mecanismo Interativo Juxtapose */}
      <JuxtaposeViewer />

      {/* Explicação Técnica dos Pilares de Fidelidade */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-chanfrado p-6 rounded-xl space-y-3">
            <span className="rotulo-tecnico text-[10px]">
              {t('juxtapose.pillar1Tag', '01 · PARAMETRIZAÇÃO 1:1')}
            </span>
            <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('juxtapose.pillar1Title', 'Escala e Proporção Real')}
            </h3>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              {t('juxtapose.pillar1Desc', 'Cada treliça, módulo de bar e painel de LED é inserido com suas dimensões físicas milimétricas exatas dos fornecedores do evento.')}
            </p>
          </div>

          <div className="card-chanfrado p-6 rounded-xl space-y-3">
            <span className="rotulo-tecnico text-[10px]">
              {t('juxtapose.pillar2Tag', '02 · ILUMINAÇÃO CÊNICA')}
            </span>
            <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('juxtapose.pillar2Title', 'Simulação Volumétrica de Luz')}
            </h3>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              {t('juxtapose.pillar2Desc', 'Os feixes de luz, temperatura de cor e pontos de pirotecnia são simulados na modelagem 3D para antecipar o impacto visual da noite.')}
            </p>
          </div>

          <div className="card-chanfrado p-6 rounded-xl space-y-3">
            <span className="rotulo-tecnico text-[10px]">
              {t('juxtapose.pillar3Tag', '03 · ZERO IMPROVISO')}
            </span>
            <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('juxtapose.pillar3Title', 'Compatibilidade de Montagem')}
            </h3>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              {t('juxtapose.pillar3Desc', 'Eliminamos o retrabalho em campo: a equipe de produção monta com base nas coordenadas e eixos gerados diretamente da maquete técnica.')}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
