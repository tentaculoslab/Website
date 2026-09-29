import React from 'react';

/**
 * ScenicBlueprintBackground - Background Oficial da Tentáculos Lab
 * 
 * Substitui os prismas 3D genéricos por uma malha técnica arquitetônica
 * e blueprint cênico inspirado em plantas executivas de palcos e festivais.
 * 
 * Conforme Manual de Identidade Visual (Seção 5.3):
 * - Fundo escuro azul-petróleo (#0A1326) e profundo (#050D19).
 * - Grid técnico CAD com coordenadas de rigging.
 * - Textura de treliças (box truss) e elevações técnicas com opacidade calibrada (20%-25%).
 * - Zero interferência com a leitura de conteúdo.
 */
export const ScenicBlueprintBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Base Gradiente Escuro Oficial da Marca */}
      <div className="absolute inset-0 bg-[#0A1326]" />

      {/* 2. Camada Blueprint de Treliças & Elevação Técnica de Palco */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url('/backgrounds/stage-truss-elevation.jpg')`,
          filter: 'contrast(120%) brightness(85%)'
        }}
      />

      {/* 3. Grid Vetorial CAD Parametrizado (Malha 40px com eixos a cada 200px) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Grid secundário fino de 40px */}
          <pattern id="cad-grid-small" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#63A4FF" strokeWidth="0.5" strokeOpacity="0.4" />
          </pattern>
          {/* Grid principal de 200px com mira central (+) */}
          <pattern id="cad-grid-large" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect width="200" height="200" fill="url(#cad-grid-small)" />
            <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#377BDB" strokeWidth="1" strokeOpacity="0.7" />
            {/* Miras técnicas nas interseções (+) */}
            <path d="M 10 0 L -10 0 M 0 10 L 0 -10" stroke="#63A4FF" strokeWidth="1" strokeOpacity="0.9" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cad-grid-large)" />
      </svg>

      {/* 4. Feixes Cênicos Volumétricos Sutis (Simulação de Iluminação de Palco) */}
      <div 
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #377BDB 0%, #0A1326 70%, transparent 100%)'
        }}
      />
      <div 
        className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #63A4FF 0%, #050D19 70%, transparent 100%)'
        }}
      />

      {/* 5. Coordenadas de Engenharia Cênica Flutuantes nos Cantos (Marca D'água Técnica) */}
      <div className="absolute top-24 left-6 hidden lg:flex flex-col gap-1 text-[9px] text-slate-500 font-medium tracking-[0.25em] uppercase opacity-40" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <span>COORD // X: 42.80M  Y: 18.50M  Z: +12.00M</span>
        <span>SYS // TRUSS RIGGING 1:1 · CAD EXECUTIVO</span>
      </div>

      <div className="absolute bottom-12 right-6 hidden lg:flex flex-col items-end gap-1 text-[9px] text-slate-500 font-medium tracking-[0.25em] uppercase opacity-40" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <span>TENTÁCULOS LAB · CENOGRAFIA PARAMETRIZADA</span>
        <span>TOLERÂNCIA ESTRUTURAL &lt; 0.5MM</span>
      </div>

      {/* 6. Vinheta Profunda (#050D19) para garantir legibilidade dos textos e cards */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1326]/60 via-transparent to-[#050D19]/90 pointer-events-none" />
    </div>
  );
};
