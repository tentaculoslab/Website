import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Interactive3DViewer } from './Interactive3DViewer';
import { 
  X, 
  Box, 
  Calendar, 
  MapPin, 
  Building2, 
  ShieldCheck,
  FileCode2,
  Lock,
  BoxSelect,
  Image as ImageIcon,
  Video
} from 'lucide-react';

export const ProjectModal = () => {
  const { selectedProject, setSelectedProject } = usePortfolio();
  const [activeTab, setActiveTab] = useState('3d'); // '3d', 'gallery', 'video', 'skp'
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedProject]);

  if (!selectedProject) return null;

  const gallery = selectedProject.gallery && selectedProject.gallery.length > 0 
    ? selectedProject.gallery 
    : [selectedProject.coverImage];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 modal-backdrop animate-in fade-in duration-200">
      <div 
        className="card-chanfrado bg-[#0A1326] rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto border border-[#377BDB]/30 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-start justify-between gap-4 sticky top-0 bg-[#0A1326]/95 backdrop-blur-md z-20">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="rotulo-tecnico px-2.5 py-0.5 rounded bg-[#121D31] text-[#63A4FF] border border-[#377BDB]/30 text-[10px]">
                {selectedProject.category}
              </span>
              {selectedProject.client && (
                <span className="text-xs text-slate-400 flex items-center gap-1 font-light">
                  <Building2 className="w-3 h-3 text-slate-500" />
                  {selectedProject.client}
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-2xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {selectedProject.title}
            </h2>
          </div>

          <button
            onClick={() => setSelectedProject(null)}
            className="p-1.5 rounded-lg bg-[#121D31] text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
            title="Fechar (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-6">

          {/* Media View Swapper Tabs */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              
              {/* Interactive 3D Rotation Viewer Tab */}
              <button
                onClick={() => setActiveTab('3d')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs transition-all ${
                  activeTab === '3d'
                    ? 'bg-[#377BDB] text-white font-medium shadow-md'
                    : 'bg-[#121D31] text-slate-300 hover:text-white border border-white/[0.06]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <BoxSelect className="w-3.5 h-3.5 text-[#63A4FF]" />
                <span>Visualizador 3D (360°)</span>
              </button>

              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs transition-all ${
                  activeTab === 'gallery'
                    ? 'bg-[#377BDB] text-white font-medium shadow-md'
                    : 'bg-[#121D31] text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Galeria de Renders ({gallery.length})</span>
              </button>

              {selectedProject.videoUrl && (
                <button
                  onClick={() => setActiveTab('video')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs transition-all ${
                    activeTab === 'video'
                      ? 'bg-[#377BDB] text-white font-medium shadow-md'
                      : 'bg-[#121D31] text-slate-400 hover:text-white border border-white/[0.06]'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Vídeo do Projeto</span>
                </button>
              )}

              {selectedProject.skpFile && selectedProject.skpFile.name && (
                <button
                  onClick={() => setActiveTab('skp')}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs transition-all ${
                    activeTab === 'skp'
                      ? 'bg-[#377BDB] text-white font-medium shadow-md'
                      : 'bg-[#121D31] text-slate-400 hover:text-white border border-white/[0.06]'
                  }`}
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <FileCode2 className="w-3.5 h-3.5 text-[#63A4FF]" />
                  <span>Dados .SKP</span>
                </button>
              )}
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-3 font-light">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {selectedProject.location || 'Brasil'}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {selectedProject.year || '2026'}
              </span>
            </div>
          </div>

          {/* TAB 1: INTERACTIVE 3D VIEWER (ROTATION 360) */}
          {activeTab === '3d' && (
            <div className="space-y-2">
              <Interactive3DViewer projectName={selectedProject.skpFile?.name || selectedProject.title} />
            </div>
          )}

          {/* TAB 2: Image Gallery */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              <div 
                className="relative aspect-video rounded-xl overflow-hidden bg-[#050D19] border border-white/[0.08] select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src={gallery[currentImageIndex] || selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>

              {gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-16 h-12 rounded-lg overflow-hidden border transition-all flex-shrink-0 ${
                        currentImageIndex === idx ? 'border-[#63A4FF] opacity-100 ring-2 ring-[#63A4FF]/40' : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img src={imgUrl} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: Video Player */}
          {activeTab === 'video' && selectedProject.videoUrl && (
            <div className="aspect-video rounded-xl overflow-hidden bg-[#050D19] border border-white/[0.08]">
              <iframe
                src={selectedProject.videoUrl}
                title={selectedProject.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {/* TAB 4: SKP Record */}
          {activeTab === 'skp' && selectedProject.skpFile && (
            <div className="card-chanfrado p-5 rounded-xl border border-[#377BDB]/30 bg-[#121D31] space-y-4 text-xs">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0A1326] text-[#63A4FF] border border-[#377BDB]/40">
                    <FileCode2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {selectedProject.skpFile.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-light">
                      Tamanho: {selectedProject.skpFile.size || '131.1 MB'} | Versão: {selectedProject.skpFile.version || 'SketchUp Pro'}
                    </p>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-lg bg-[#0A1326] text-slate-300 border border-white/[0.08] flex items-center gap-2 text-[11px]">
                  <Lock className="w-3.5 h-3.5 text-[#E9B65C]" />
                  <span>Modelo Protegido (Acervo Oficial)</span>
                </div>
              </div>

              <div className="bg-[#050D19]/80 p-4 rounded-lg text-slate-300 border border-white/[0.04] space-y-2 text-xs">
                <p className="font-medium text-[#63A4FF] flex items-center gap-1.5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <ShieldCheck className="w-4 h-4 text-[#63A4FF]" />
                  Documentação Arquitetônica 3D Registrada
                </p>
                <p className="text-slate-400 leading-relaxed font-light">
                  Este projeto contém modelo 3D nativo em formato SketchUp (.skp) registrado e cadastrado no acervo técnico da Tentáculos Lab. Utilize a aba "Visualizador 3D" para rotacionar e inspecionar a volumetria tridimensional diretamente no navegador.
                </p>
              </div>
            </div>
          )}

          {/* Description & Technical Specs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3">
              <h3 className="rotulo-tecnico text-[11px] text-white border-b border-white/[0.08] pb-2">
                DESCRIÇÃO DO PROJETO
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-light">
                {selectedProject.description}
              </p>

              {/* Tags */}
              {selectedProject.tags && selectedProject.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded text-[10px] bg-[#121D31] text-slate-400 border border-white/[0.06]">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Technical Specs Column */}
            <div className="card-chanfrado p-4 rounded-xl border border-[#377BDB]/30 space-y-3 bg-[#121D31] text-xs">
              <h3 className="rotulo-tecnico text-[11px] text-[#63A4FF] flex items-center gap-1.5">
                <Box className="w-3.5 h-3.5" />
                ESPECIFICAÇÕES TÉCNICAS
              </h3>

              {selectedProject.specs && Object.keys(selectedProject.specs).length > 0 ? (
                <div className="space-y-2 text-[11px]">
                  {Object.entries(selectedProject.specs).map(([key, val]) => (
                    <div key={key} className="border-b border-white/[0.04] pb-1.5">
                      <span className="text-slate-500 capitalize block text-[10px] font-light">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="text-slate-200 font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[11px] text-slate-500">Especificações sob consulta técnica.</p>
              )}

              {/* Interactive 3D Viewer Shortcut */}
              <div className="pt-2 border-t border-white/[0.08]">
                <button
                  onClick={() => setActiveTab('3d')}
                  className="w-full py-2.5 rounded bg-[#377BDB] hover:bg-[#63A4FF] text-white font-medium text-[11px] transition-colors flex items-center justify-center gap-1.5 shadow-md"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  <BoxSelect className="w-3.5 h-3.5" />
                  <span>Interagir em 3D (360°)</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
