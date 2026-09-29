import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Compass, Ruler, FileText, Box } from 'lucide-react';

export const MethodSection = ({ hideHeader = false }) => {
  const { t } = useLanguage();

  const frentes = [
    {
      num: t('method.frente1Num', '01'),
      icon: Compass,
      title: t('method.frente1Title', 'Conceito'),
      desc: t('method.frente1Desc', 'Território criativo, narrativa e direção visual do evento. A ideia que organiza todas as decisões seguintes.'),
      entrega: t('method.frente1Entrega', 'Apresentação de conceito com referências e direção visual')
    },
    {
      num: t('method.frente2Num', '02'),
      icon: Ruler,
      title: t('method.frente2Title', 'Layout'),
      desc: t('method.frente2Desc', 'Planta baixa, fluxos de público, setorização e ocupação do espaço em escala.'),
      entrega: t('method.frente2Entrega', 'Planta baixa em escala, com setorização e fluxos')
    },
    {
      num: t('method.frente3Num', '03'),
      icon: FileText,
      title: t('method.frente3Title', 'Projeto técnico estrutural'),
      desc: t('method.frente3Desc', 'Estruturas, medidas, cotas e especificações prontas para orçamento e montagem.'),
      entrega: t('method.frente3Entrega', 'Pranchas técnicas com medidas e cotas + Quantitativo de estruturas e peças')
    },
    {
      num: t('method.frente4Num', '04'),
      icon: Box,
      title: t('method.frente4Title', 'Projeto 3D'),
      desc: t('method.frente4Desc', 'Modelagem e renders do evento montado — o cliente aprova vendo, não imaginando.'),
      entrega: t('method.frente4Entrega', 'Modelo 3D do evento montado + Renders ultrarrealistas por ambiente')
    }
  ];

  return (
    <section id="metodo" className={`${hideHeader ? 'py-6 sm:py-8' : 'py-20 sm:py-28'} bg-[#050D19] relative ${hideHeader ? '' : 'border-t border-white/[0.07]'} overflow-hidden`}>
      {/* Blueprint background texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/backgrounds/truss-rigging-cad.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050D19] via-[#0A1326]/80 to-[#0A1326] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Bloco Inicial do Método (se não estiver em página dedicada com hideHeader) */}
        {!hideHeader && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="rotulo-tecnico block text-[#63A4FF]">
                {t('method.tag', 'METODOLOGIA')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('method.titlePrefix', 'Do briefing ao')}{' '}
                <span className="font-semibold text-[#63A4FF]">
                  {t('method.titleHighlight', 'render aprovado')}
                </span>
              </h2>
              <p className="text-slate-300 text-sm max-w-2xl font-light leading-relaxed">
                {t('method.subtitle', 'O cliente aprova vendo, não imaginando. Dividimos o projeto em 4 frentes que garantem precisão técnica e impacto visual.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card-chanfrado p-6 sm:p-8 rounded-xl bg-[#121D31] space-y-4 border border-white/[0.06] hover:border-[#377BDB]/40 transition-colors shadow-lg"
              >
                <span className="rotulo-tecnico text-[10px] text-[#63A4FF]">
                  BRIEFING E CONCEITO
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('method.frente1Title', 'Conceito')} & Análise
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {t('method.frente1Desc', 'O trabalho começa pela análise do briefing, entendendo o propósito do projeto, o público, o espaço disponível, a identidade da marca, o orçamento e os resultados esperados.')}
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card-chanfrado p-6 sm:p-8 rounded-xl bg-[#121D31] space-y-4 border border-white/[0.06] hover:border-[#377BDB]/40 transition-colors shadow-lg"
              >
                <span className="rotulo-tecnico text-[10px] text-[#63A4FF]">
                  DESENVOLVIMENTO
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('method.frente4Title', 'Projeto 3D')} & Detalhamento
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {t('method.frente4Desc', 'Modelagem e renders do evento montado — o cliente aprova vendo, não imaginando.')}
                </p>
              </motion.div>
            </div>
          </div>
        )}

        {/* Frentes de Fundação e Entregas */}
        <div className="space-y-10">
          <div className="space-y-2">
            <span className="rotulo-tecnico block text-[#63A4FF]">
              ESCOPO E ENTREGAS
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Fundação <span className="font-semibold text-[#63A4FF]">do projeto executivo</span>
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl font-light leading-relaxed">
              Quatro frentes que caminham juntas, do conceito à prancha técnica — cada uma com sua entrega formal descrita.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frentes.map((frente) => {
              const IconComp = frente.icon;
              return (
                <motion.div 
                  key={frente.num} 
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="card-chanfrado p-6 rounded-xl bg-[#121D31] border border-white/[0.06] hover:border-[#377BDB]/50 flex flex-col justify-between space-y-6 transition-colors shadow-lg group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#0A1326] border border-[#377BDB]/30 flex items-center justify-center text-[#63A4FF] group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 group-hover:text-[#63A4FF] transition-colors">
                        Frente {frente.num}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white tracking-tight pt-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {frente.title}
                    </h3>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">
                      {frente.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                    <span className="rotulo-tecnico text-[9px] text-[#63A4FF] block">
                      ENTREGA
                    </span>
                    <p className="text-slate-200 text-xs font-normal">
                      {frente.entrega}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
