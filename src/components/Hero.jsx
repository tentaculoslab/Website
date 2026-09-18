import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-[#0A1326]">
      {/* Camada Blueprint Oficial (Opacidade 20% a 30%, arte técnica de grid e rigging) */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/backgrounds/stage-lighting-platform.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1326]/60 via-[#0A1326]/90 to-[#0A1326] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Tagline Técnica Oficial */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121D31] border border-[#377BDB]/30 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-[#63A4FF] animate-pulse" />
          <span className="rotulo-tecnico text-[11px] text-[#63A4FF]">
            {t('hero.tagline', 'O laboratório onde o conceito vira projeto executável')}
          </span>
        </div>

        {/* Headline Principal com Tipografia Oficial */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.08]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('hero.taglinePrefix', 'O laboratório onde o conceito vira')}{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#63A4FF] to-[#377BDB]">
              {t('hero.taglineHighlight', 'projeto executável')}
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t('hero.subtext', 'Somos o núcleo criativo, técnico e experimental da Tentáculos Produções. Transformamos ideias e necessidades de marcas em projetos visuais, cenográficos e experiências no mundo real.')}
          </p>
        </div>

        {/* Pilares da Marca: Território & Gesto */}
        <div className="pt-2 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs border-y border-white/[0.08] py-4 px-6 bg-[#0A1326]/40 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="rotulo-tecnico text-[10px] text-slate-400">{t('hero.territory', 'TERRITÓRIO')}:</span>
              <span className="text-white font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('hero.territoryVal', 'Técnico e experimental')}
              </span>
            </div>
            <div className="hidden sm:block w-px h-3 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="rotulo-tecnico text-[10px] text-slate-400">{t('hero.gesture', 'GESTO')}:</span>
              <span className="text-white font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('hero.gestureVal', 'Preciso, nunca decorativo')}
              </span>
            </div>
          </div>

          {/* CTAs Limpos e Diretos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link 
              to="/comparison"
              className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#377BDB]/20"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>{t('comparativo.tag', 'Ver Comparativo 3D vs Real')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link 
              to="/projects"
              className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#121D31] hover:bg-[#1B283D] text-slate-200 border border-white/[0.1] text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>{t('hero.ctaProjects', 'Explorar Projetos 3D')}</span>
            </Link>
          </div>

          {/* Credenciais e Trajetória Real (Festivais) */}
          <div className="pt-12 border-t border-white/[0.06] text-center space-y-3">
            <span className="rotulo-tecnico text-[10px] text-slate-400 block">
              {t('hero.festivalsLabel', 'EXPERIÊNCIA COMPROVADA EM GRANDES PRODUÇÕES')}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-300 font-light">
              <span className="hover:text-white transition-colors">Tomorrowland Brasil</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="hover:text-white transition-colors">Lollapalooza</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="hover:text-white transition-colors">Camarote Brahma</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="hover:text-white transition-colors">Weekend Pedra Azul</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
