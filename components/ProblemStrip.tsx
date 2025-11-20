import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const ProblemStrip: React.FC = () => {
  const items = [
    {
      problem: "Content lives in scattered docs, email drafts, and random chat threads.",
      solution: "One brand brain that remembers your voice, rules, and products.",
      id: 1
    },
    {
      problem: "Every new writer \"reinvents\" your brand voice.",
      solution: "A content forge that generates masterpieces you actually want to ship.",
      id: 2
    },
    {
      problem: "No clear source of truth for product details or messaging.",
      solution: "A multiply engine that turns each piece into platform-ready derivatives.",
      id: 3
    },
    {
      problem: "Campaign ideas get lost because there’s no central archive.",
      solution: "A calendar and library that keep everything scheduled, searchable, and reusable.",
      id: 4
    }
  ];

  return (
    <section className="py-32 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-24">
            <h2 className="font-serif text-5xl md:text-7xl text-ink-black leading-tight mb-6">
              From scattered content <br className="hidden md:block" />
              to a living brand system.
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Center Spine (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-px bg-stone-200 -translate-x-1/2 z-0"></div>

          <ScrollReveal delay="100ms">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-16">
              <div className="text-center md:text-right md:pr-12">
                  <span className="text-xs font-bold tracking-widest text-stone-400 uppercase">Before Madison</span>
              </div>
              <div className="text-center md:text-left md:pl-12">
                  <span className="text-xs font-bold tracking-widest text-deep-green uppercase">With Madison Studio</span>
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-8 md:space-y-20 relative z-10">
            {items.map((item, idx) => (
              <ScrollReveal key={item.id} delay={`${idx * 100}ms`} threshold={0.2}>
                <div className="group grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 items-center">
                  
                  {/* Left: The Problem (Before) */}
                  <div className="relative md:text-right">
                    <div className="p-8 border border-dashed border-stone-300 rounded-sm bg-stone-50/50 text-ink-black/60 transition-all duration-300 group-hover:border-red-200 group-hover:bg-red-50/10 group-hover:text-ink-black/50">
                      <div className="flex items-start md:justify-end gap-4">
                        <div className="flex-1">
                          <p className="text-xl font-light leading-relaxed">{item.problem}</p>
                        </div>
                        <div className="flex-shrink-0 mt-1 text-stone-300 group-hover:text-red-300 transition-colors">
                          <X size={24} />
                        </div>
                      </div>
                    </div>
                    {/* Connector Dot (Desktop) */}
                    <div className="hidden md:flex absolute top-1/2 -right-[54px] w-3 h-3 rounded-full bg-stone-200 border-2 border-white z-20 transform -translate-y-1/2 transition-all duration-500 group-hover:scale-125 group-hover:bg-muted-gold group-hover:border-muted-gold"></div>
                  </div>

                  {/* Mobile Connector */}
                  <div className="md:hidden flex justify-center">
                    <ArrowRight className="text-stone-300 rotate-90" />
                  </div>

                  {/* Right: The Solution (After) */}
                  <div className="relative">
                    <div className="p-8 border border-stone-200 rounded-sm bg-white shadow-sm transition-all duration-500 ease-out group-hover:shadow-xl group-hover:-translate-y-1 group-hover:border-muted-gold relative overflow-hidden">
                      {/* Highlight effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-muted-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                      
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1 text-stone-300 group-hover:text-deep-green transition-colors duration-300">
                          <Check size={24} strokeWidth={3} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xl font-medium text-ink-black leading-relaxed">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStrip;