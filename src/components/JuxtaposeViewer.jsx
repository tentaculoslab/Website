import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Eye, Layers, Sliders, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { defaultJuxtaposeCases } from '../data/juxtaposeCases';

export const JuxtaposeViewer = ({
  initialPosition = 50,
  cases = defaultJuxtaposeCases
}) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeCase = cases[activeCaseIndex] || cases[0];

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (isDragging) updatePosition(e.clientX);
    };
    const handleGlobalUp = () => {
      if (isDragging) setIsDragging(false);
    };

    window.addEventListener('pointermove', handleGlobalMove, { passive: true });
    window.addEventListener('pointerup', handleGlobalUp);
    return () => {
      window.removeEventListener('pointermove', handleGlobalMove);
      window.removeEventListener('pointerup', handleGlobalUp);
    };
  }, [isDragging, updatePosition]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section id="comparativo-tecnico" className="py-24 sm:py-32 bg-[#0A1326] relative border-t border-white/[0.07] overflow-hidden">
      {/* Background blueprint subtle texture (opacidade 20-30% conforme manual) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/backgrounds/stage-truss-elevation.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1326] via-[#0A1326]/90 to-[#050D19] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="rotulo-tecnico block">
              0 3 · T E C N O L O G I A  J U X T A P O S E
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              Do 3D à realidade: <span className="font-semibold text-[#63A4FF]">fidelidade milimétrica</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
              Mecanismo interativo de comparação técnica integrado ao projeto. Permite ao cliente inspecionar lado a lado a correspondência exata entre o modelo executivo 3D e o evento montado.
            </p>
          </div>

          {/* Selector Buttons for Slots */}
          <div className="flex items-center gap-2 bg-[#121D31] p-1.5 rounded-lg border border-white/[0.08] self-start md:self-auto">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPos(50);
                }}
                className={`px-3.5 py-1.5 rounded text-[11px] font-medium transition-all ${
                  activeCaseIndex === idx
                    ? 'bg-[#377BDB] text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Slot {idx + 1}: {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Juxtapose Interactive Canvas */}
        <div className="card-chanfrado rounded-xl p-2 sm:p-4 bg-[#121D31] shadow-2xl relative">
          
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="slider"
            aria-valuenow={Math.round(sliderPos)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Controle deslizante Juxtapose de comparação entre modelagem 3D e evento real"
            className="relative aspect-[16/10] sm:aspect-video w-full select-none overflow-hidden rounded-lg bg-[#050D19] cursor-ew-resize outline-none focus:ring-2 focus:ring-[#63A4FF]"
            style={{ touchAction: 'pan-y' }}
          >
            {/* After Image (Full Background - Evento Real) */}
            <img
              src={activeCase.afterImage}
              alt={activeCase.afterLabel}
              className="absolute inset-0 h-full w-full object-cover pointer-events-none"
              loading="lazy"
            />

            {/* Before Image (Clipped Overlay - Projeto 3D) */}
            <div
              className="absolute inset-0 h-full overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activeCase.beforeImage}
                alt={activeCase.beforeLabel}
                className="absolute inset-0 h-full max-w-none object-cover"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%'
                }}
                loading="lazy"
              />
            </div>

            {/* Before Badge (Top Left) */}
            <div 
              className={`absolute top-4 left-4 z-20 px-3 py-1.5 rounded bg-[#0A1326]/90 backdrop-blur-md border border-[#377BDB]/40 transition-opacity duration-200 ${
                sliderPos < 15 ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <span className="rotulo-tecnico text-[10px] text-[#63A4FF] flex items-center gap-1.5">
                <Layers className="w-3 h-3" />
                {activeCase.beforeLabel}
              </span>
            </div>

            {/* After Badge (Top Right) */}
            <div 
              className={`absolute top-4 right-4 z-20 px-3 py-1.5 rounded bg-[#0A1326]/90 backdrop-blur-md border border-white/[0.1] transition-opacity duration-200 ${
                sliderPos > 85 ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <span className="rotulo-tecnico text-[10px] text-slate-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#63A4FF]" />
                {activeCase.afterLabel}
              </span>
            </div>

            {/* Vertical Divider Bar */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Vertical line with subtle glow */}
              <div className="absolute top-0 bottom-0 w-[2px] -ml-[1px] bg-[#63A4FF] shadow-[0_0_12px_rgba(99,164,255,0.8)]" />

              {/* Center Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0A1326] border-2 border-[#63A4FF] shadow-[0_0_18px_rgba(99,164,255,0.7)] flex items-center justify-center text-white">
                <div className="flex items-center gap-0.5">
                  <ChevronLeft className="w-3.5 h-3.5 text-[#63A4FF]" />
                  <ChevronRight className="w-3.5 h-3.5 text-[#63A4FF]" />
                </div>
              </div>
            </div>

            {/* Mobile Interaction Hint */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1 rounded-full bg-[#0A1326]/80 backdrop-blur-md text-[10px] text-slate-300 border border-white/[0.08] pointer-events-none flex items-center gap-1.5">
              <Sliders className="w-3 h-3 text-[#63A4FF]" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>Arraste para comparar</span>
            </div>
          </div>

          {/* Technical Info Bar below slider */}
          <div className="mt-4 px-2 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/[0.05] text-xs">
            <div>
              <p className="font-semibold text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {activeCase.title}
              </p>
              <p className="text-slate-400 text-[11px] font-light mt-0.5">
                {activeCase.description}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A1326] border border-[#377BDB]/30 text-slate-300 font-light whitespace-nowrap self-start sm:self-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-[#377BDB]" />
              <span className="text-[11px]">{activeCase.specs}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
