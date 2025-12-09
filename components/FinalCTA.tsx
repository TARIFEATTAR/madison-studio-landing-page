import React from 'react';
import { ChevronRight, HelpCircle, Calendar } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Brass gradient background */}
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.shopify.com/s/files/1/1989/5889/files/asala_httpss.mj.runR_LfZAxXUNE_A_blurred_background_view_thro_12d951cb-8230-486e-8f17-847b8a5c37c6_2.png?v=1765248491"
          alt="Madison Studio Background"
          className="w-full h-full object-cover"
        />
        {/* Cream overlay consistent with Hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-vellum via-vellum/90 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center text-ink-black">
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-4 leading-tight">
          Your Brand Has Something to Say.
        </h2>
        <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl mb-8 leading-tight italic">
          Let Madison Help You Say It Everywhere.
        </h2>

        <p className="text-xl text-ink-black/80 mb-12 max-w-2xl mx-auto">
          Start your 14-day free trial. No credit card required.<br />
          Upload your brand, create your first piece, and watch it multiply.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <a
            href="https://app.madisonstudio.io/auth"
            target="_self"
            rel="noopener noreferrer"
            className="bg-ink-black text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-charcoal transition-all hover:scale-105 shadow-xl w-full sm:w-auto flex items-center justify-center gap-2 group"
          >
            <span>Start Creating for Free</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1} />
          </a>
        </div>

        {/* Secondary links */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-ink-black/70">
          <a
            href="https://cal.com/team/madison-studio/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-ink-black transition-colors"
          >
            <Calendar className="w-4 h-4" strokeWidth={1} />
            <span>Book a demo</span>
          </a>
          <span className="hidden sm:block">·</span>
          <a
            href="#help"
            className="flex items-center gap-2 hover:text-ink-black transition-colors"
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