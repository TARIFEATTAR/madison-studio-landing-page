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
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#/pricing' },
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-warm-white/80 backdrop-blur-md border-b border-stone-200/50 py-3' : 'bg-transparent py-6'
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
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
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
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <a
            href="https://app.madisonstudio.io/auth"
            className="text-sm font-medium text-ink-black/70 hover:text-ink-black transition-colors"
          >
            Log in
          </a>
          <a
            href="https://cal.com/team/madison-studio/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-ink-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-charcoal transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
          >
            <span>Schedule Demo</span>
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
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

      {/* Mobile Menu Panel - Elegant styling */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-parchment border-b border-stone shadow-xl animate-fade-in">
          <div className="px-6 pt-4 pb-8 space-y-1">
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-4 text-lg font-serif text-ink-black hover:text-brass hover:bg-vellum rounded-lg transition-colors border-b border-stone/30 last:border-b-0"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://app.madisonstudio.io/auth"
              className="block px-4 py-4 text-lg font-serif text-charcoal hover:text-brass hover:bg-vellum rounded-lg transition-colors"
            >
              Log in
            </a>

            {/* Divider */}
            <div className="pt-4 border-t border-stone mt-4">
              {/* Book a Demo Button */}
              <a
                href="https://cal.com/team/madison-studio/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-brass text-parchment px-6 py-4 rounded-full text-lg font-semibold hover:bg-amber transition-all shadow-lg"
              >
                <span>Book a Demo</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;