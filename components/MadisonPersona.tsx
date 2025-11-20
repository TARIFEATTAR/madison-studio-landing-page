import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const MadisonPersona: React.FC = () => {
  return (
    <section className="py-32 bg-luxury-tan text-ink-black overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left: Copy */}
          <div className="flex-1 space-y-10">
            <h2 className="font-serif text-5xl md:text-6xl text-ink-black leading-tight">
              Meet Madison, your <br/>
              <span className="italic text-muted-gold">editorial director.</span>
            </h2>
            
            <div className="space-y-8 text-ink-black/70 text-2xl font-light leading-relaxed">
              <p>
                Madison is not another generic AI writer. She’s an editorial director wired into your brand’s brain — looking at your products, collections, voice, and goals before she drafts a word.
              </p>
              <p>
                Ask her to review a launch campaign, tighten a headline, or flag anything off-brand, and she’ll respond with clear, constructive guidance — the velvet hammer your content has been missing.
              </p>
            </div>
          </div>

          {/* Right: Expertise Visualization (Brand DNA Dashboard) */}
          <div className="flex-1 w-full max-w-xl relative">
            {/* Main Dashboard Card */}
            <div className="bg-white rounded-sm shadow-2xl border border-stone-200 overflow-hidden relative z-10">
              {/* Header */}
              <div className="bg-stone-50 border-b border-stone-100 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={18} className="text-deep-green" />
                  <span className="text-xs font-bold tracking-widest text-ink-black uppercase">Brand Guardrails</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-2 py-1 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-deep-green animate-pulse"></div>
                  <span className="text-[10px] font-bold text-deep-green">Active</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-8">
                
                {/* Voice Analysis */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <h4 className="font-serif text-xl text-ink-black">Voice Fingerprint</h4>
                    <span className="text-xs text-stone-400 uppercase tracking-wider">Match Score: 98%</span>
                  </div>
                  <div className="space-y-3">
                    <div className="group">
                      <div className="flex justify-between text-xs font-medium mb-1 text-stone-500">
                        <span>Sophistication</span>
                        <span>High</span>
                      </div>
                      <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-deep-green w-[95%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="group">
                      <div className="flex justify-between text-xs font-medium mb-1 text-stone-500">
                        <span>Empathy</span>
                        <span>Medium-High</span>
                      </div>
                      <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-muted-gold w-[75%] rounded-full"></div>
                      </div>
                    </div>
                    <div className="group">
                      <div className="flex justify-between text-xs font-medium mb-1 text-stone-500">
                        <span>Urgency</span>
                        <span>Low</span>
                      </div>
                      <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-stone-300 w-[20%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-stone-100"></div>

                {/* Guidelines Active */}
                <div>
                  <h4 className="font-serif text-xl text-ink-black mb-4">Active Guidelines</h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-sm border border-stone-100">
                       <CheckCircle2 size={16} className="text-deep-green" />
                       <span className="text-sm text-ink-black/80">Use "sensory" language for textures.</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-sm border border-stone-100">
                       <CheckCircle2 size={16} className="text-deep-green" />
                       <span className="text-sm text-ink-black/80">Avoid clichés like "unlock" or "unleash".</span>
                    </div>
                     <div className="flex items-center gap-3 p-3 bg-stone-50 rounded-sm border border-stone-100">
                       <CheckCircle2 size={16} className="text-deep-green" />
                       <span className="text-sm text-ink-black/80">Maintain 3rd person editorial distance.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating Insight Card */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 w-64 bg-deep-green text-white p-5 rounded-sm shadow-xl border border-stone-700 z-20 animate-slide-up">
               <div className="flex items-start gap-3">
                 <Sparkles size={20} className="text-muted-gold flex-shrink-0 mt-0.5" />
                 <div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-muted-gold block mb-1">Strategic Insight</span>
                   <p className="text-sm font-medium leading-relaxed">
                     "The tone in the second paragraph drifts too casual. Let's elevate it to align with the Fall Reserve Collection persona."
                   </p>
                 </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MadisonPersona;