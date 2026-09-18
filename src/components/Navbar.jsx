import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <a href="/" className="flex items-center group" aria-label="Tentáculos Lab - Página Inicial">
            <img 
              src="/logo-white.png" 
              alt="tentáculos ◉ lab" 
              width="150"
              height="32"
              className="h-7 sm:h-8 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
            />
          </a>

          {/* Desktop Navigation Links (Poppins Caixa Alta, tracking .22em) */}
          <nav className="hidden md:flex items-center space-x-7">
            <a 
              href="#portfolio" 
              className="rotulo-tecnico text-slate-300 hover:text-[#63A4FF] transition-colors py-1"
            >
              Projetos
            </a>
            <a 
              href="#comparativo-tecnico" 
              className="rotulo-tecnico text-slate-300 hover:text-[#63A4FF] transition-colors py-1"
            >
              3D vs Real
            </a>
            <a 
              href="#metodo" 
              className="rotulo-tecnico text-slate-300 hover:text-[#63A4FF] transition-colors py-1"
            >
              Método
            </a>
            <a 
              href="#about" 
              className="rotulo-tecnico text-slate-300 hover:text-[#63A4FF] transition-colors py-1"
            >
              Quem Somos
            </a>
            
            {/* CTA Contato Oficial */}
            <a 
              href="https://wa.me/5511972629827" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#1B283D] hover:bg-[#377BDB] text-white border border-[#377BDB]/40 transition-all text-[11px] font-medium tracking-wider uppercase group"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#63A4FF] group-hover:text-white transition-colors" />
              <span>Briefing</span>
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded bg-[#121D31] text-slate-300 border border-white/[0.08] hover:text-white"
            aria-label="Abrir menu mobile"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#63A4FF]" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A1326] border-b border-white/[0.08] px-4 pt-4 pb-6 space-y-3 shadow-2xl backdrop-blur-xl">
            <nav className="flex flex-col space-y-2">
              <a 
                href="#portfolio" 
                onClick={() => setMobileMenuOpen(false)}
                className="rotulo-tecnico text-slate-300 hover:text-white p-2.5 rounded bg-[#121D31]"
              >
                Projetos & Tipologias
              </a>

              <a 
                href="#comparativo-tecnico" 
                onClick={() => setMobileMenuOpen(false)}
                className="rotulo-tecnico text-slate-300 hover:text-white p-2.5 rounded bg-[#121D31]"
              >
                3D vs Realidade (Juxtapose)
              </a>

              <a 
                href="#metodo" 
                onClick={() => setMobileMenuOpen(false)}
                className="rotulo-tecnico text-slate-300 hover:text-white p-2.5 rounded bg-[#121D31]"
              >
                Método & 4 Frentes
              </a>

              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="rotulo-tecnico text-slate-300 hover:text-white p-2.5 rounded bg-[#121D31]"
              >
                Quem Somos · Lucas Castro
              </a>

              <a 
                href="https://wa.me/5511972629827" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 rounded bg-[#377BDB] text-white text-center text-xs font-semibold uppercase tracking-wider mt-2 flex items-center justify-center gap-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Falar no WhatsApp</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
