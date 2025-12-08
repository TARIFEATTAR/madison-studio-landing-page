import React from 'react';
import { ChevronRight, HelpCircle, Calendar } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Brass gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brass via-brass to-amber" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.3),_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,_rgba(0,0,0,0.2),_transparent_50%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center text-parchment">
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-4 leading-tight">
          Your Brand Has Something to Say.
        </h2>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-8 leading-tight italic">
          Let Madison Help You Say It Everywhere.
        </h2>

        <p className="text-xl text-parchment/90 mb-12 max-w-2xl mx-auto">
          Start your 14-day free trial. No credit card required.<br />
          Upload your brand, create your first piece, and watch it multiply.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <a
            href="https://app.madisonstudio.io/auth"
            target="_self"
            rel="noopener noreferrer"
            className="bg-ink-black text-parchment px-10 py-5 rounded-full text-lg font-semibold hover:bg-charcoal transition-all hover:scale-105 shadow-xl w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            <span>Start Creating for Free</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1} />
          </a>
        </div>

        {/* Secondary links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-parchment/80">
          <a
            href="https://cal.com/team/madison-studio/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-parchment transition-colors"
          >
            <Calendar className="w-4 h-4" strokeWidth={1} />
            <span>Book a demo</span>
          </a>
          <span className="hidden sm:block">·</span>
          <a
            href="#help"
            className="flex items-center gap-2 hover:text-parchment transition-colors"
          >
            <HelpCircle className="w-4 h-4" strokeWidth={1} />
            <span>Explore our help center</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;