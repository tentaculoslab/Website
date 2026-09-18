import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SEOHead } from '../components/SEOHead';
import { usePortfolio } from '../context/PortfolioContext';
import { useLanguage } from '../context/LanguageContext';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { 
  ArrowRight, 
  Layers, 
  Sliders, 
  ShieldCheck, 
  Box, 
  Compass, 
  Ruler, 
  FileText 
} from 'lucide-react';

export const HomePage = () => {
  const { projects } = usePortfolio();
  const { t } = useLanguage();

  // Curadoria dos 3 projetos âncora para vitrine executiva da Home
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <SEOHead 
        title="Tentáculos Lab • Cenografia, Arquitetura Cênica & Projetos 3D"
        description={t('hero.subtext', 'O laboratório onde o conceito vira projeto executável. Cenografia e modelagem 3D para palcos, festivais, camarotes e ativações de marca com detalhamento estrutural.')}
        canonicalPath="/"
      />

      {/* Hero Principal */}
      <Hero />

      {/* 1. Curadoria de Projetos em Destaque (Sem poluição de busca/filtros) */}
      <section className="py-20 sm:py-28 bg-[#0A1326] relative border-t border-white/[0.07]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url('/backgrounds/truss-rigging-cad.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1326] via-[#0A1326]/90 to-[#050D19] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="rotulo-tecnico block">
                {t('projects.pageTag', 'A C E R V O  T É C N I C O')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('projects.titlePrefix', 'Atendemos os')}{' '}
                <span className="font-semibold text-[#63A4FF]">
                  {t('projects.titleHighlight', 'principais tipos de projeto')}
                </span>
              </h2>
              <p className="text-slate-400 text-sm max-w-xl font-light leading-relaxed">
                {t('projects.subtitle', 'Palcos, bares temáticos, ambientação imersiva, instagramáveis e ativações de marca com detalhamento 3D executável.')}
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#121D31] hover:bg-[#1B283D] text-[#63A4FF] hover:text-white border border-[#377BDB]/40 text-xs font-semibold uppercase tracking-wider transition-all self-start md:self-auto group"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>{t('projects.exploreArchive', 'Explorar Acervo Completo')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid Curado: Apenas 3 cards de alta fidelidade */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="card-chanfrado rounded-xl overflow-hidden group cursor-pointer flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-[#050D19] border-b border-white/[0.05]">
                    <img
                      src={project.coverImage || '/models/papai_noel_real_angle_0.png'}
                      alt={`${project.title} - Cenografia 3D | Tentáculos Lab`}
                      width="800"
                      height="450"
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0A1326]/90 backdrop-blur-md border border-[#377BDB]/40 text-[10px] text-[#63A4FF]">
                      <span className="rotulo-tecnico">{project.category}</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-base font-semibold text-white group-hover:text-[#63A4FF] transition-colors line-clamp-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs font-light line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3.5 bg-[#0A1326]/50 border-t border-white/[0.04] flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px] font-light">{project.year}</span>
                  <span className="text-[#63A4FF] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium text-[11px]">
                    {t('projects.inspect3D', 'Inspecionar 3D →')}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Vitrine da Tecnologia 3D vs Real (Banner Panorâmico sem duplicação do viewer) */}
      <section className="py-20 sm:py-28 bg-[#050D19] relative border-t border-white/[0.07] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none"
          style={{ backgroundImage: `url('/backgrounds/stage-truss-elevation.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050D19] via-[#0A1326]/90 to-[#050D19] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="card-chanfrado rounded-2xl p-8 sm:p-12 bg-[#0A1326]/95 border border-[#377BDB]/30 shadow-2xl space-y-8">
            <div className="max-w-3xl space-y-3">
              <span className="rotulo-tecnico block">
                {t('comparativo.tag', 'C O M P A R A T I V O  3 D  V S  R E A L')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('comparativo.titlePrefix', 'Do 3D à realidade:')}{' '}
                <span className="font-semibold text-[#63A4FF]">
                  {t('comparativo.titleHighlight', 'fidelidade milimétrica')}
                </span>
              </h2>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                {t('comparativo.subtitle', 'Mecanismo interativo de comparação técnica integrado ao projeto. Permite ao cliente inspecionar lado a lado a correspondência exata entre o modelo executivo 3D e o evento montado.')}
              </p>
            </div>

            {/* Prévia dos 3 Pilares Técnicos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="p-4 rounded-lg bg-[#121D31]/80 border border-white/[0.05] space-y-1.5">
                <span className="rotulo-tecnico text-[10px] text-[#63A4FF] flex items-center gap-1.5">
                  <Layers className="w-3 h-3" />
                  {t('comparativo.pillar1Tag', 'PARAMETRIZAÇÃO 1:1')}
                </span>
                <p className="text-white text-xs font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('comparativo.pillar1Title', 'Escala e Proporção Real')}
                </p>
                <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                  Dimensões milimétricas exatas dos fornecedores e peças.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#121D31]/80 border border-white/[0.05] space-y-1.5">
                <span className="rotulo-tecnico text-[10px] text-[#63A4FF] flex items-center gap-1.5">
                  <Sliders className="w-3 h-3" />
                  {t('comparativo.pillar2Tag', 'ILUMINAÇÃO CÊNICA')}
                </span>
                <p className="text-white text-xs font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('comparativo.pillar2Title', 'Simulação Volumétrica de Luz')}
                </p>
                <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                  Antecipação real dos feixes, reflexos e pirotecnia noturna.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#121D31]/80 border border-white/[0.05] space-y-1.5">
                <span className="rotulo-tecnico text-[10px] text-[#63A4FF] flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3" />
                  {t('comparativo.pillar3Tag', 'ZERO IMPROVISO')}
                </span>
                <p className="text-white text-xs font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('comparativo.pillar3Title', 'Compatibilidade de Montagem')}
                </p>
                <p className="text-slate-400 text-[11px] font-light leading-relaxed">
                  Equipes montam diretamente sobre coordenadas do modelo técnico.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/comparison"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-lg shadow-[#377BDB]/25"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>{t('comparativo.viewDetailsLink', 'Abrir Comparador Interativo 3D vs Real')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Metodologia em Síntese (As 4 Frentes de Fundação) */}
      <section className="py-20 sm:py-28 bg-[#0A1326] relative border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="rotulo-tecnico block">
                {t('method.tag', 'M E T O D O L O G I A')}
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('method.titlePrefix', 'Do briefing ao render aprovado:')}{' '}
                <span className="font-semibold text-[#63A4FF]">
                  {t('method.titleHighlight', 'o método')}
                </span>
              </h2>
              <p className="text-slate-400 text-sm max-w-xl font-light leading-relaxed">
                {t('method.subtitle', 'O cliente aprova vendo, não imaginando. Dividimos o projeto em 4 frentes que garantem precisão técnica e impacto visual.')}
              </p>
            </div>

            <Link
              to="/method"
              className="inline-flex items-center gap-1.5 text-xs text-[#63A4FF] hover:underline font-medium self-start md:self-auto"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>{t('method.viewDeepMethod', 'Aprofundar nas 4 Frentes de Fundação')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-chanfrado p-6 rounded-xl bg-[#121D31] space-y-3">
              <Compass className="w-5 h-5 text-[#63A4FF]" />
              <h4 className="text-white text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('method.frente1Title', 'Conceito')}
              </h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                {t('method.frente1Desc', 'Território criativo, narrativa e direção visual do evento.')}
              </p>
            </div>

            <div className="card-chanfrado p-6 rounded-xl bg-[#121D31] space-y-3">
              <Ruler className="w-5 h-5 text-[#63A4FF]" />
              <h4 className="text-white text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('method.frente2Title', 'Layout')}
              </h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                {t('method.frente2Desc', 'Planta baixa, fluxos de público e setorização espacial em escala real.')}
              </p>
            </div>

            <div className="card-chanfrado p-6 rounded-xl bg-[#121D31] space-y-3">
              <FileText className="w-5 h-5 text-[#63A4FF]" />
              <h4 className="text-white text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('method.frente3Title', 'Projeto Estrutural')}
              </h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                {t('method.frente3Desc', 'Estruturas, medidas, cotas e especificações prontas para montagem.')}
              </p>
            </div>

            <div className="card-chanfrado p-6 rounded-xl bg-[#121D31] space-y-3">
              <Box className="w-5 h-5 text-[#63A4FF]" />
              <h4 className="text-white text-sm font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('method.frente4Title', 'Maquete 3D')}
              </h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                {t('method.frente4Desc', 'Modelagem e renders do evento montado para aprovação visual sem surpresas.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Liderança Técnica & Lucas Castro Teaser */}
      <section className="py-20 sm:py-28 bg-[#050D19] relative border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="card-chanfrado p-8 sm:p-12 rounded-2xl bg-[#121D31] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="rotulo-tecnico block">
                {t('about.tag', 'L I D E R A N Ç A  T É C N I C A')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {t('about.titlePrefix', 'Conectando criação e produção:')}{' '}
                <span className="font-semibold text-[#63A4FF]">Lucas Castro</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                {t('about.subtitle', 'Experiência consolidada em projetos de grande porte, conectando estética, viabilidade técnica, cálculo de rigging e a experiência sensorial do público.')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#1B283D] hover:bg-[#377BDB] text-white border border-[#377BDB]/40 text-xs font-semibold uppercase tracking-wider transition-all"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>{t('nav.about', 'Quem Somos')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Terminal de Ação Final (Chamada Limpa para Briefing) */}
      <section className="py-20 sm:py-28 bg-[#0A1326] relative border-t border-white/[0.07] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="rotulo-tecnico block text-[#63A4FF]">
            {t('briefing.tag', 'B R I E F I N G  T É C N I C O')}
          </span>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('briefing.titlePrefix', 'Terminal executivo:')}{' '}
            <span className="font-semibold text-[#63A4FF]">
              {t('briefing.titleHighlight', 'alinhe sua produção')}
            </span>
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            {t('briefing.subtitle', 'Preencha os parâmetros essenciais da sua demanda. Seu briefing será sintetizado em memorial técnico e enviado com prioridade direta para Lucas Castro.')}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/briefing"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-xl shadow-[#377BDB]/20 flex items-center justify-center gap-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>Preencher Briefing Técnico</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/5511972629827"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#121D31] hover:bg-[#1B283D] text-white border border-white/[0.1] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <WhatsAppIcon className="w-4 h-4 text-[#63A4FF]" />
              <span>Contato Direto WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
