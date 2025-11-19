import React from 'react';
import { LayoutGrid, PenTool, Share2, BarChart } from 'lucide-react';

// This component renders the abstract UI composition
const HeroUi: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] perspective-1000 group">
      {/* Container for the floating cards */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Back Card: Calendar / Schedule */}
        <div className="absolute top-4 right-4 md:right-0 w-64 h-72 bg-white rounded-sm shadow-lg border border-stone-100 transform rotate-3 opacity-60 z-10 p-4 transition-all duration-500 ease-out hover:rotate-0 hover:-translate-y-2 hover:opacity-100 hover:shadow-xl cursor-default">
           <div className="flex items-center gap-2 mb-4 border-b border-stone-100 pb-2">
             <div className="w-3 h-3 rounded-full bg-stone-200"></div>
             <div className="h-2 w-20 bg-stone-100 rounded-sm"></div>
           </div>
           <div className="space-y-3">
             <div className="h-8 w-full bg-stone-50 rounded-sm border border-stone-100"></div>
             <div className="h-8 w-full bg-stone-50 rounded-sm border border-stone-100"></div>
             <div className="h-8 w-full bg-stone-50 rounded-sm border border-stone-100"></div>
           </div>
        </div>

        {/* Back Card: Image Asset */}
        <div className="absolute bottom-12 left-0 w-56 h-64 bg-stone-100/80 backdrop-blur-sm rounded-sm shadow-md transform -rotate-6 z-20 border border-white p-2 flex flex-col transition-all duration-500 ease-out hover:rotate-0 hover:-translate-y-2 hover:scale-105 hover:bg-stone-100 cursor-default">
           <div className="flex-1 bg-stone-200 rounded-sm overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-300 to-stone-100 opacity-50"></div>
           </div>
           <div className="h-3 w-3/4 bg-stone-300/50 mt-3 rounded-sm"></div>
        </div>

        {/* Main Center Card: The Editor / Brand Brain */}
        {/* Note: Changed from absolute centering to static flex item to allow easier hover transforms without breaking layout */}
        <div className="w-80 md:w-96 bg-white rounded-sm shadow-xl border border-stone-200 z-30 p-6 animate-slide-up transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] cursor-default">
          {/* Header of the card */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-deep-green/10 rounded-sm">
                <LayoutGrid size={16} className="text-deep-green" />
              </div>
              <span className="text-xs font-semibold tracking-wide text-deep-green uppercase">Brand Health</span>
            </div>
            <span className="text-xs font-bold text-deep-green bg-deep-green/5 px-2 py-1 rounded-full">94/100</span>
          </div>

          {/* Content Body */}
          <div className="space-y-4">
             <div>
               <div className="h-3 w-1/3 bg-stone-200 rounded-sm mb-2"></div>
               <div className="h-20 w-full bg-stone-50 rounded-sm border border-stone-100 p-3">
                 <div className="h-2 w-full bg-stone-200 rounded-sm mb-2"></div>
                 <div className="h-2 w-5/6 bg-stone-200 rounded-sm mb-2"></div>
                 <div className="h-2 w-4/6 bg-stone-200 rounded-sm"></div>
               </div>
             </div>

             <div className="flex gap-3">
               <div className="flex-1 h-16 bg-warm-white rounded-sm border border-stone-100 flex flex-col items-center justify-center gap-1 hover:bg-stone-50 transition-colors">
                  <PenTool size={14} className="text-muted-gold" />
                  <div className="h-1.5 w-8 bg-stone-200 rounded-sm"></div>
               </div>
               <div className="flex-1 h-16 bg-warm-white rounded-sm border border-stone-100 flex flex-col items-center justify-center gap-1 hover:bg-stone-50 transition-colors">
                  <Share2 size={14} className="text-muted-gold" />
                  <div className="h-1.5 w-8 bg-stone-200 rounded-sm"></div>
               </div>
               <div className="flex-1 h-16 bg-warm-white rounded-sm border border-stone-100 flex flex-col items-center justify-center gap-1 hover:bg-stone-50 transition-colors">
                  <BarChart size={14} className="text-muted-gold" />
                  <div className="h-1.5 w-8 bg-stone-200 rounded-sm"></div>
               </div>
             </div>
          </div>
        </div>

        {/* Floating Prompt Snippet */}
        <div className="absolute -right-4 bottom-20 bg-deep-green text-white p-4 rounded-sm shadow-lg z-40 max-w-[200px] transform rotate-1 transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-0 hover:scale-105 cursor-default">
          <div className="text-[10px] opacity-70 uppercase tracking-wider mb-1">Generated Output</div>
          <div className="text-xs font-serif leading-relaxed">
            "Discover the new essence of calm. Our latest collection..."
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroUi;