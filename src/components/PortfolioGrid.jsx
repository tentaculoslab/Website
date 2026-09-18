import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  Search, 
  Box, 
  Layers,
  Calendar
} from 'lucide-react';

export const PortfolioGrid = () => {
  const {
    filteredProjects,
    categories,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    setSelectedProject
  } = usePortfolio();

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#0A1326] relative border-t border-white/[0.07]">
      {/* Camada Blueprint de Fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('/backgrounds/truss-rigging-cad.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1326] via-[#0A1326]/90 to-[#050D19] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="rotulo-tecnico block">
              0 5 · P R O J E T O S
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-white tracking-tight">
              Atendemos os <span className="font-semibold text-[#63A4FF]">principais tipos de projeto</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl font-light leading-relaxed">
              Palcos, bares temáticos, ambientação imersiva, instagramáveis e ativações de marca com detalhamento 3D executável.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar projeto ou especificação..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-8 py-2.5 bg-[#121D31] border border-white/[0.1] focus:border-[#63A4FF] rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                aria-label="Limpar busca"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Tipologias Oficiais (Filtros de Categoria) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs tracking-wider uppercase transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#377BDB] text-white font-medium shadow-md'
                  : 'bg-[#121D31] text-slate-400 border border-white/[0.06] hover:border-[#377BDB]/40 hover:text-white'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 card-chanfrado rounded-xl p-8 bg-[#121D31]">
            <Layers className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-sm font-semibold text-slate-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Nenhum projeto localizado nesta tipologia
            </h3>
            <p className="text-slate-400 text-xs mt-1 font-light">
              Selecione outro filtro para explorar o acervo cenográfico.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="card-chanfrado rounded-xl overflow-hidden group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-[#050D19] border-b border-white/[0.05]">
                    <img
                      src={project.coverImage || '/models/papai_noel_real_angle_0.png'}
                      alt={`${project.title} - Cenografia 3D | Tentáculos Lab`}
                      width="800"
                      height="450"
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="rotulo-tecnico px-2.5 py-1 rounded bg-[#0A1326]/90 text-[#63A4FF] border border-[#377BDB]/40 text-[9px] backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* 3D Indicator */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0A1326]/90 text-slate-200 border border-white/[0.1] text-[10px] backdrop-blur-md">
                      <Box className="w-3 h-3 text-[#63A4FF]" />
                      <span style={{ fontFamily: 'Poppins, sans-serif' }}>Modelo 3D SketchUp</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      {project.client && (
                        <span className="text-slate-300 font-light">{project.client}</span>
                      )}
                      {project.year && (
                        <span className="flex items-center gap-1 text-slate-500 font-light">
                          <Calendar className="w-3 h-3 text-slate-600" />
                          {project.year}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-semibold text-white group-hover:text-[#63A4FF] transition-colors line-clamp-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Footer of Card */}
                <div className="px-6 py-4 border-t border-white/[0.04] bg-[#050D19]/40 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px] font-light">
                    {project.specs?.areaConstruida || 'Detalhamento Executivo'}
                  </span>
                  <span className="text-[#63A4FF] text-xs font-medium group-hover:underline flex items-center gap-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Inspecionar 3D →
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
