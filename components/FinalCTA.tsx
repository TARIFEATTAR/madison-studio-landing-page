import React from 'react';
import Button from './ui/Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 bg-luxury-tan text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-ink-black mb-10 leading-tight">
          Ready to give your brand <br/>
          a real operating system?
        </h2>
        <p className="text-3xl text-ink-black/70 mb-16 font-light max-w-3xl mx-auto">
          Walk through Madison Studio live, see your brand inside the system, and leave with a clear plan for your next 90 days of content.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            variant="primary" 
            size="lg" 
            className="w-full sm:w-auto"
            href="https://cal.com/team/madison-studio/demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Madison Demo
          </Button>
          <Button 
             variant="outline" 
             size="lg" 
             className="w-full sm:w-auto"
          >
            Enter the Studio
          </Button>
        </div>
        
        <p className="text-lg text-ink-black/50 font-medium">
          No hard pitch. Just a working session with your brand on screen.
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;