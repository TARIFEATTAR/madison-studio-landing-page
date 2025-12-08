import React from 'react';
import { Upload, PenTool, Layers, Calendar } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '1',
      icon: <Upload className="w-6 h-6" strokeWidth={1} />,
      title: 'Teach Madison Your Brand',
      description: 'Upload your brand guidelines, website, and writing samples. Madison learns your voice, values, and visual style.',
    },
    {
      number: '2',
      icon: <PenTool className="w-6 h-6" strokeWidth={1} />,
      title: 'Create Your Master Content',
      description: 'Write a blog post, email, or product story with AI assistance that actually sounds like you.',
    },
    {
      number: '3',
      icon: <Layers className="w-6 h-6" strokeWidth={1} />,
      title: 'Multiply Across Channels',
      description: 'One click generates Instagram posts, tweets, LinkedIn updates, emails, and more—all adapted for each platform.',
    },
    {
      number: '4',
      icon: <Calendar className="w-6 h-6" strokeWidth={1} />,
      title: 'Add Visuals & Schedule',
      description: 'Generate on-brand images, animate them into video, and schedule everything from one calendar.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-vellum relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 border border-stone rounded-full" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-stone rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-stone rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-bold text-brass uppercase tracking-widest mb-4">How It Works</p>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium text-ink-black mb-6 tracking-tight">
            From Blank Page to Published in 4 Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-stone" />
              )}

              <div className="bg-parchment p-8 rounded-2xl border border-stone hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {/* Number badge */}
                <div className="w-12 h-12 rounded-full bg-brass text-parchment flex items-center justify-center font-serif text-xl font-semibold mb-6">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-brass mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-medium text-ink-black mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;