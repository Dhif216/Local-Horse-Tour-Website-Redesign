import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TourPage } from './pages/TourPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState<'en' | 'fi'>('en');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (lang: 'en' | 'fi') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={handleLanguageChange}
      />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage language={language} onNavigate={handleNavigate} />
        )}
        {currentPage === 'tours' && (
          <TourPage language={language} onNavigate={handleNavigate} />
        )}
        {currentPage === 'about' && (
          <AboutPage language={language} />
        )}
        {currentPage === 'blog' && (
          <BlogPage language={language} onNavigate={handleNavigate} />
        )}
      </main>

      <Footer language={language} onNavigate={handleNavigate} />
    </div>
  );
}
