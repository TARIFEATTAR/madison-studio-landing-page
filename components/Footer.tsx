import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Pricing', href: '#/pricing' },
    { name: 'Resources', href: '#/help' },
    { name: 'Help Center', href: '#/help' },
    { name: 'Privacy', href: '#/privacy' },
    { name: 'Terms', href: '#/terms' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // CRITICAL: Prevent default browser navigation to avoid "Refused to display in a frame" errors
    e.preventDefault();
    e.stopPropagation();
    
    if (href.startsWith('#')) {
       window.location.hash = href;
    } else {
       window.location.href = href;
    }
  };

  return (
    <footer className="bg-ink-black text-white py-20 md:py-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl tracking-widest uppercase mb-3 text-white">Madison Studio</h3>
            <p className="text-stone-400 text-base tracking-wide">Authentic Intelligence by Asala</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-lg text-stone-400">
            {footerLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>
        
        <div className="mt-16 pt-10 border-t border-stone-800 text-center md:text-left text-base text-stone-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Madison Studio. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            {/* Optional Social Placeholders */}
            <div className="w-6 h-6 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"></div>
            <div className="w-6 h-6 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;