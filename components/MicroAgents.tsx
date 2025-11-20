import React from 'react';
import { Microscope, Activity, Layers } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const MicroAgents: React.FC = () => {
  const agents = [
    {
      title: "Madison Refiner Agent",
      desc: "Embedded in the editor, this agent analyzes each draft for clarity, structure, and brand alignment — then proposes precise improvements you can accept in one click.",
      icon: Microscope
    },
    {
      title: "Brand Health Micro-Analyzer",
      desc: "Continuously reviews your brand knowledge, finds gaps, and suggests what to document next — from tone examples to key messages — so your score keeps climbing.",
      icon: Activity
    },
    {
      title: "Derivative Selector Agent",
      desc: "Looks at your master content and ranks which derivatives and channels will have the most impact — turning Multiply into a strategic engine, not just a repurposing tool.",
      icon: Layers
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-ink-black mb-6">
              Under the hood: micro-agents that keep your brand sharp.
            </h2>
            <p className="text-ink-black/60 text-2xl">
              Madison runs specialized micro-agents in the background so your content gets smarter over time.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {agents.map((agent, idx) => (
            <ScrollReveal key={idx} delay={`${idx * 150}ms`} className="h-full">
              <div className="p-10 bg-stone-50 rounded border border-stone-100 flex flex-col items-start hover:bg-white hover:border-muted-gold hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-out group h-full">
                <div className="p-4 bg-white rounded shadow-sm text-deep-green mb-8 group-hover:bg-stone-50 transition-colors">
                  <agent.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-3xl font-semibold text-ink-black mb-5">{agent.title}</h3>
                <p className="text-xl leading-relaxed text-ink-black/70">{agent.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicroAgents;