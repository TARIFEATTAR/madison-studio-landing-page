import React from 'react';
import { Database, Hammer, CalendarCheck } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Train the Brand Brain",
      desc: "Upload your guidelines, connect your site, and scan your products. Madison builds a knowledge base—including tone, vocabulary, and collections.",
      icon: Database
    },
    {
      id: "02",
      title: "Forge Master Content",
      desc: "Create long-form content in The Forge. Pick a product, set the goal, and let Madison draft a solid, brand-aligned first version you can refine together.",
      icon: Hammer
    },
    {
      id: "03",
      title: "Multiply & Schedule",
      desc: "Turn one master into many assets. Use Multiply to generate emails, social posts, and scripts, then schedule them on the calendar.",
      icon: CalendarCheck
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl text-ink-black mb-6">How Madison fits into your week.</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-px bg-stone-200 z-0"></div>

          {steps.map((step, idx) => (
            <ScrollReveal key={step.id} delay={`${idx * 150}ms`} className="h-full">
              <div className="relative z-10 flex flex-col items-center text-center group h-full">
                <div className="w-28 h-28 bg-white rounded-full border border-stone-200 flex items-center justify-center mb-10 shadow-sm group-hover:shadow-md group-hover:border-muted-gold transition-all duration-300">
                  <step.icon size={36} className="text-deep-green" strokeWidth={1.5} />
                </div>
                <div className="mb-3">
                  <span className="text-base font-bold tracking-widest text-muted-gold uppercase">{step.id}</span>
                </div>
                <h3 className="font-serif text-3xl text-ink-black mb-5">{step.title}</h3>
                <p className="text-xl text-ink-black/60 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;