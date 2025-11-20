import React from 'react';
import ScrollReveal from './ui/ScrollReveal';

const TargetAudience: React.FC = () => {
  const personas = [
    {
      role: "Founder / Operator",
      desc: "You run a growing e-commerce brand and wear too many hats. Madison helps you capture your brand brain once, then execute campaigns consistently without micro-managing every word."
    },
    {
      role: "Marketing & Content Teams",
      desc: "You lead a small team and need consistency across channels and freelancers. Madison gives you one place for briefs, brand rules, content, and scheduling."
    },
    {
      role: "Agencies & Studios",
      desc: "You manage multiple client brands and can’t afford chaos. Madison keeps each client’s brand knowledge, content, and calendars separated but structured."
    }
  ];

  return (
    <section className="py-32 bg-warm-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="font-serif text-5xl md:text-6xl text-center text-ink-black mb-20">Who Madison serves best.</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((p, i) => (
            <ScrollReveal key={i} delay={`${i * 100}ms`} className="h-full">
              <div className="bg-white p-10 md:p-12 rounded-sm shadow-sm border-t-4 border-transparent hover:border-muted-gold transition-all duration-300 h-full">
                <h3 className="font-serif text-3xl text-ink-black mb-6">{p.role}</h3>
                <p className="text-xl text-ink-black/60 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;