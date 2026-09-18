import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const MethodSection = ({ hideHeader = false }) => {
  const { t } = useLanguage();

  const frentes = [
    {
      num: t('method.frente1Num', '01'),
      title: t('method.frente1Title', 'Conceito'),
      desc: t('method.frente1Desc', 'Território criativo, narrativa e direção visual do evento. A ideia que organiza todas as decisões seguintes.'),
      entrega: t('method.frente1Entrega', 'Apresentação de conceito com referências e direção visual')
    },
    {
      num: t('method.frente2Num', '02'),
      title: t('method.frente2Title', 'Layout'),
      desc: t('method.frente2Desc', 'Planta baixa, fluxos de público, setorização e ocupação do espaço em escala.'),
      entrega: t('method.frente2Entrega', 'Planta baixa em escala, com setorização e fluxos')
    },
    {
      num: t('method.frente3Num', '03'),
      title: t('method.frente3Title', 'Projeto técnico estrutural'),
      desc: t('method.frente3Desc', 'Estruturas, medidas, cotas e especificações prontas para orçamento e montagem.'),
      entrega: t('method.frente3Entrega', 'Pranchas técnicas com medidas e cotas + Quantitativo de estruturas e peças')
    },
    {
      num: t('method.frente4Num', '04'),
      title: t('method.frente4Title', 'Projeto 3D'),
      desc: t('method.frente4Desc', 'Modelagem e renders do evento montado — o cliente aprova vendo, não imaginando.'),
      entrega: t('method.frente4Entrega', 'Modelo 3D do evento montado + Renders ultrarrealistas por ambiente')
    }
  ];

  return (
    <section id="metodo" className={`${hideHeader ? 'py-6 sm:py-8' : 'py-24 sm:py-32'} bg-[#050D19] relative ${hideHeader ? '' : 'border-t border-white/[0.07]'} overflow-hidden`}>
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
              <span className="rotulo-tecnico block">
                {t('method.tag', 'M E T O D O L O G I A')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
                {t('method.titlePrefix', 'Do briefing ao')}{' '}
                <span className="font-semibold text-[#63A4FF]">
                  {t('method.titleHighlight', 'render aprovado')}
                </span>
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
                {t('method.subtitle', 'O cliente aprova vendo, não imaginando. Dividimos o projeto em 4 frentes que garantem precisão técnica e impacto visual.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card-chanfrado p-6 sm:p-8 rounded-xl bg-[#121D31] space-y-4">
                <span className="rotulo-tecnico text-[10px] text-[#63A4FF]">
                  B R I E F I N G   E   C O N C E I T O
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('method.frente1Title', 'Conceito')} & Análise
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {t('method.frente1Desc', 'O trabalho começa pela análise do briefing, entendendo o propósito do projeto, o público, o espaço disponível, a identidade da marca, o orçamento e os resultados esperados.')}
                </p>
              </div>

              <div className="card-chanfrado p-6 sm:p-8 rounded-xl bg-[#121D31] space-y-4">
                <span className="rotulo-tecnico text-[10px] text-[#63A4FF]">
                  D E S E N V O L V I M E N T O
                </span>
                <h3 className="text-lg font-semibold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('method.frente4Title', 'Projeto 3D')} & Detalhamento
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {t('method.frente4Desc', 'Modelagem e renders do evento montado — o cliente aprova vendo, não imaginando.')}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Frentes de Fundação e Entregas (sem tags numéricas confusas) */}
        <div className="space-y-10">
          <div className="space-y-2">
            <span className="rotulo-tecnico block">
              E S C O P O   E   E N T R E G A S
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Fundação <span className="font-semibold text-[#63A4FF]">do projeto executivo</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
              Quatro frentes que caminham juntas, do conceito à prancha técnica — cada uma com sua entrega formal descrita.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frentes.map((frente) => (
              <div 
                key={frente.num} 
                className="card-chanfrado p-6 rounded-xl bg-[#121D31] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <span className="rotulo-tecnico text-base font-semibold text-[#63A4FF] block">
                    Frente {frente.num}
                  </span>
                  <h3 className="text-base font-semibold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {frente.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">
                    {frente.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                  <span className="rotulo-tecnico text-[9px] text-slate-500 block">
                    ENTREGA
                  </span>
                  <p className="text-slate-200 text-xs font-normal">
                    {frente.entrega}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
