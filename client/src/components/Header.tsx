import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 bg-bg z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="/" className="brand-logo group cursor-pointer" style={{ fontFamily: 'Times New Roman, serif', fontSize: '1.75rem', fontWeight: 400, letterSpacing: '0.05em' }}>
            <span className="brand-room" style={{ color: '#2c1810', transform: 'scaleX(0.85)', display: 'inline-block' }}>ROOM</span>
            <span className="brand-slash" style={{ color: '#8B4513', margin: '0 2px', transform: 'skewX(-12deg)', display: 'inline-block' }}>/</span>
            <span className="brand-stroy" style={{ color: '#8B4513', transform: 'scaleX(0.85)', display: 'inline-block' }}>STROY</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-heading hover:text-primary transition-colors font-medium"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-heading hover:text-primary transition-colors font-medium"
            >
              Как мы работаем
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-heading hover:text-primary transition-colors font-medium"
            >
              Портфолио
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-heading hover:text-primary transition-colors font-medium"
            >
              Команда
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-heading hover:text-primary transition-colors font-medium"
            >
              Контакты
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-heading"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left py-2 text-heading hover:text-primary transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="block w-full text-left py-2 text-heading hover:text-primary transition-colors"
            >
              Как мы работаем
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left py-2 text-heading hover:text-primary transition-colors"
            >
              Портфолио
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="block w-full text-left py-2 text-heading hover:text-primary transition-colors"
            >
              Команда
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-heading hover:text-primary transition-colors"
            >
              Контакты
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
