import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Layers, 
  Maximize2, 
  ChevronRight, 
  ChevronLeft, 
  Zap, 
  Cpu, 
  Sliders, 
  Sparkles,
  Play,
  Pause
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const phases = [
  {
    id: 'cad',
    stepNumber: '01',
    stepTag: 'FASE 01 · RIGGING & ESQUELETO CAD',
    badge: 'ENGENHARIA ESTRUTURAL 1:1',
    title: 'A Geometria Invisível: Rigging & Cálculos de Carga',
    description: 'Antes de qualquer luz acender, o palco existe como uma equação de forças milimétrica. Modelamos cada ponto de ancoragem, nó de treliça box truss e talha para suportar toneladas de equipamento sob condições climáticas extremas.',
    image: '/backgrounds/stage-truss-elevation.jpg',
    telemetry: {
      load: '22 TONELADAS',
      truss: 'BOX TRUSS Q50 / Q30',
      tolerance: '< 0.5MM',
      status: 'CÁLCULO ESTRUTURAL APROVADO'
    },
    visualHighlight: 'Mapeamento tridimensional de eixos X, Y e Z com distribuição de pontos de suspensão para grandes arenas.'
  },
  {
    id: 'cenografia',
    stepNumber: '02',
    stepTag: 'FASE 02 · CENOGRAFIA & TELAS LED',
    badge: 'ARQUITETURA EFÊMERA & MATERIAIS',
    title: 'A Arquitetura Cênica: Volumetria & Imersão',
    description: 'A estrutura ganha pele, identidade visual e proporção monumental. A cenografia transforma o aço bruto em um portal imersivo onde cada elemento de marcenaria, acabamento e tela de LED é compatibilizado antes da fabricação.',
    image: '/cases/case-fachada-cenografia.jpg',
    telemetry: {
      load: 'PAINÉIS LED P3.9: 280M²',
      truss: '12 MÓDULOS CENOGRÁFICOS',
      tolerance: 'VÃO LIVRE 18M',
      status: 'COMPATIBILIZAÇÃO TOTAL'
    },
    visualHighlight: 'Detalhamento de fachadas temáticas, cabines técnicas integradas e passagens de emergência em escala real.'
  },
  {
    id: 'show',
    stepNumber: '03',
    stepTag: 'FASE 03 · SHOW FINAL: LUZ & ESPETÁCULO',
    badge: 'IMPACTO SENSORIAL EM ARENA',
    title: 'O Espetáculo em Fúria: Iluminação & Realidade',
    description: 'A noite cai e o projeto sai da maquete para emocionar multidões. Feixes de moving heads, lasers volumétricos e pirotecnia disparam sincronizados, reproduzindo com fidelidade absoluta o render 3D aprovado.',
    image: '/backgrounds/spotlight-truss.jpg',
    telemetry: {
      load: '140 MOVING HEADS',
      truss: 'LASERS 12W RGB',
      tolerance: 'ARENA MULTIDÃO 50K+',
      status: '100% FIDELIDADE AO RENDER'
    },
    visualHighlight: 'Sincronia milimétrica entre iluminação volumétrica, projeção visual e a atmosfera cênica do festival.'
  }
];

export const CinematicConcertScroll = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  const currentPhase = phases[activeStep];

  // Auto-tour alternador a cada 6 segundos se ativado
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % phases.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Efeito Spotlight Beam seguindo mouse dentro do visualizador
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section className="py-24 sm:py-32 bg-[#050D19] relative border-t border-white/[0.08] overflow-hidden select-none">
      {/* Luz ambiente cênica no fundo */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[160px] opacity-15 pointer-events-none transition-all duration-1000"
        style={{
          background: activeStep === 0 
            ? 'radial-gradient(circle, #377BDB 0%, transparent 70%)' 
            : activeStep === 1 
            ? 'radial-gradient(circle, #63A4FF 0%, transparent 70%)' 
            : 'radial-gradient(circle, #4391FC 0%, #E9B65C 40%, transparent 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header da Experiência 21st.dev Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121D31] border border-[#377BDB]/40 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#63A4FF] shadow-[0_0_10px_#63A4FF] animate-pulse" />
              <span className="rotulo-tecnico text-[10px] text-[#63A4FF]">
                EVOLUÇÃO CINEMÁTICA DE PALCO · 21ST.DEV EXPERIENCE
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Da treliça nua ao{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#63A4FF] to-[#377BDB]">
                espetáculo em fúria
              </span>
            </h2>

            <p className="text-slate-300 text-sm max-w-2xl font-light leading-relaxed">
              Explore o ciclo de vida monumental de um palco de festival. Da engenharia analítica de rigging à montagem cenográfica e a apoteose com feixes de luz diante de milhares de pessoas.
            </p>
          </div>

          {/* Controles de Navegação e Auto-Tour */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#121D31] hover:bg-[#1B283D] text-[#63A4FF] border border-[#377BDB]/40 text-xs font-medium uppercase tracking-wider transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              title="Alternar tour automático"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pausar Tour' : 'Auto Tour'}</span>
            </button>

            <div className="flex items-center gap-1 bg-[#121D31] p-1 rounded-lg border border-white/[0.08]">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : phases.length - 1))}
                className="p-2 rounded hover:bg-white/[0.06] text-slate-300 hover:text-white transition-colors"
                aria-label="Fase anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % phases.length)}
                className="p-2 rounded hover:bg-white/[0.06] text-slate-300 hover:text-white transition-colors"
                aria-label="Próxima fase"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Timeline Bar dos 3 Estágios com Indicadores Dinâmicos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {phases.map((phase, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={phase.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsPlaying(false);
                }}
                className={`relative p-4 rounded-xl text-left transition-all border overflow-hidden ${
                  isActive
                    ? 'bg-[#121D31] border-[#377BDB] shadow-lg shadow-[#377BDB]/20'
                    : 'bg-[#0A1326]/60 border-white/[0.06] hover:bg-[#121D31]/80 hover:border-white/[0.15]'
                }`}
              >
                {/* Linha de progresso no topo do botão ativo */}
                {isActive && (
                  <motion.div 
                    layoutId="activeStepBorder"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#377BDB] via-[#63A4FF] to-[#377BDB]"
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span className={`rotulo-tecnico text-[11px] font-semibold ${isActive ? 'text-[#63A4FF]' : 'text-slate-500'}`}>
                    {phase.stepNumber} · FASE
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#050D19] text-slate-400 border border-white/[0.06]">
                    {phase.id === 'cad' ? 'CAD 3D' : phase.id === 'cenografia' ? 'MONTAGEM' : 'SHOWTIME'}
                  </span>
                </div>

                <p className="text-white text-xs sm:text-sm font-medium tracking-tight line-clamp-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {phase.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Palco Central Imersivo (21st.dev Stage Canvas com Spotlight Interativo) */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="card-chanfrado rounded-2xl bg-[#0A1326] border border-[#377BDB]/40 overflow-hidden shadow-2xl relative"
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#050D19]">
            
            {/* Imagem do Palco com transição suave */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentPhase.id}
                src={currentPhase.image}
                alt={currentPhase.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Spotlight Beam Follower interativo (Efeito moving-head de concerto) */}
            <div 
              className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-60 mix-blend-screen"
              style={{
                background: `radial-gradient(circle 350px at ${mousePos.x}% ${mousePos.y}%, rgba(99, 164, 255, 0.35) 0%, rgba(55, 123, 219, 0.1) 40%, transparent 80%)`
              }}
            />

            {/* Overlay Gradiente com Vinheta de Arena */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050D19] via-[#050D19]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050D19]/70 via-transparent to-[#050D19]/70 pointer-events-none" />

            {/* Mira Técnica / HUD nos cantos superiores */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A1326]/90 backdrop-blur-md border border-[#377BDB]/40 text-[#63A4FF]">
              <Cpu className="w-3.5 h-3.5" />
              <span className="rotulo-tecnico text-[10px]">
                {currentPhase.badge}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A1326]/90 backdrop-blur-md border border-white/[0.08] text-slate-300">
              <Activity className="w-3.5 h-3.5 text-[#63A4FF] animate-pulse" />
              <span className="rotulo-tecnico text-[10px]">
                TELEMETRIA ATIVA // 1:1 SCALE
              </span>
            </div>

            {/* Painel Inferior Flutuante com Métricas Técnicas */}
            <div className="absolute bottom-4 left-4 right-4 z-20 p-4 sm:p-6 rounded-xl bg-[#0A1326]/90 backdrop-blur-xl border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <span className="rotulo-tecnico text-[10px] text-[#63A4FF] block">
                  {currentPhase.stepTag}
                </span>
                <h3 className="text-base sm:text-xl font-semibold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {currentPhase.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {currentPhase.description}
                </p>
              </div>

              {/* Grid de Métricas de Engenharia */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 shrink-0 self-start md:self-auto border-t md:border-t-0 md:border-l border-white/[0.08] pt-3 md:pt-0 md:pl-6 text-[11px]">
                <div className="p-2 rounded bg-[#050D19]/80 border border-white/[0.05]">
                  <span className="text-slate-500 block text-[9px] uppercase font-light">CARGA / CAPACIDADE</span>
                  <span className="text-white font-medium">{currentPhase.telemetry.load}</span>
                </div>
                <div className="p-2 rounded bg-[#050D19]/80 border border-white/[0.05]">
                  <span className="text-slate-500 block text-[9px] uppercase font-light">ESPECIFICAÇÃO</span>
                  <span className="text-[#63A4FF] font-medium">{currentPhase.telemetry.truss}</span>
                </div>
                <div className="p-2 rounded bg-[#050D19]/80 border border-white/[0.05]">
                  <span className="text-slate-500 block text-[9px] uppercase font-light">TOLERÂNCIA</span>
                  <span className="text-white font-medium">{currentPhase.telemetry.tolerance}</span>
                </div>
                <div className="p-2 rounded bg-[#050D19]/80 border border-white/[0.05]">
                  <span className="text-slate-500 block text-[9px] uppercase font-light">STATUS</span>
                  <span className="text-[#63A4FF] font-medium">{currentPhase.telemetry.status}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
