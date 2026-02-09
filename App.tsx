
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Privacy } from './components/Privacy';
import { Terms } from './components/Terms';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial page

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'privacy':
        return <Privacy />;
      case 'terms':
        return <Terms />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Problem />
            <Features />
            <Pricing />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
