import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  language: 'en' | 'fi';
  onLanguageChange: (lang: 'en' | 'fi') => void;
}

export function Navigation({ currentPage, onNavigate, language, onLanguageChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = {
    en: {
      home: 'Home',
      tours: 'Tours',
      about: 'About',
      blog: 'Blog',
      bookNow: 'Book Now',
    },
    fi: {
      home: 'Etusivu',
      tours: 'Retket',
      about: 'Meistä',
      blog: 'Blogi',
      bookNow: 'Varaa Nyt',
    },
  };

  const text = t[language];

  const navLinks = [
    { id: 'home', label: text.home },
    { id: 'tours', label: text.tours },
    { id: 'about', label: text.about },
    { id: 'blog', label: text.blog },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex-shrink-0 cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-[#0f1e3d] tracking-wide" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Länsilammen Tila
              </span>
              <span className="text-[#8b7355] text-xs tracking-wider">ROVANIEMI</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-colors ${
                  currentPage === link.id
                    ? 'text-[#0f1e3d]'
                    : 'text-gray-600 hover:text-[#0f1e3d]'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Language Selector */}
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'fi' : 'en')}
              className="flex items-center space-x-1 text-gray-600 hover:text-[#0f1e3d] transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm uppercase">{language}</span>
            </button>

            {/* Book Now CTA */}
            <Button
              className="bg-[#1eb3a6] hover:bg-[#18998e] text-white px-6"
              onClick={() => onNavigate('tours')}
            >
              {text.bookNow}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Button
              className="bg-[#1eb3a6] hover:bg-[#18998e] text-white px-4 py-2"
              onClick={() => onNavigate('tours')}
            >
              {text.bookNow}
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 ${
                  currentPage === link.id
                    ? 'text-[#0f1e3d]'
                    : 'text-gray-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'fi' : 'en')}
              className="flex items-center space-x-2 py-2 text-gray-600"
            >
              <Globe className="w-4 h-4" />
              <span>Language: {language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
