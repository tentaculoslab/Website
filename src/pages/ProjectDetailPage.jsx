import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import { useLanguage } from '../context/LanguageContext';
import { Interactive3DViewer } from '../components/Interactive3DViewer';
import { SEOHead } from '../components/SEOHead';
import { WhatsAppIcon } from '../components/icons/WhatsAppIcon';
import { 
  ArrowLeft, 
  Box, 
  Calendar, 
  MapPin, 
  Building2, 
  ShieldCheck,
  FileCode2,
  BoxSelect,
  Image as ImageIcon,
  Video
} from 'lucide-react';

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const { projects } = usePortfolio();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('3d');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projects.find(p => p.id === id) || projects[0];

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-32 text-center space-y-6">
        <h1 className="text-2xl font-light text-white">Projeto não localizado no acervo</h1>
        <p className="text-slate-400 text-sm">O projeto que você está buscando pode ter sido reclassificado ou atualizado.</p>
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#377BDB] text-white text-xs font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t('projectDetail.backToProjects', 'Voltar ao Acervo de Projetos')}</span>
        </Link>
      </div>
    );
  }

  const gallery = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.coverImage];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <SEOHead 
        title={`${project.title} • Detalhamento 3D | Tentáculos Lab`}
        description={project.description || 'Detalhamento técnico 3D, memorial descritivo e maquete executiva desenvolvida pela Tentáculos Lab.'}
        canonicalPath={`/projects/${project.id}`}
      />

      {/* Voltar ao Acervo */}
      <div>
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-[#63A4FF] transition-colors font-medium"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t('projectDetail.backToProjects', 'Voltar ao Acervo Completo')}</span>
        </Link>
      </div>

      {/* Header do Projeto */}
      <div className="space-y-3 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2.5">
          <span className="rotulo-tecnico px-2.5 py-0.5 rounded bg-[#121D31] text-[#63A4FF] border border-[#377BDB]/30 text-[10px]">
            {project.category}
          </span>
          {project.client && (
            <span className="text-xs text-slate-400 flex items-center gap-1 font-light">
              <Building2 className="w-3 h-3 text-slate-500" />
              {project.client}
            </span>
          )}
        </div>
        <h1 className="text-2xl sm:text-4xl font-light text-white tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {project.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-slate-400 font-light pt-1">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            {project.location || 'Brasil'}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            {project.year || '2026'}
          </span>
        </div>
      </div>

      {/* Media View Swapper Tabs */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 flex-wrap gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('3d')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs transition-all ${
              activeTab === '3d'
                ? 'bg-[#377BDB] text-white font-medium shadow-md'
                : 'bg-[#121D31] text-slate-300 hover:text-white border border-white/[0.06]'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <BoxSelect className="w-3.5 h-3.5 text-[#63A4FF]" />
            <span>{t('projectDetail.view3D', 'Visualizador 3D (360°)')}</span>
          </button>

          <button
            onClick={() => setActiveTab('gallery')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs transition-all ${
              activeTab === 'gallery'
                ? 'bg-[#377BDB] text-white font-medium shadow-md'
                : 'bg-[#121D31] text-slate-400 hover:text-white border border-white/[0.06]'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>{t('projectDetail.gallery', 'Galeria de Renders')} ({gallery.length})</span>
          </button>

          {project.videoUrl && (
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs transition-all ${
                activeTab === 'video'
                  ? 'bg-[#377BDB] text-white font-medium shadow-md'
                  : 'bg-[#121D31] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Video className="w-3.5 h-3.5" />
              <span>{t('projectDetail.video', 'Vídeo do Projeto')}</span>
            </button>
          )}

          {project.skpFile && project.skpFile.name && (
            <button
              onClick={() => setActiveTab('skp')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs transition-all ${
                activeTab === 'skp'
                  ? 'bg-[#377BDB] text-white font-medium shadow-md'
                  : 'bg-[#121D31] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <FileCode2 className="w-3.5 h-3.5 text-[#63A4FF]" />
              <span>{t('projectDetail.skpData', 'Dados .SKP')}</span>
            </button>
          )}
        </div>
      </div>

      {/* Visualização de Mídia */}
      <div className="card-chanfrado p-3 sm:p-5 rounded-2xl bg-[#121D31]">
        {activeTab === '3d' && (
          <Interactive3DViewer projectName={project.skpFile?.name || project.title} />
        )}

        {activeTab === 'gallery' && (
          <div className="space-y-4">
            <div 
              className="relative aspect-video rounded-xl overflow-hidden bg-[#050D19] border border-white/[0.08]"
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={gallery[currentImageIndex] || project.coverImage}
                alt={project.title}
                className="w-full h-full object-contain"
              />
            </div>

            {gallery.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border transition-all flex-shrink-0 ${
                      currentImageIndex === idx ? 'border-[#63A4FF] ring-2 ring-[#63A4FF]/40' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'video' && project.videoUrl && (
          <div className="aspect-video rounded-xl overflow-hidden bg-[#050D19]">
            <iframe
              src={project.videoUrl}
              title={project.title}
              className="w-full h-full border-0"
              allowFullScreen
            />
          </div>
        )}

        {activeTab === 'skp' && project.skpFile && (
          <div className="p-6 space-y-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-[#0A1326] text-[#63A4FF] border border-[#377BDB]/40">
                <FileCode2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {project.skpFile.name}
                </h3>
                <p className="text-slate-400 text-xs mt-0.5 font-light">
                  Tamanho: {project.skpFile.size || '131.1 MB'} • Versão: {project.skpFile.version || 'SketchUp Pro'}
                </p>
              </div>
            </div>
            <div className="bg-[#050D19]/80 p-4 rounded-lg text-slate-300 border border-white/[0.04]">
              <p className="font-medium text-[#63A4FF] flex items-center gap-1.5 mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <ShieldCheck className="w-4 h-4 text-[#63A4FF]" />
                {t('projectDetail.registeredBadge', 'Modelo 3D Registrado no Acervo da Tentáculos Lab')}
              </p>
              <p className="text-slate-400 text-xs font-light leading-relaxed">
                {t('projectDetail.registeredDesc', 'Este modelo tridimensional foi projetado em escala real (1:1) com parâmetros estruturais compatíveis com box truss, marcenaria cenográfica e iluminação cênica.')}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Descrição & Especificações Técnicas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        <div className="md:col-span-2 space-y-4">
          <h2 className="rotulo-tecnico text-[11px] text-white border-b border-white/[0.08] pb-2">
            {t('projectDetail.memorialTitle', 'MEMORIAL DESCRITIVO')}
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line font-light">
            {project.description}
          </p>

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded text-[11px] bg-[#121D31] text-slate-400 border border-white/[0.06]">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Coluna de Especificações */}
        <div className="card-chanfrado p-5 rounded-xl border border-[#377BDB]/30 space-y-4 bg-[#121D31] text-xs h-fit">
          <h3 className="rotulo-tecnico text-[11px] text-[#63A4FF] flex items-center gap-1.5">
            <Box className="w-3.5 h-3.5" />
            {t('projectDetail.specsTitle', 'ESPECIFICAÇÕES TÉCNICAS')}
          </h3>

          {project.specs && Object.keys(project.specs).length > 0 ? (
            <div className="space-y-2.5 text-[11px]">
              {Object.entries(project.specs).map(([key, val]) => (
                <div key={key} className="border-b border-white/[0.04] pb-2">
                  <span className="text-slate-500 capitalize block text-[10px] font-light">
                    {key.replace(/([A-Z])/g, ' $1')}
                  </span>
                  <span className="text-slate-200 font-medium">{val}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-500 text-[11px]">{t('projectDetail.specsConsult', 'Especificações sob consulta técnica.')}</p>
          )}

          <div className="pt-3 border-t border-white/[0.08]">
            <a
              href={`https://wa.me/5511972629827?text=${encodeURIComponent(`Olá, Lucas! Gostaria de falar sobre um projeto similar a: ${project.title}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded bg-[#377BDB] hover:bg-[#4391FC] text-white text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#377BDB]/20"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{t('projectDetail.requestSimilar', 'Solicitar Projeto Similar')}</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
