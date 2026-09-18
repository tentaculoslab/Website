import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050D19] text-slate-400 border-t border-white/[0.08] pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Marca & Manifesto */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block" aria-label="Tentáculos Lab - Início">
              <img 
                src="/logo-white.png" 
                alt="tentáculos ◉ lab" 
                width="160"
                height="36"
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-light">
              {t('footer.manifesto', 'O laboratório onde o conceito vira projeto executável. Núcleo criativo, técnico e experimental da Tentáculos Produções especializado em cenografia de palcos, eventos e ativações de marca.')}
            </p>
            <div className="pt-1">
              <span className="rotulo-tecnico text-[10px] text-slate-500">
                {t('footer.location', 'BRASIL · ATENDIMENTO GLOBAL')}
              </span>
            </div>
          </div>

          {/* Col 2: Rotas & Navegação */}
          <div className="lg:col-span-2 space-y-3">
            <span className="rotulo-tecnico text-[10px] text-white block">
              {t('footer.navTitle', 'NAVEGAÇÃO')}
            </span>
            <ul className="space-y-2 text-xs font-light text-slate-300">
              <li><Link to="/" className="hover:text-[#63A4FF] transition-colors">{t('nav.home', 'Início')}</Link></li>
              <li><Link to="/projects" className="hover:text-[#63A4FF] transition-colors">{t('nav.projects', 'Projetos')}</Link></li>
              <li><Link to="/comparison" className="hover:text-[#63A4FF] transition-colors">{t('nav.comparativo', '3D vs Real')}</Link></li>
              <li><Link to="/method" className="hover:text-[#63A4FF] transition-colors">{t('nav.method', 'Método')}</Link></li>
              <li><Link to="/about" className="hover:text-[#63A4FF] transition-colors">{t('nav.about', 'Quem Somos')}</Link></li>
              <li><Link to="/briefing" className="hover:text-[#63A4FF] transition-colors">{t('nav.briefing', 'Briefing')}</Link></li>
            </ul>
          </div>

          {/* Col 3: Tipologias Oficiais */}
          <div className="lg:col-span-2 space-y-3">
            <span className="rotulo-tecnico text-[10px] text-white block">
              {t('footer.typologiesTitle', 'TIPOLOGIAS')}
            </span>
            <ul className="space-y-2 text-xs font-light text-slate-300">
              <li><Link to="/projects" className="hover:text-[#63A4FF] transition-colors">Palcos & Arenas</Link></li>
              <li><Link to="/projects" className="hover:text-[#63A4FF] transition-colors">Bares & Hospitalidade</Link></li>
              <li><Link to="/projects" className="hover:text-[#63A4FF] transition-colors">Ambientação Imersiva</Link></li>
              <li><Link to="/projects" className="hover:text-[#63A4FF] transition-colors">Espaços Instagramáveis</Link></li>
              <li><Link to="/projects" className="hover:text-[#63A4FF] transition-colors">Ativações de Marca</Link></li>
            </ul>
          </div>

          {/* Col 4: Contato Direto */}
          <div className="lg:col-span-3 space-y-3">
            <span className="rotulo-tecnico text-[10px] text-white block">
              {t('footer.contactTitle', 'CONTATO DIRETO')}
            </span>
            <div className="space-y-2 text-xs font-light text-slate-300">
              <p className="text-white font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Lucas Castro
              </p>
              <p>
                <a href="https://wa.me/5511972629827" target="_blank" rel="noopener noreferrer" className="hover:text-[#63A4FF] flex items-center gap-1.5">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-[#377BDB]" />
                  <span>(11) 9 7262-9827</span>
                </a>
              </p>
              <p>
                <a href="mailto:lucas@tentaculosproducoes.com.br" className="hover:text-[#63A4FF] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#377BDB]" />
                  <span>lucas@tentaculosproducoes.com.br</span>
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/tentaculoslab" target="_blank" rel="noopener noreferrer" className="hover:text-[#63A4FF] flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#377BDB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>@tentaculoslab</span>
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
          <p>© {new Date().getFullYear()} {t('footer.rights', 'Tentáculos Lab · Todos os direitos reservados.')}</p>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label={t('footer.backToTop', 'Voltar ao topo')}
          >
            <span className="rotulo-tecnico text-[10px]">{t('footer.backToTop', 'VOLTAR AO TOPO')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
