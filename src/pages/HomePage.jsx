import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { ArrowRight } from 'lucide-react';

export const HomePage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead 
        title="Tentáculos Lab • Cenografia, Arquitetura Cênica & Projetos 3D"
        description={t('hero.subtext', 'O laboratório onde o conceito vira projeto executável. Cenografia e modelagem 3D para palcos, festivais, camarotes e ativações de marca com detalhamento estrutural.')}
        canonicalPath="/"
      />

      {/* 1. Hero Principal Estático Oficial */}
      <Hero />

      {/* 2. Liderança Técnica & Lucas Castro Showcase */}
      <section className="py-20 sm:py-28 bg-[#0A1326] relative border-t border-white/[0.07] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="card-chanfrado p-8 sm:p-12 rounded-2xl bg-[#121D31] border border-[#377BDB]/30 shadow-2xl space-y-8"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col sm:flex-row items-center gap-6 max-w-3xl">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-[#050D19] border-2 border-[#377BDB]/40 shrink-0 shadow-lg">
                  <img 
                    src="/branding/lucas-castro.jpg" 
                    alt="Lucas Castro - Tentáculos Lab" 
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <span className="rotulo-tecnico block text-[#63A4FF]">
                    {t('about.tag', 'LIDERANÇA TÉCNICA')}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-light text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {t('about.titlePrefix', 'Conectando criação e produção:')}{' '}
                    <span className="font-semibold text-[#63A4FF]">Lucas Castro</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                    {t('about.subtitle', 'Experiência consolidada em projetos de grande porte, conectando estética, viabilidade técnica, rigger e a experiência sensorial do público.')}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link
                    to="/about"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1B283D] hover:bg-[#377BDB] text-white border border-[#377BDB]/40 text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span>{t('nav.about', 'Quem Somos')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Projetos desenvolvidos pela Liderança Técnica (Conforme referência da imagem) */}
            <div className="pt-6 border-t border-white/[0.08] text-center space-y-3 w-full">
              <span className="rotulo-tecnico text-[10px] text-slate-400 block">
                {t('hero.festivalsLabel', 'EXPERIÊNCIA COMPROVADA EM GRANDES PRODUÇÕES')}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm text-slate-300 font-light">
                <span className="hover:text-white transition-colors cursor-default">Tomorrowland Brasil</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="hover:text-white transition-colors cursor-default">Lollapalooza</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="hover:text-white transition-colors cursor-default">Camarote Brahma</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="hover:text-white transition-colors cursor-default">Weekend Pedra Azul</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Terminal de Ação Final (Briefing Técnico - SEÇÃO MANTIDA) */}
      <section className="py-20 sm:py-28 bg-[#050D19] relative border-t border-white/[0.07] text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url('/backgrounds/spotlight-truss.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050D19] via-[#050D19]/90 to-[#0A1326] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="rotulo-tecnico block text-[#63A4FF]">
            {t('briefing.tag', 'BRIEFING TÉCNICO')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('briefing.titlePrefix', 'Terminal executivo:')}{' '}
            <span className="font-semibold text-[#63A4FF]">
              {t('briefing.titleHighlight', 'alinhe sua produção')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            {t('briefing.subtitle', 'Preencha os parâmetros essenciais da sua demanda. Seu briefing será sintetizado em memorial técnico e enviado para a Tentáculos Lab.')}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                to="/briefing"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xl shadow-[#377BDB]/25 flex items-center justify-center gap-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>Preencher Briefing Técnico</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <a
                href="https://wa.me/5511972629827"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#121D31] hover:bg-[#1B283D] text-white border border-white/[0.1] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <WhatsAppIcon className="w-4 h-4 text-[#63A4FF]" />
                <span>Contato Direto WhatsApp</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
