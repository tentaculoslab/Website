import React, { Suspense, lazy } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JuxtaposeViewer } from './components/JuxtaposeViewer';
import { MethodSection } from './components/MethodSection';
import { PortfolioGrid } from './components/PortfolioGrid';
import { AboutSection } from './components/AboutSection';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Footer } from './components/Footer';
import { HexPrismBackground } from './components/HexPrismBackground';

// Lazy-load heavy modals to optimize initial JavaScript bundle size, LCP and INP
const ProjectModal = lazy(() => import('./components/ProjectModal').then(m => ({ default: m.ProjectModal })));
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));

export function App() {
  return (
    <PortfolioProvider>
      <div className="relative min-h-screen bg-[#0A1326] text-slate-100 font-sans selection:bg-[#377BDB] selection:text-white">
        {/* Animated 3D Blueprint Procedural Background */}
        <HexPrismBackground />

        {/* Site Header & Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <JuxtaposeViewer />
            <MethodSection />
            <PortfolioGrid />
            <AboutSection />
            <ProjectEstimator />
          </main>
          <Footer />
        </div>
        
        {/* Modals & Overlays (Lazy Loaded) */}
        <Suspense fallback={null}>
          <ProjectModal />
          <AdminDashboard />
        </Suspense>
      </div>
    </PortfolioProvider>
  );
}

export default App;
