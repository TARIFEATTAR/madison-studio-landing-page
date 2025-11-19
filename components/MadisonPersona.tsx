import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const MadisonPersona: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "This email is strong, but the opening drifts from your usual tone. Let’s bring back your brand’s confident, grounded voice, tighten the body for clarity, and add one specific proof point from your last launch.";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 25); // Typing speed

    return () => clearInterval(timer);
  }, []);

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

          {/* Right: Chat UI Visualization */}
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-white rounded-sm p-8 shadow-2xl text-ink-black font-sans text-lg border border-stone-200">
              
              {/* User Message */}
              <div className="flex justify-end mb-8">
                <div className="bg-stone-100 py-5 px-8 rounded-sm rounded-tr-none max-w-[85%] shadow-sm">
                  <p className="text-ink-black/80 text-xl">Can you check this email draft? It feels a bit too salesy.</p>
                </div>
              </div>

              {/* Madison Response */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-deep-green flex items-center justify-center text-white shadow-md border-2 border-stone-200">
                  <span className="font-serif font-bold text-2xl">M</span>
                </div>
                <div className="space-y-4 max-w-[90%]">
                  <div className="bg-white border border-stone-100 py-6 px-8 rounded-sm rounded-tl-none shadow-md relative min-h-[140px]">
                    <Sparkles size={20} className="absolute top-5 right-5 text-muted-gold animate-pulse-slow" />
                    <p className="text-ink-black/90 leading-relaxed mb-4 text-xl">
                      "{displayedText}"
                      <span className="inline-block w-2 h-6 ml-1.5 bg-deep-green animate-pulse align-middle"></span>
                    </p>
                    {displayedText.length === fullText.length && (
                      <p className="text-ink-black/90 leading-relaxed font-medium animate-fade-in text-lg">
                        "Here’s an updated version with comments on each change."
                      </p>
                    )}
                  </div>
                  
                  {/* Simulated Attachment */}
                  <div className={`bg-stone-50 border border-stone-200 rounded-sm p-4 flex items-center gap-4 w-4/5 hover:bg-stone-100 cursor-pointer transition-all duration-500 ${displayedText.length === fullText.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <div className="w-12 h-14 bg-white border border-stone-200 rounded-sm shadow-sm flex items-center justify-center">
                      <span className="text-xs font-bold text-deep-green uppercase">DOC</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-base font-semibold text-ink-black">Launch_Email_v2_Madison.docx</div>
                      <div className="text-sm text-soft-gray">Edited just now</div>
                    </div>
                  </div>
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