import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ComparativoViewer } from '../components/ComparativoViewer';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { Layers, Sliders, ShieldCheck, ArrowRight } from 'lucide-react';

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
        <motion.span 
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rotulo-tecnico block text-[#63A4FF]"
        >
          {t('comparativo.pageTag', 'COMPARATIVO 3D VS REAL')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="text-3xl sm:text-5xl font-light text-white tracking-tight" 
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {t('comparativo.pageTitlePrefix', 'O que é idealizado:')}{' '}
          <span className="font-semibold text-[#63A4FF]">
            {t('comparativo.pageTitleHighlight', 'vira fato executado')}
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-slate-300 text-sm max-w-2xl font-light leading-relaxed"
        >
          {t('comparativo.pageSubtitle', 'Nossa modelagem não é uma ilustração artística ou render genérico de IA. É uma planta executiva tridimensional parametrizada para montagem real sem surpresas no evento.')}
        </motion.p>
      </div>

      {/* Mecanismo Interativo de Comparação 3D vs Real com objetos calibrados */}
      <ComparativoViewer hideHeader={true} />

      {/* Explicação Técnica dos Pilares de Fidelidade */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="card-chanfrado p-6 rounded-xl space-y-3 bg-[#121D31] border border-white/[0.06] hover:border-[#377BDB]/40 transition-colors shadow-lg"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0A1326] border border-[#377BDB]/30 flex items-center justify-center text-[#63A4FF]">
              <Layers className="w-5 h-5" />
            </div>
            <span className="rotulo-tecnico text-[10px] text-[#63A4FF] block">
              {t('comparativo.pillar1Tag', 'PARAMETRIZAÇÃO 1:1')}
            </span>
            <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('comparativo.pillar1Title', 'Escala e Proporção Real')}
            </h3>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              {t('comparativo.pillar1Desc', 'Cada treliça, módulo de bar e painel de LED é inserido com suas dimensões físicas milimétricas exatas dos fornecedores do evento.')}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="card-chanfrado p-6 rounded-xl space-y-3 bg-[#121D31] border border-white/[0.06] hover:border-[#377BDB]/40 transition-colors shadow-lg"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0A1326] border border-[#377BDB]/30 flex items-center justify-center text-[#63A4FF]">
              <Sliders className="w-5 h-5" />
            </div>
            <span className="rotulo-tecnico text-[10px] text-[#63A4FF] block">
              {t('comparativo.pillar2Tag', 'ILUMINAÇÃO CÊNICA')}
            </span>
            <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('comparativo.pillar2Title', 'Simulação Volumétrica de Luz')}
            </h3>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              {t('comparativo.pillar2Desc', 'Os feixes de luz, temperatura de cor e pontos de pirotecnia são simulados na modelagem 3D para antecipar o impacto visual da noite.')}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="card-chanfrado p-6 rounded-xl space-y-3 bg-[#121D31] border border-white/[0.06] hover:border-[#377BDB]/40 transition-colors shadow-lg"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0A1326] border border-[#377BDB]/30 flex items-center justify-center text-[#63A4FF]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="rotulo-tecnico text-[10px] text-[#63A4FF] block">
              {t('comparativo.pillar3Tag', 'ZERO IMPROVISO')}
            </span>
            <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('comparativo.pillar3Title', 'Compatibilidade de Montagem')}
            </h3>
            <p className="text-slate-300 text-xs font-light leading-relaxed">
              {t('comparativo.pillar3Desc', 'Eliminamos o retrabalho em campo: a equipe de produção monta com base nas coordenadas e eixos gerados diretamente da maquete técnica.')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Box de Conversão para Briefing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="card-chanfrado p-8 sm:p-10 rounded-2xl bg-[#121D31] border border-[#377BDB]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="rotulo-tecnico text-[10px] text-[#63A4FF]">PRECISÃO EXECUTIVA COMPROVADA</span>
            <h3 className="text-xl sm:text-2xl font-light text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quer essa mesma segurança técnica no seu evento?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-light max-w-xl">
              Alinhe sua demanda com Lucas Castro através do nosso terminal de briefing técnico e receba proposta com memorial descritivo 3D.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="shrink-0">
            <Link
              to="/briefing"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg shadow-[#377BDB]/20"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>Preencher Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

    </div>
  );
};
