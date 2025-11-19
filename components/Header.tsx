import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#/pricing' },
    { name: 'Resources', href: '#/help' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // CRITICAL: Prevent default browser navigation to avoid "Refused to display in a frame" errors
    // in preview environments like WebContainer/CodeSandbox.
    e.preventDefault();
    e.stopPropagation();

    if (href.startsWith('#')) {
      // Manually update the hash to trigger the App's hashchange listener
      window.location.hash = href;
      setIsMobileMenuOpen(false);
    } else {
      // For external links, open in new tab/navigate normally
      window.location.href = href;
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-warm-white/80 backdrop-blur-md border-b border-stone-200/50 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a 
            href="#/" 
            onClick={(e) => handleNavClick(e, '#/')}
            className="font-serif text-3xl tracking-widest font-bold text-ink-black uppercase"
          >
            Madison Studio
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-ink-black/70 hover:text-deep-green transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
           <Button variant="ghost" size="sm" className="font-normal">
            Enter the Studio
          </Button>
          <Button 
            variant="primary" 
            size="sm" 
            href="https://cal.com/team/madison-studio/demo" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Madison Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-ink-black focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-warm-white border-b border-stone-200 shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-4 text-xl font-medium text-ink-black hover:bg-stone-100 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-4">
              <Button 
                variant="primary" 
                size="md" 
                className="w-full"
                href="https://cal.com/team/madison-studio/demo" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Madison Demo
              </Button>
              <Button variant="outline" size="md" className="w-full">
                Enter the Studio
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;