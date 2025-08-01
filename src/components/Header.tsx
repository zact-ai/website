import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ArrowUpRight, Brain, Calendar } from 'lucide-react';

interface HeaderProps {
  onOpenWaitlist?: () => void;
}

const Header = ({ onOpenWaitlist }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Agents', href: '#agents' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'GitHub', href: 'https://github.com/zact-ai/zact', icon: Github },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <span className="text-3xl font-black text-white tracking-tight">
                ZACT
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center space-x-2 text-white/70 hover:text-white transition-all duration-300 font-medium tracking-wide"
              >
                {item.icon && <item.icon size={18} className="group-hover:rotate-12 transition-transform duration-300" />}
                <span className="relative">
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={onOpenWaitlist}
              className="group relative bg-white text-black px-8 py-3 font-bold tracking-wide hover:bg-gray-100 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">BOOK A CALL</span>
              <div className="absolute inset-0 bg-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                BOOK A CALL
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-gray-300 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="py-8 space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-6 py-3 text-white/70 hover:text-white transition-colors duration-200 font-medium tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon && <item.icon size={18} />}
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="px-6 pt-4">
                <button 
                  onClick={() => {
                    onOpenWaitlist?.();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-white text-black px-8 py-4 font-bold tracking-wide hover:bg-gray-100 transition-colors duration-200"
                >
                  BOOK A CALL
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;