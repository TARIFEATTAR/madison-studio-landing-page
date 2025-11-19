import React from 'react';

const Integrations: React.FC = () => {
  return (
    <section className="py-28 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-lg font-bold tracking-widest text-soft-gray uppercase mb-16">Plays well with the tools you already use</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Logos using simple text/svg placeholders for strict requirement adherence, assuming no assets provided */}
           {/* Shopify */}
           <span className="font-bold text-4xl text-ink-black flex items-center gap-4">
             <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L2 5v14l10 5 10-5V5L12 0zm0 2.2l8 4v11.6l-8 4-8-4V6.2l8-4z"/></svg>
             Shopify
           </span>
           
           {/* Klaviyo */}
           <span className="font-bold text-4xl text-ink-black flex items-center gap-4">
             <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h4v16H4V4zm12 0l-6 8 6 8h-4l-4-5.5L12 10V4h4z"/></svg>
             Klaviyo
           </span>

           {/* Google Calendar */}
           <span className="font-bold text-4xl text-ink-black flex items-center gap-4">
             <svg viewBox="0 0 24 24" className="w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg>
             Calendar
           </span>
        </div>
        
        <p className="mt-16 text-xl text-ink-black/50 max-w-xl mx-auto">
          Use Madison to generate, organize, and schedule — then push to your existing stack with clean, structured outputs.
        </p>
      </div>
    </section>
  );
};

export default Integrations;