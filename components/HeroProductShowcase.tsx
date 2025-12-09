import React from 'react';
import {
  Feather, Instagram, CheckCircle2,
  BarChart3, Globe, Mail, MousePointer2,
  MessageSquare, Share2, MoreHorizontal,
  Zap, Hexagon
} from 'lucide-react';

const HeroProductShowcase: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] lg:h-[640px] flex items-center justify-center perspective-1000">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; }
      `}</style>

      {/* Abstract Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-[#EBE5DA]/50 via-transparent to-transparent opacity-60 blur-3xl rounded-full pointer-events-none"></div>

      {/* Composition Container */}
      <div className="relative w-full max-w-[600px] xl:max-w-[700px] h-full flex items-center justify-center">

        {/* 1. BRAND INTELLIGENCE CARD (Back Left Layer) */}
        <div className="absolute top-[12%] -left-4 md:-left-12 w-64 bg-white/90 backdrop-blur-sm rounded-sm shadow-lg border border-stone-100 p-5 z-10 animate-float-delayed hidden md:block transform -rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center justify-between mb-4 border-b border-stone-50 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-deep-green rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Brand DNA</span>
            </div>
            <span className="text-[10px] font-bold text-deep-green bg-green-50 px-1.5 py-0.5 rounded-sm">Active</span>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-ink-black">Voice Consistency</span>
                <span className="text-xs font-bold text-deep-green">98%</span>
              </div>
              <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-deep-green w-[98%] h-full rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-stone-50 text-[10px] font-medium text-stone-500 rounded-sm border border-stone-100">Quiet Luxury</span>
              <span className="px-2 py-1 bg-stone-50 text-[10px] font-medium text-stone-500 rounded-sm border border-stone-100">Minimal</span>
              <span className="px-2 py-1 bg-stone-50 text-[10px] font-medium text-stone-500 rounded-sm border border-stone-100">Authoritative</span>
            </div>
          </div>
        </div>

        {/* 2. MAIN EDITOR INTERFACE (Center Layer) */}
        <div className="relative w-[95%] bg-white rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-stone-200 z-20 overflow-hidden flex flex-col aspect-[4/3] md:aspect-[16/11] animate-float">
          {/* Window Chrome */}
          <div className="bg-stone-50/80 backdrop-blur px-5 py-4 border-b border-stone-100 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-stone-200"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-stone-200"></div>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-sm border border-stone-100 shadow-sm">
              <Zap size={10} className="text-muted-gold fill-muted-gold" />
              <div className="text-[10px] font-bold text-ink-black uppercase tracking-widest">Create</div>
            </div>
            <div className="w-5"></div>
          </div>

          {/* Editor Content */}
          <div className="flex-1 p-8 md:p-10 relative bg-white">
            {/* Floating AI Badge inside editor */}
            <div className="absolute top-10 right-10 animate-fade-in">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-stone-50 to-white text-ink-black rounded-full text-[10px] font-bold border border-stone-100 shadow-sm">
                <Feather size={10} className="text-muted-gold" />
                <span>Madison AI</span>
              </div>
            </div>

            <div className="max-w-lg">
              <div className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">Draft v2.4 • Campaign Launch</div>

              <h1 className="font-serif text-4xl md:text-5xl text-ink-black mb-6 leading-[1.1]">
                Oud Noir: <br />
                <span className="text-stone-300">The Scent of Shadows</span>
              </h1>

              <div className="space-y-3 opacity-80">
                <div className="h-4 w-full bg-stone-100 rounded-sm"></div>
                <div className="h-4 w-[92%] bg-stone-100 rounded-sm"></div>
                <div className="h-4 w-[96%] bg-stone-100 rounded-sm"></div>
                <div className="h-4 w-[85%] bg-stone-100 rounded-sm"></div>
              </div>

              {/* Typing Cursor Simulation */}
              <div className="mt-8 flex items-center gap-3 text-muted-gold text-sm font-medium border-l-2 border-muted-gold pl-4 py-1 bg-stone-50/50 rounded-r-sm">
                <span className="text-ink-black italic font-serif text-lg">"The resinous warmth lingers like a memory..."</span>
                <span className="w-1.5 h-4 bg-muted-gold animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Editor Footer */}
          <div className="px-6 py-3 bg-stone-50 border-t border-stone-100 flex justify-between items-center">
            <div className="flex gap-4 text-[10px] font-bold text-stone-400 uppercase tracking-wider">
              <span>Words: 342</span>
              <span>Read Time: 2m</span>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-stone-500">JD</div>
              <div className="w-6 h-6 rounded-full bg-deep-green border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">M</div>
            </div>
          </div>
        </div>

        {/* 3. OUTPUT / PREVIEW CARD (Right Front Layer) */}
        <div className="absolute -bottom-6 -right-4 md:-right-12 w-56 bg-white rounded-lg shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-stone-100 p-3 z-30 animate-float-delayed hidden md:block transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2"><Hexagon size={24} /><span className="font-serif font-bold text-xl">BYREDO</span></div>
            <MoreHorizontal size={12} className="text-stone-300" />
          </div>

          {/* Mock Image Area */}
          <div className="aspect-[4/5] bg-stone-100 rounded-md mb-3 relative overflow-hidden group">
            {/* Real Product Image */}
            <img
              src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=800&auto=format&fit=crop"
              alt="Oud Noir Perfume on Stone"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* UI Overlays */}
            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur px-2 py-1 rounded text-[8px] font-bold text-white">
              STORY
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-white font-serif text-xl leading-none mb-2 drop-shadow-md">Oud Noir</div>
              <div className="flex gap-1">
                <div className="h-0.5 w-full bg-white/40 rounded-full overflow-hidden">
                  <div className="h-full w-1/2 bg-white"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-ink-black text-white text-[10px] font-bold rounded-sm hover:bg-stone-800 transition-colors">Schedule Post</button>
          </div>
        </div>

        {/* 4. FLOATING NOTIFICATION */}
        <div className="absolute top-[25%] -right-8 lg:right-[5%] bg-white px-4 py-3 rounded-sm shadow-xl border-l-4 border-muted-gold z-40 animate-float hidden lg:flex items-center gap-3 max-w-[200px]">
          <div className="p-1.5 bg-stone-100 text-ink-black rounded-full">
            <Mail size={14} />
          </div>
          <div className="text-xs leading-tight">
            <span className="font-bold text-ink-black block">Email Sequence</span>
            <span className="text-stone-500">Generated from Master</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroProductShowcase;