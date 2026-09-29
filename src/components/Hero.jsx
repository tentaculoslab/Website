import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 20
    }
  }
};

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

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8"
      >
        
        {/* Tagline Técnica Oficial com Telemetria */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121D31]/90 backdrop-blur-md border border-[#377BDB]/40 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-[#63A4FF] shadow-[0_0_8px_#63A4FF] animate-pulse" />
          <span className="rotulo-tecnico text-[11px] text-[#63A4FF]">
            {t('hero.tagline', 'O laboratório onde o conceito vira projeto executável')}
          </span>
        </motion.div>

        {/* Headline Principal com Tipografia Oficial e Contraste */}
        <motion.div variants={itemVariants} className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.08]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('hero.taglinePrefix', 'O laboratório onde o conceito vira')}{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#63A4FF] to-[#377BDB]">
              {t('hero.taglineHighlight', 'projeto executável')}
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            {t('hero.subtext', 'Somos o núcleo criativo, técnico e experimental da Tentáculos Produções. Transformamos ideias e necessidades de marcas em projetos visuais, cenográficos e experiências no mundo real.')}
          </p>
        </motion.div>

        {/* Pilares da Marca: Território & Gesto */}
        <motion.div variants={itemVariants} className="pt-2 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs border-y border-white/[0.08] py-4 px-6 bg-[#121D31]/50 backdrop-blur-md rounded-xl">
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

          {/* CTAs Limpos e Diretos com física tátil (Emil Kowalski) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <motion.div 
              whileHover={{ y: -2, scale: 1.01 }} 
              whileTap={{ scale: 0.98 }} 
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="w-full sm:w-auto"
            >
              <Link 
                to="/comparison"
                className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#377BDB]/25 transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>{t('comparativo.tag', 'Ver Comparativo 3D vs Real')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -2, scale: 1.01 }} 
              whileTap={{ scale: 0.98 }} 
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="w-full sm:w-auto"
            >
              <Link 
                to="/projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded bg-[#121D31] hover:bg-[#1B283D] text-slate-200 border border-white/[0.1] text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>{t('hero.ctaProjects', 'Explorar Projetos 3D')}</span>
              </Link>
            </motion.div>
          </div>

          {/* Credenciais e Trajetória Real (Festivais) */}
          <motion.div variants={itemVariants} className="pt-12 border-t border-white/[0.06] text-center space-y-3 w-full">
            <span className="rotulo-tecnico text-[10px] text-slate-400 block">
              {t('hero.festivalsLabel', 'EXPERIÊNCIA COMPROVADA EM GRANDES PRODUÇÕES')}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-300 font-light">
              <span className="hover:text-white transition-colors cursor-default">Tomorrowland Brasil</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="hover:text-white transition-colors cursor-default">Lollapalooza</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="hover:text-white transition-colors cursor-default">Camarote Brahma</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="hover:text-white transition-colors cursor-default">Weekend Pedra Azul</span>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};
