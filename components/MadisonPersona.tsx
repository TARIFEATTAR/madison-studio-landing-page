import React, { useEffect, useRef } from 'react';
import { CheckCircle2, ShieldCheck, Lightbulb } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const MadisonPersona: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Animate only when the section is near or in the viewport to optimize performance
      if (rect.top < viewportHeight + 100 && rect.bottom > -100) {
        // Calculate scroll progress relative to the viewport
        // As we scroll down, rect.top decreases.
        // We move the background DOWN relative to the container (positive Y)
        // This counteracts the upward scroll of the container, creating the "slower" parallax illusion.

        const scrollDelta = viewportHeight - rect.top;

        // Primary Pattern Layer (Slow movement)
        if (bgRef.current) {
          const speed = 0.08;
          // Start with a negative offset so it's centered correctly
          bgRef.current.style.transform = `translate3d(0, ${scrollDelta * speed}px, 0)`;
        }

        // Secondary Orb Layer (Slightly different speed for depth)
        if (orbRef.current) {
          const speed = 0.04;
          // Move slightly in reverse or slower to create layer separation
          orbRef.current.style.transform = `translate3d(0, ${scrollDelta * -speed}px, 0)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial positioning

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-luxury-tan text-ink-black overflow-hidden relative">
      {/* Decorative background element - Parallax Layer 1 (Pattern) */}
      {/* Increased height and negative top to ensure coverage during parallax movement */}
      <div
        ref={bgRef}
        className="absolute -top-40 right-0 w-full md:w-3/4 h-[150%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none will-change-transform"
      ></div>

      {/* Decorative background element - Parallax Layer 2 (Subtle Orb) */}
      <div
        ref={orbRef}
        className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-deep-green/5 rounded-full blur-3xl pointer-events-none will-change-transform mix-blend-multiply"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">

          {/* Left: Copy */}
          <div className="flex-1 space-y-10">
            <ScrollReveal animation="slide-up">
              <h2 className="font-serif text-5xl md:text-6xl text-ink-black leading-tight">
                Meet Madison, your <br />
                <span className="italic text-muted-gold">editorial director.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay="200ms" animation="slide-up">
              <div className="space-y-8 text-ink-black/70 text-2xl font-light leading-relaxed">
                <p>
                  Madison is not another generic AI writer. She’s an editorial director wired into your brand’s brain — looking at your products, collections, voice, and goals before she drafts a word.
                </p>
                <p>
                  Ask her to review a launch campaign, tighten a headline, or flag anything off-brand, and she’ll respond with clear, constructive guidance — the velvet hammer your content has been missing.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Expertise Visualization (Brand DNA Dashboard) */}
          <div className="flex-1 w-full max-w-xl relative">
            <ScrollReveal delay="300ms" animation="fade-in">
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
                  <Lightbulb size={20} className="text-muted-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-gold block mb-1">Strategic Insight</span>
                    <p className="text-sm font-medium leading-relaxed">
                      "The tone in the second paragraph drifts too casual. Let's elevate it to align with the Fall Reserve Collection persona."
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MadisonPersona;