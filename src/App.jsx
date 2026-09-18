import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { PortfolioProvider } from './context/PortfolioContext';
import { Layout } from './components/Layout';

// Lazy loading das páginas para máxima performance (LCP e code splitting)
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const JuxtaposePage = lazy(() => import('./pages/JuxtaposePage').then(m => ({ default: m.JuxtaposePage })));
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
                <Route path="projetos" element={<ProjectsPage />} />
                <Route path="projeto/:id" element={<ProjectDetailPage />} />
                <Route path="comparativo" element={<JuxtaposePage />} />
                <Route path="metodo" element={<MethodPage />} />
                <Route path="sobre" element={<AboutPage />} />
                <Route path="briefing" element={<BriefingPage />} />
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
