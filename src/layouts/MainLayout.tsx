import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Garante rolagem para o topo em cada transição de rota
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white font-sans text-slate-800 flex flex-col justify-between">
      <Header />

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
