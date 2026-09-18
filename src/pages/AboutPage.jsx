import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { SEOHead } from '../components/SEOHead';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-16">
      <SEOHead 
        title={`${t('nav.about', 'Quem Somos')} • Lucas Castro | Tentáculos Lab`}
        description={t('about.specialist', 'Conheça a mente por trás da Tentáculos Lab: Lucas Castro. Trajetória técnica em grandes produções e festivais.')}
        canonicalPath="/about"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 space-y-3">
        <span className="rotulo-tecnico block">
          {t('about.tag', 'L I D E R A N Ç A  T É C N I C A')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('about.titlePrefix', 'Conectando criação e produção:')}{' '}
          <span className="font-semibold text-[#63A4FF]">Lucas Castro</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl font-light leading-relaxed">
          {t('about.subtitle', 'Experiência consolidada em projetos de grande porte, conectando estética, viabilidade técnica, cálculo de rigging e a experiência sensorial do público.')}
        </p>
      </div>

      <AboutSection hideHeader={true} />

      {/* Contato Direto com Lucas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="card-chanfrado p-8 rounded-2xl bg-[#121D31] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="rotulo-tecnico text-[10px]">
              {t('about.directContactTitle', 'CONTATO DIRETO')}
            </span>
            <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {t('about.directContactHeading', 'Fale diretamente com o responsável técnico')}
            </h3>
            <p className="text-slate-400 text-xs font-light">
              {t('about.directContactSub', 'lucas@tentaculosproducoes.com.br • Atendimento a marcas, agências e produtoras de eventos.')}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5511972629827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-medium uppercase tracking-wider transition-all shadow-md"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>(11) 9 7262-9827</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
