import React from 'react';
import Button from './ui/Button';
import HeroProductShowcase from './HeroProductShowcase';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12">
          
          {/* Left Content - Adjusted to flex-1 for 50/50 split to give image more room */}
          <div className="w-full animate-slide-up flex-1 lg:pr-4">
            <div className="inline-block mb-6 px-5 py-2 rounded-full bg-stone-100 border border-stone-200">
              <span className="text-sm font-semibold text-ink-black/70 uppercase tracking-widest">
                AI Editorial Director for Modern Brands
              </span>
            </div>
            
            <h1 className="font-serif font-medium leading-[1.05] text-ink-black mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              <span className="whitespace-nowrap">The Content & Brand</span> <br/>
              <span className="whitespace-nowrap">Operating System.</span>
            </h1>
            
            <div className="mb-12">
              <p className="text-2xl md:text-3xl text-ink-black/70 leading-relaxed mb-10 font-light max-w-2xl">
                 Stop wrestling with generic AI. Madison turns your scattered brand knowledge into a single, living system that writes and creates exactly like you.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button 
                  variant="primary" 
                  size="lg"
                  href="https://cal.com/team/madison-studio/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Madison Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content (Visual) - Increased prominence */}
          <div className="flex-1 w-full relative hidden lg:block min-w-0">
             <HeroProductShowcase />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;