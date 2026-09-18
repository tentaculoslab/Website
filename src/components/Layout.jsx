import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { HexPrismBackground } from './HexPrismBackground';
import { ScrollToTop } from './ScrollToTop';

const ProjectModal = lazy(() => import('./ProjectModal').then(m => ({ default: m.ProjectModal })));
const AdminDashboard = lazy(() => import('./admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));

export const Layout = () => {
  return (
    <div className="relative min-h-screen bg-[#0A1326] text-slate-100 font-sans selection:bg-[#377BDB] selection:text-white flex flex-col justify-between">
      {/* Scroll restoration on route change */}
      <ScrollToTop />

      {/* Procedural 3D Blueprint Background */}
      <HexPrismBackground />

      {/* Main App Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Outlet />
        </main>
        <Footer />
      </div>

      {/* Global Modals */}
      <Suspense fallback={null}>
        <ProjectModal />
        <AdminDashboard />
      </Suspense>
    </div>
  );
};
