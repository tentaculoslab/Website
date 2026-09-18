import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) => 
    `rotulo-tecnico py-1 transition-all relative ${
      isActive 
        ? 'text-[#63A4FF] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#63A4FF]' 
        : 'text-slate-300 hover:text-[#63A4FF]'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `rotulo-tecnico p-3 rounded transition-all block ${
      isActive
        ? 'bg-[#1B283D] text-[#63A4FF] border-l-2 border-[#63A4FF]'
        : 'bg-[#121D31] text-slate-300 hover:text-white'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Barra de Topo Oficial da Marca (Filete de 3px com luz azul ao centro) */}
      <div className="barra-topo-luz" />

      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A1326]/95 backdrop-blur-md border-b border-white/[0.07] py-3 shadow-xl' 
          : 'bg-[#0A1326]/85 backdrop-blur-sm py-4 border-b border-white/[0.04]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo Oficial */}
          <Link to="/" className="flex items-center group" aria-label="Tentáculos Lab - Página Inicial">
            <img 
              src="/logo-white.png" 
              alt="tentáculos ◉ lab" 
              width="150"
              height="32"
              className="h-7 sm:h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/projetos" className={navLinkClass}>
              {t('nav.projects', 'Projetos')}
            </NavLink>
            <NavLink to="/comparativo" className={navLinkClass}>
              {t('nav.comparativo', '3D vs Real')}
            </NavLink>
            <NavLink to="/metodo" className={navLinkClass}>
              {t('nav.method', 'Método')}
            </NavLink>
            <NavLink to="/sobre" className={navLinkClass}>
              {t('nav.about', 'Quem Somos')}
            </NavLink>
            <NavLink to="/briefing" className={navLinkClass}>
              {t('nav.briefing', 'Briefing')}
            </NavLink>

            {/* Language Selector Desktop */}
            <LanguageSelector />
            
            {/* CTA Contato Oficial WhatsApp */}
            <a 
              href="https://wa.me/5511972629827" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#1B283D] hover:bg-[#377BDB] text-white border border-[#377BDB]/40 transition-all text-[11px] font-medium tracking-wider uppercase group"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#63A4FF] group-hover:text-white transition-colors" />
              <span>{t('nav.whatsApp', 'WhatsApp')}</span>
            </a>
          </nav>

          {/* Mobile Right Controls: Language Selector & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-[#121D31] text-slate-300 border border-white/[0.08] hover:text-white"
              aria-label={mobileMenuOpen ? t('nav.closeMenu', "Fechar menu") : t('nav.openMenu', "Abrir menu")}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#63A4FF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A1326] border-b border-white/[0.08] px-4 pt-4 pb-6 space-y-3 shadow-2xl backdrop-blur-xl">
            <nav className="flex flex-col space-y-2">
              <NavLink 
                to="/" 
                end
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                {t('nav.home', 'Início')}
              </NavLink>

              <NavLink 
                to="/projetos" 
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                {t('nav.projects', 'Projetos')}
              </NavLink>

              <NavLink 
                to="/comparativo" 
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                {t('nav.comparativo', '3D vs Real (Juxtapose)')}
              </NavLink>

              <NavLink 
                to="/metodo" 
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                {t('nav.method', 'Método')}
              </NavLink>

              <NavLink 
                to="/sobre" 
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                {t('nav.about', 'Quem Somos')}
              </NavLink>

              <NavLink 
                to="/briefing" 
                onClick={() => setMobileMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                {t('nav.briefing', 'Briefing')}
              </NavLink>

              <a 
                href="https://wa.me/5511972629827" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded bg-[#377BDB] text-white text-center text-xs font-semibold uppercase tracking-wider mt-2 flex items-center justify-center gap-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>{t('nav.talkOnWhatsApp', 'Falar no WhatsApp')}</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
