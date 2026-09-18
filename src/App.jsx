import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { PortfolioProvider } from './context/PortfolioContext';
import { Layout } from './components/Layout';

// Lazy loading das páginas para máxima performance (LCP e code splitting)
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const ComparativoPage = lazy(() => import('./pages/ComparativoPage').then(m => ({ default: m.ComparativoPage })));
const MethodPage = lazy(() => import('./pages/MethodPage').then(m => ({ default: m.MethodPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const BriefingPage = lazy(() => import('./pages/BriefingPage').then(m => ({ default: m.BriefingPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

const PageLoadingFallback = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
    <div className="w-8 h-8 border-2 border-[#63A4FF] border-t-transparent rounded-full animate-spin" />
    <span className="rotulo-tecnico text-[10px] text-slate-400">CARREGANDO MÓDULO TÉCNICO...</span>
  </div>
);

export function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <PortfolioProvider>
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                
                {/* Rotas Canônicas em Inglês (Agentic Web Standard / is-agentic.com) */}
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="projects/:id" element={<ProjectDetailPage />} />
                <Route path="project/:id" element={<Navigate to="/projects/:id" replace />} />
                <Route path="comparison" element={<ComparativoPage />} />
                <Route path="method" element={<MethodPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="briefing" element={<BriefingPage />} />

                {/* Redirecionamentos de Compatibilidade (PT -> EN) */}
                <Route path="projetos" element={<Navigate to="/projects" replace />} />
                <Route path="projeto/:id" element={<Navigate to="/projects/:id" replace />} />
                <Route path="comparativo" element={<Navigate to="/comparison" replace />} />
                <Route path="metodo" element={<Navigate to="/method" replace />} />
                <Route path="sobre" element={<Navigate to="/about" replace />} />

                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </PortfolioProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
