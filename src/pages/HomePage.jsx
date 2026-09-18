import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { JuxtaposeViewer } from '../components/JuxtaposeViewer';
import { MethodSection } from '../components/MethodSection';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { AboutSection } from '../components/AboutSection';
import { ProjectEstimator } from '../components/ProjectEstimator';
import { SEOHead } from '../components/SEOHead';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HomePage = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEOHead 
        title="Tentáculos Lab • Cenografia, Arquitetura Cênica & Projetos 3D"
        description={t('hero.subtext', 'O laboratório onde o conceito vira projeto executável. Cenografia e modelagem 3D para palcos, festivais, camarotes e ativações de marca com detalhamento estrutural.')}
        canonicalPath="/"
      />

      {/* Hero Principal */}
      <Hero />

      {/* Seção Juxtapose com Chamada para Página Dedicada */}
      <section className="relative">
        <JuxtaposeViewer />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 -mt-6 text-right relative z-10">
          <Link 
            to="/comparativo" 
            className="inline-flex items-center gap-1.5 text-xs text-[#63A4FF] hover:underline font-medium"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span>{t('juxtapose.viewDetailsLink', 'Ver detalhes da tecnologia Juxtapose')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Método de Fundação com Link Direto */}
      <section className="relative">
        <MethodSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 -mt-6 text-right relative z-10">
          <Link 
            to="/metodo" 
            className="inline-flex items-center gap-1.5 text-xs text-[#63A4FF] hover:underline font-medium"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span>{t('method.viewDeepMethod', 'Aprofundar nas 4 Frentes de Fundação')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Portfólio de Projetos */}
      <section className="relative">
        <PortfolioGrid />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 -mt-6 text-right relative z-10">
          <Link 
            to="/projetos" 
            className="inline-flex items-center gap-1.5 text-xs text-[#63A4FF] hover:underline font-medium"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <span>{t('projects.exploreArchive', 'Explorar acervo completo de projetos cenográficos')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Perfil Lucas Castro */}
      <AboutSection />

      {/* Terminal de Briefing Técnico */}
      <ProjectEstimator />
    </>
  );
};
