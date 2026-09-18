import React from 'react';
import { ComparativoViewer } from '../components/ComparativoViewer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const ComparativoPage = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <SEOHead 
        title={`${t('comparativo.titlePrefix', 'Tecnologia Comparativa 3D vs. Real')} | Tentáculos Lab`}
        description={t('comparativo.subtitle', 'Inspecione a fidelidade estrutural e cenográfica da Tentáculos Lab. Compare lado a lado o projeto executivo 3D e a execução física real do evento.')}
        canonicalPath="/comparison"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 space-y-3">
        <span className="rotulo-tecnico block">
          {t('comparativo.pageTag', 'C O M P A R A T I V O  3 D  V S  R E A L')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('comparativo.pageTitlePrefix', 'O que é idealizado:')}{' '}
          <span className="font-semibold text-[#63A4FF]">
            {t('comparativo.pageTitleHighlight', 'vira fato executado')}
          </span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
          {t('comparativo.pageSubtitle', 'Nossa modelagem não é uma ilustração artística ou render genérico de IA. É uma planta executiva tridimensional parametrizada para montagem real sem surpresas no evento.')}
        </p>
      </div>

      {/* Mecanismo Interativo de Comparação 3D vs Real (sem duplicação de cabeçalho) */}
      <ComparativoViewer hideHeader={true} />

      {/* Explicação Técnica dos Pilares de Fidelidade (sem números arbitrários) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-chanfrado p-6 rounded-xl space-y-3">
            <span className="rotulo-tecnico text-[10px]">
              {t('comparativo.pillar1Tag', 'PARAMETRIZAÇÃO 1:1')}
            </span>
            <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('comparativo.pillar1Title', 'Escala e Proporção Real')}
            </h3>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              {t('comparativo.pillar1Desc', 'Cada treliça, módulo de bar e painel de LED é inserido com suas dimensões físicas milimétricas exatas dos fornecedores do evento.')}
            </p>
          </div>

          <div className="card-chanfrado p-6 rounded-xl space-y-3">
            <span className="rotulo-tecnico text-[10px]">
              {t('comparativo.pillar2Tag', 'ILUMINAÇÃO CÊNICA')}
            </span>
            <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('comparativo.pillar2Title', 'Simulação Volumétrica de Luz')}
            </h3>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              {t('comparativo.pillar2Desc', 'Os feixes de luz, temperatura de cor e pontos de pirotecnia são simulados na modelagem 3D para antecipar o impacto visual da noite.')}
            </p>
          </div>

          <div className="card-chanfrado p-6 rounded-xl space-y-3">
            <span className="rotulo-tecnico text-[10px]">
              {t('comparativo.pillar3Tag', 'ZERO IMPROVISO')}
            </span>
            <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('comparativo.pillar3Title', 'Compatibilidade de Montagem')}
            </h3>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              {t('comparativo.pillar3Desc', 'Eliminamos o retrabalho em campo: a equipe de produção monta com base nas coordenadas e eixos gerados diretamente da maquete técnica.')}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
