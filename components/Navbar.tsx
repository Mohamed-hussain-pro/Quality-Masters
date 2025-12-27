
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BRAND_NAME, NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`} dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-reverse space-x-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-amber-500 rounded flex items-center justify-center font-bold text-slate-900 text-xl">Q</div>
            <span className="text-xl font-bold tracking-tight text-white">{BRAND_NAME}</span>
          </div>
          
          <div className="hidden md:flex space-x-reverse space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm font-medium text-slate-300 hover:text-amber-500 transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-amber-500 text-slate-900 px-5 py-2 rounded-full text-sm font-bold hover:bg-amber-400 transition-all transform hover:scale-105"
            >
              استشارة مجانية
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full py-4 px-4 shadow-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4 text-right">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-lg font-medium text-slate-300 hover:text-amber-500 uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-amber-500 text-slate-900 px-5 py-3 rounded-xl text-center font-bold"
            >
              استشارة مجانية
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
