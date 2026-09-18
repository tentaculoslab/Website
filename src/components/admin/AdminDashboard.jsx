import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  X, 
  Lock, 
  ShieldCheck, 
  Plus, 
  Edit3, 
  Trash2, 
  Upload, 
  FileCode2, 
  Image as ImageIcon, 
  Video, 
  Download, 
  RefreshCw,
  Star,
  Check,
  FolderOpen,
  Save,
  Layers
} from 'lucide-react';

export const AdminDashboard = () => {
  const {
    projects,
    isAdminOpen,
    setIsAdminOpen,
    isLoggedIn,
    setIsLoggedIn,
    editingProject,
    setEditingProject,
    addProject,
    updateProject,
    deleteProject,
    resetToDefault,
    mediaLibrary,
    addMediaItem,
    deleteMediaItem,
    exportProjectsJSON,
    importProjectsJSON
  } = usePortfolio();

  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [activeAdminTab, setActiveAdminTab] = useState('list'); // 'list', 'form', 'media'

  // Form local state
  const [formData, setFormData] = useState({
    title: '',
    category: 'Grandes Eventos & Festivais',
    client: '',
    year: '2026',
    location: '',
    description: '',
    coverImage: '',
    gallery: [],
    videoUrl: '',
    skpFile: { name: '', size: '', version: 'SketchUp 2024' },
    specs: {
      bocaDeCena: '',
      areaTotal: '',
      cargaTreliça: '',
      painelLED: ''
    },
    tags: '',
    featured: false
  });

  // Sync editing project with form
  React.useEffect(() => {
    if (editingProject) {
      setFormData({
        ...editingProject,
        skpFile: editingProject.skpFile || { name: '', size: '', version: 'SketchUp 2024' },
        specs: editingProject.specs || { bocaDeCena: '', areaTotal: '', cargaTreliça: '', painelLED: '' },
        tags: Array.isArray(editingProject.tags) ? editingProject.tags.join(', ') : (editingProject.tags || '')
      });
      setActiveAdminTab('form');
    }
  }, [editingProject]);

  if (!isAdminOpen) return null;

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === 'tentaculos2026' || passwordInput === 'admin' || passwordInput === '') {
      setIsLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Senha incorreta. (Dica: utilize a senha "admin" ou deixe em branco para testar)');
    }
  };

  // Handle File Uploads (Base64 / Local Storage)
  const handleFileUpload = (e, fieldType) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      
      if (fieldType === 'cover') {
        setFormData(prev => ({ ...prev, coverImage: dataUrl }));
        addMediaItem({ type: 'image', name: file.name, url: dataUrl, size: `${(file.size / 1024 / 1024).toFixed(1)} MB` });
      } else if (fieldType === 'gallery') {
        setFormData(prev => ({ ...prev, gallery: [...(prev.gallery || []), dataUrl] }));
        addMediaItem({ type: 'image', name: file.name, url: dataUrl, size: `${(file.size / 1024 / 1024).toFixed(1)} MB` });
      } else if (fieldType === 'skp') {
        const skpObj = {
          name: file.name,
          size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
          version: 'SketchUp Nativo (.skp)',
          dataUrl: dataUrl
        };
        setFormData(prev => ({ ...prev, skpFile: skpObj }));
        addMediaItem({ type: 'skp', name: file.name, size: skpObj.size });
      } else if (fieldType === 'video') {
        setFormData(prev => ({ ...prev, videoUrl: dataUrl }));
        addMediaItem({ type: 'video', name: file.name, url: dataUrl, size: `${(file.size / 1024 / 1024).toFixed(1)} MB` });
      }
    };
    reader.readAsDataURL(file);
  };

  // Save Project Submit
  const handleSubmitForm = (e) => {
    e.preventDefault();

    const formattedTags = typeof formData.tags === 'string' 
      ? formData.tags.split(',').map(t => t.trim()).filter(Boolean)
      : formData.tags;

    const projectToSave = {
      ...formData,
      tags: formattedTags
    };

    if (editingProject && editingProject.id) {
      updateProject(editingProject.id, projectToSave);
    } else {
      addProject(projectToSave);
    }

    setEditingProject(null);
    setActiveAdminTab('list');
    alert('Projeto salvo com sucesso no site!');
  };

  const handleCreateNew = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      category: 'Grandes Eventos & Festivais',
      client: '',
      year: new Date().getFullYear().toString(),
      location: '',
      description: '',
      coverImage: '',
      gallery: [],
      videoUrl: '',
      skpFile: { name: '', size: '', version: 'SketchUp 2024' },
      specs: { bocaDeCena: '', areaTotal: '', cargaTreliça: '', painelLED: '' },
      tags: '',
      featured: false
    });
    setActiveAdminTab('form');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 modal-backdrop animate-in fade-in duration-200">
      <div className="glass-card bg-[#0b0f19] rounded-3xl max-w-6xl w-full max-h-[92vh] overflow-hidden border border-[#377BDB]/40 shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-950/80 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <img src="/logo-white.png" alt="Tentáculos Lab" className="h-7 w-auto " />
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1B283D] text-[#63A4FF] border border-[#377BDB]/40 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#63A4FF]" />
              Painel de Gestão CMS
            </span>
          </div>

          <button
            onClick={() => setIsAdminOpen(false)}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* LOGIN SCREEN IF NOT AUTHENTICATED */}
        {!isLoggedIn ? (
          <div className="p-8 sm:p-12 max-w-md mx-auto my-auto text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-[#1B283D] text-[#63A4FF] border border-[#377BDB]/40 flex items-center justify-center mx-auto shadow-lg shadow-[#377BDB]/20">
              <Lock className="w-8 h-8" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Acesso Administrativo</h2>
              <p className="text-slate-400 text-xs mt-1">
                Gestão de mídias, fotos, vídeos e arquivos SketchUp (.skp) da Tentáculos Lab.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Senha do CMS</label>
                <input
                  type="password"
                  placeholder="Digite a senha (ou clique em Entrar)"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-[#63A4FF]"
                />
              </div>

              {loginError && (
                <p className="text-xs text-red-400 font-medium">{loginError}</p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#377BDB] to-[#1B283D] hover:from-[#63A4FF] hover:to-[#377BDB] text-white font-bold text-sm shadow-lg shadow-[#377BDB]/30 transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Entrar no Painel</span>
              </button>
            </form>
          </div>
        ) : (
          /* AUTHENTICATED CMS DASHBOARD */
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* CMS Top Bar Actions & Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveAdminTab('list')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeAdminTab === 'list' 
                      ? 'bg-[#377BDB] text-white font-bold shadow-md shadow-[#377BDB]/30' 
                      : 'bg-slate-900 text-slate-300 hover:text-white'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Projetos Cadastrados ({projects.length})</span>
                </button>

                <button
                  onClick={handleCreateNew}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeAdminTab === 'form' 
                      ? 'bg-[#377BDB] text-slate-950 font-bold shadow-md shadow-[#377BDB]/30' 
                      : 'bg-slate-900 text-slate-300 hover:text-white'
                  }`}
                >
                  <Plus className="w-4 h-4" />
                  <span>{editingProject ? 'Editar Projeto' : 'Novo Projeto'}</span>
                </button>

                <button
                  onClick={() => setActiveAdminTab('media')}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeAdminTab === 'media' 
                      ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30' 
                      : 'bg-slate-900 text-slate-300 hover:text-white'
                  }`}
                >
                  <FolderOpen className="w-4 h-4" />
                  <span>Biblioteca de Mídias ({mediaLibrary.length})</span>
                </button>
              </div>

              {/* Utility Tools */}
              <div className="flex items-center gap-2 text-xs">
                <button
                  onClick={exportProjectsJSON}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-white/10 flex items-center gap-1"
                  title="Baixar backup em JSON"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Backup JSON</span>
                </button>

                <button
                  onClick={() => {
                    if (window.confirm('Restaurar projetos padrão iniciais?')) resetToDefault();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-amber-300 border border-white/10 flex items-center gap-1"
                  title="Resetar dados"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Restaurar Padrão</span>
                </button>
              </div>
            </div>

            {/* TAB 1: PROJECTS LIST */}
            {activeAdminTab === 'list' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  {projects.map((p) => (
                    <div
                      key={p.id}
                      className="glass-card p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-4 bg-slate-900/60 hover:bg-slate-800/60 transition-colors"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <img
                          src={p.coverImage || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80'}
                          alt={p.title}
                          className="w-16 h-12 object-cover rounded-xl border border-white/10 flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#63A4FF]">
                              {p.category}
                            </span>
                            {p.skpFile?.name && (
                              <span className="px-2 py-0.5 rounded text-[10px] bg-[#0A1326] text-[#63A4FF] border border-[#377BDB]/40 flex items-center gap-1">
                                <FileCode2 className="w-3 h-3" />
                                {p.skpFile.name}
                              </span>
                            )}
                          </div>
                          <h4 className="text-sm font-bold text-white truncate">{p.title}</h4>
                          <p className="text-xs text-slate-400 truncate">{p.client} • {p.year}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => {
                            setEditingProject(p);
                            setActiveAdminTab('form');
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-[#377BDB] hover:text-slate-950 font-semibold text-xs transition-all flex items-center gap-1"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>Editar</span>
                        </button>

                        <button
                          onClick={() => {
                            if (window.confirm(`Excluir "${p.title}"?`)) deleteProject(p.id);
                          }}
                          className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-red-400 hover:bg-slate-700 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: PROJECT FORM (CREATE / EDIT) */}
            {activeAdminTab === 'form' && (
              <form onSubmit={handleSubmitForm} className="space-y-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Save className="w-5 h-5 text-[#63A4FF]" />
                    <span>{editingProject ? 'Editar Projeto' : 'Cadastrar Novo Projeto'}</span>
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveAdminTab('list')}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Cancelar
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Título do Projeto *</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Ex: Palco Main Stage Rock Fest 2026"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#63A4FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Categoria *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#63A4FF]"
                    >
                      <option value="Grandes Eventos & Festivais">Grandes Eventos & Festivais</option>
                      <option value="Cenografia & Palcos">Cenografia & Palcos</option>
                      <option value="Ativações de Marca">Ativações de Marca</option>
                      <option value="Projetos Especiais">Projetos Especiais</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Cliente / Festival</label>
                    <input
                      type="text"
                      value={formData.client}
                      onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                      placeholder="Ex: Produtora Rock Fest"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#63A4FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-1">Ano / Localização</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        placeholder="2026"
                        className="px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#63A4FF]"
                      />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="São Paulo, SP"
                        className="px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#63A4FF]"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="text-xs">
                  <label className="block text-slate-300 font-medium mb-1">Descrição Detalhada do Projeto</label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Descreva o conceito espacial, estruturas, bocas de cena, arranjos de iluminação..."
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#63A4FF]"
                  />
                </div>

                {/* MEDIA & FILE ATTACHMENTS */}
                <div className="glass-card p-4 rounded-2xl border border-white/10 space-y-4 bg-slate-950/60">
                  <h4 className="text-xs font-bold text-[#63A4FF] uppercase tracking-wider flex items-center gap-1.5">
                    <Upload className="w-4 h-4" />
                    Gestão de Imagens, Vídeos e Arquivos .SKP (SketchUp)
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    {/* 1. Cover Image Upload */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-white/10 space-y-2">
                      <label className="block font-semibold text-slate-200">Imagem de Capa (HD)</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'cover')}
                        className="text-[11px] text-slate-400 file:mr-2 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:bg-[#377BDB]/20 file:text-[#63A4FF]"
                      />
                      <input
                        type="text"
                        placeholder="Ou cole a URL da Imagem"
                        value={formData.coverImage}
                        onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-white/10 rounded-lg text-white text-[11px]"
                      />
                    </div>

                    {/* 2. SKP File Upload */}
                    <div className="p-3 bg-[#121D31] rounded-xl border border-[#377BDB]/40 space-y-2">
                      <label className="block font-semibold text-[#63A4FF] flex items-center gap-1">
                        <FileCode2 className="w-4 h-4 text-[#63A4FF]" />
                        Cadastrar Modelo .SKP
                      </label>
                      <input
                        type="file"
                        accept=".skp"
                        onChange={(e) => handleFileUpload(e, 'skp')}
                        className="text-[11px] text-[#63A4FF] file:mr-2 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:bg-[#377BDB] file:text-white"
                      />
                      <input
                        type="text"
                        placeholder="Nome do arquivo .skp para registro"
                        value={formData.skpFile?.name || ''}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          skpFile: { ...formData.skpFile, name: e.target.value } 
                        })}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-white/10 rounded-lg text-white text-[11px]"
                      />
                    </div>

                    {/* 3. Video URL Upload */}
                    <div className="p-3 bg-slate-900 rounded-xl border border-white/10 space-y-2">
                      <label className="block font-semibold text-slate-200 flex items-center gap-1">
                        <Video className="w-4 h-4 text-blue-400" />
                        Vídeo do Projeto
                      </label>
                      <input
                        type="file"
                        accept="video/mp4,video/*"
                        onChange={(e) => handleFileUpload(e, 'video')}
                        className="text-[11px] text-slate-400 file:mr-2 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:bg-blue-500/20 file:text-blue-300"
                      />
                      <input
                        type="text"
                        placeholder="Link do Embed YouTube/Vimeo"
                        value={formData.videoUrl}
                        onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
                        className="w-full px-2.5 py-1.5 bg-slate-950 border border-white/10 rounded-lg text-white text-[11px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Specs Section */}
                <div className="text-xs space-y-3">
                  <label className="block font-bold text-slate-200">Especificações Técnicas de Campo</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <input
                      type="text"
                      placeholder="Boca de Cena (Ex: 40m x 16m)"
                      value={formData.specs?.bocaDeCena || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        specs: { ...formData.specs, bocaDeCena: e.target.value }
                      })}
                      className="px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white"
                    />
                    <input
                      type="text"
                      placeholder="Área Total (Ex: 2.500 m²)"
                      value={formData.specs?.areaTotal || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        specs: { ...formData.specs, areaTotal: e.target.value }
                      })}
                      className="px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white"
                    />
                    <input
                      type="text"
                      placeholder="Carga Treliça (Ex: 50 Ton)"
                      value={formData.specs?.cargaTreliça || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        specs: { ...formData.specs, cargaTreliça: e.target.value }
                      })}
                      className="px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white"
                    />
                    <input
                      type="text"
                      placeholder="Painéis LED (Ex: 800m²)"
                      value={formData.specs?.painelLED || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        specs: { ...formData.specs, painelLED: e.target.value }
                      })}
                      className="px-3 py-2 bg-slate-900 border border-white/10 rounded-xl text-white"
                    />
                  </div>
                </div>

                {/* Featured Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="featured-check"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-4 h-4 text-[#377BDB] rounded bg-slate-900 border-white/20"
                  />
                  <label htmlFor="featured-check" className="text-xs text-slate-200 font-semibold cursor-pointer">
                    Marcar projeto como destaque na página principal
                  </label>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveAdminTab('list')}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#377BDB] to-[#63A4FF] text-slate-950 font-bold text-xs shadow-lg shadow-[#377BDB]/30 hover:brightness-110 flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>Salvar Projeto no Site</span>
                  </button>
                </div>
              </form>
            )}

            {/* TAB 3: MEDIA LIBRARY */}
            {activeAdminTab === 'media' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <FolderOpen className="w-4 h-4 text-blue-400" />
                    <span>Galeria Central de Mídias & Arquivos .SKP</span>
                  </h3>
                  <p className="text-xs text-slate-400">Arquivos enviados no navegador</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {mediaLibrary.map((m) => (
                    <div key={m.id} className="glass-card p-3 rounded-xl border border-white/10 bg-slate-900/80 relative group text-xs">
                      {m.type === 'image' ? (
                        <div className="aspect-video rounded-lg overflow-hidden mb-2 bg-slate-950">
                          <img src={m.url} alt={m.name} className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="aspect-video rounded-lg bg-[#121D31] border border-[#377BDB]/40 flex items-center justify-center mb-2 text-[#63A4FF]">
                          <FileCode2 className="w-8 h-8" />
                        </div>
                      )}
                      <p className="font-bold text-white truncate">{m.name}</p>
                      <p className="text-[10px] text-slate-400">{m.type.toUpperCase()} • {m.size || '3D'}</p>

                      <button
                        onClick={() => deleteMediaItem(m.id)}
                        className="absolute top-2 right-2 p-1 rounded-md bg-slate-950/80 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remover Mídia"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
