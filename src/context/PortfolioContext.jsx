import React, { createContext, useContext, useState, useEffect } from 'react';
import { defaultProjects } from '../data/defaultProjects';

const PortfolioContext = createContext();

const LOCAL_STORAGE_KEY = 'tentaculos_lab_projects_v4';
const MEDIA_STORAGE_KEY = 'tentaculos_lab_media_v4';

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error("Erro ao carregar projetos do LocalStorage:", e);
    }
    return defaultProjects;
  });

  const [mediaLibrary, setMediaLibrary] = useState(() => {
    try {
      const savedMedia = localStorage.getItem(MEDIA_STORAGE_KEY);
      if (savedMedia) return JSON.parse(savedMedia);
    } catch (e) {
      console.error("Erro ao carregar galeria de mídias:", e);
    }
    return [
      { id: 'm-1', type: 'skp', name: 'tentaculos_palco_mainstage_v4.skp', size: '48.2 MB', date: '2026-03-15' },
      { id: 'm-2', type: 'skp', name: 'dome_neon_pulse_master.skp', size: '32.8 MB', date: '2025-11-20' },
      { id: 'm-3', type: 'image', name: 'capa_mainstage.jpg', url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80', date: '2026-03-15' }
    ];
  });

  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Admin CMS States
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // Save projects to LocalStorage whenever updated
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
    } catch (e) {
      console.error("Erro ao salvar projetos no LocalStorage:", e);
    }
  }, [projects]);

  // Save media library
  useEffect(() => {
    try {
      localStorage.setItem(MEDIA_STORAGE_KEY, JSON.stringify(mediaLibrary));
    } catch (e) {
      console.error("Erro ao salvar mídias no LocalStorage:", e);
    }
  }, [mediaLibrary]);

  // Project CRUD Actions
  const addProject = (newProj) => {
    const projectWithId = {
      ...newProj,
      id: `proj-${Date.now()}`
    };
    setProjects(prev => [projectWithId, ...prev]);
  };

  const updateProject = (id, updatedData) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updatedData } : p));
  };

  const deleteProject = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
    if (selectedProject?.id === id) {
      setSelectedProject(null);
    }
  };

  const resetToDefault = () => {
    setProjects(defaultProjects);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  // Media Library Actions
  const addMediaItem = (item) => {
    const mediaObj = {
      id: `media-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      ...item
    };
    setMediaLibrary(prev => [mediaObj, ...prev]);
    return mediaObj;
  };

  const deleteMediaItem = (id) => {
    setMediaLibrary(prev => prev.filter(m => m.id !== id));
  };

  // Export / Import
  const exportProjectsJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projects, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `tentaculos_lab_portafolio_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importProjectsJSON = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (Array.isArray(parsed)) {
        setProjects(parsed);
        return true;
      }
    } catch (e) {
      console.error("JSON inválido:", e);
    }
    return false;
  };

  // Category & Filtering (5 Tipologias Oficiais da Apresentação)
  const categories = ['Todos', 'Palcos', 'Bares', 'Ambientação', 'Instagramáveis', 'Ativação de Marcas'];

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      p.title?.toLowerCase().includes(q) ||
      p.client?.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.skpFile?.name?.toLowerCase().includes(q) ||
      p.tags?.some(t => t.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <PortfolioContext.Provider value={{
      projects,
      filteredProjects,
      categories,
      activeCategory,
      setActiveCategory,
      searchQuery,
      setSearchQuery,
      selectedProject,
      setSelectedProject,
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
    }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio deve ser usado dentro de um PortfolioProvider');
  }
  return context;
};
