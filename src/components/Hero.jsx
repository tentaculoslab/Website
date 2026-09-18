import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-[#0A1326]">
      {/* Camada Blueprint Oficial (Opacidade 20% a 30%, arte técnica de grid e rigging) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/backgrounds/stage-lighting-platform.jpg')` }}
      />

      {/* Gradiente Azul-Marinho sobre Azul-Marinho (Conforme manual, sem degradê colorido) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1326]/90 via-[#0A1326]/85 to-[#0A1326] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Rótulo Técnico Oficial da Marca (01 · A MARCA) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121D31] border border-[#377BDB]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#377BDB]" />
            <span className="rotulo-tecnico text-[10px] sm:text-[11px]">
              0 1 · A M A R C A
            </span>
          </div>

          {/* Título Principal Oficial (Poppins Light com destaque em SemiBold azul) */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.15]">
            O laboratório onde o conceito vira <br className="hidden sm:inline" />
            <span className="font-semibold text-[#63A4FF]">projeto executável</span>
          </h1>

          {/* Manifesto Oficial da Marca */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light max-w-3xl mx-auto leading-relaxed">
            Somos o núcleo criativo, técnico e experimental da Tentáculos Produções. Responsável por transformar ideias, necessidades e objetivos de uma marca em projetos visuais, cenográficos e experiências que possam ser compreendidos, apresentados e executados no mundo real.
          </p>

          {/* Princípios Oficiais do Manual: Território & Gesto */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="px-3.5 py-1.5 rounded bg-[#121D31]/90 border border-white/[0.08] text-xs">
              <span className="rotulo-tecnico text-[10px] text-slate-400 block mb-0.5">TERRITÓRIO</span>
              <span className="text-white font-medium text-xs">Técnico e experimental</span>
            </div>

            <div className="px-3.5 py-1.5 rounded bg-[#121D31]/90 border border-white/[0.08] text-xs">
              <span className="rotulo-tecnico text-[10px] text-slate-400 block mb-0.5">GESTO</span>
              <span className="text-white font-medium text-xs">Preciso, nunca decorativo</span>
            </div>
          </div>

          {/* CTAs Limpos e Diretos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#comparativo-tecnico"
              className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#377BDB]/20"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>Ver Comparativo 3D vs Real</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="#portfolio"
              className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#121D31] hover:bg-[#1B283D] text-slate-200 border border-white/[0.1] text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>Explorar Tipologias</span>
            </a>
          </div>

          {/* Credenciais e Trajetória Real (Sem invenção) */}
          <div className="pt-12 border-t border-white/[0.06] text-center space-y-3">
            <span className="rotulo-tecnico text-[10px] text-slate-400 block">
              TRAJETÓRIA & PRODUÇÕES DE GRANDE PORTE
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-300 font-light">
              <span className="hover:text-white transition-colors">Tomorrowland Brasil</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="hover:text-white transition-colors">Lollapalooza</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="hover:text-white transition-colors">Camarote Brahma (Circuito Nacional)</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="hover:text-white transition-colors">Weekend Pedra Azul</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
