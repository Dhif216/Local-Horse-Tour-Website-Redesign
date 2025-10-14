import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'fi';
  onNavigate: (page: string) => void;
}

export function Footer({ language, onNavigate }: FooterProps) {
  const t = {
    en: {
      tagline: 'Experience authentic Finnhorse adventures in the heart of Lapland',
      quickLinks: 'Quick Links',
      home: 'Home',
      tours: 'Tours',
      about: 'About Us',
      blog: 'Blog',
      contact: 'Contact',
      address: 'Rovaniemi, Lapland, Finland',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
      followUs: 'Follow Us',
    },
    fi: {
      tagline: 'Koe aitoja suomenhevosseikkailuja Lapin sydämessä',
      quickLinks: 'Pikalinkit',
      home: 'Etusivu',
      tours: 'Retket',
      about: 'Meistä',
      blog: 'Blogi',
      contact: 'Yhteystiedot',
      address: 'Rovaniemi, Lappi, Suomi',
      legal: 'Juridiset',
      privacy: 'Tietosuojakäytäntö',
      terms: 'Käyttöehdot',
      rights: 'Kaikki oikeudet pidätetään.',
      followUs: 'Seuraa Meitä',
    },
  };

  const text = t[language];

  return (
    <footer className="bg-[#0f1e3d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-xl mb-1" style={{ fontWeight: 600 }}>Länsilammen Tila</h3>
              <p className="text-[#1eb3a6] text-sm tracking-wider">ROVANIEMI</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {text.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>{text.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { id: 'home', label: text.home },
                { id: 'tours', label: text.tours },
                { id: 'about', label: text.about },
                { id: 'blog', label: text.blog },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-300 hover:text-[#1eb3a6] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>{text.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#1eb3a6]" />
                <span className="text-gray-300 text-sm">{text.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#1eb3a6]" />
                <span className="text-gray-300 text-sm">+358 40 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#1eb3a6]" />
                <span className="text-gray-300 text-sm">info@lansilammentila.fi</span>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>{text.followUs}</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1eb3a6] transition-colors flex items-center justify-center"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1eb3a6] transition-colors flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2">
              <button className="text-gray-300 hover:text-[#1eb3a6] transition-colors text-sm block">
                {text.privacy}
              </button>
              <button className="text-gray-300 hover:text-[#1eb3a6] transition-colors text-sm block">
                {text.terms}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Länsilammen Tila. {text.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
