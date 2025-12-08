import React from 'react';
import { ChevronRight, Play, Check } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-art-deco.jpg')" }}
      />

      {/* Overlays */}
      {/* Mobile: Strong vertical fade for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-vellum/90 via-vellum/80 to-vellum/60 lg:hidden" />

      {/* Desktop: Elegant horizontal fade (solid left to transparent right) */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-vellum via-vellum/90 via-40% to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 max-w-2xl animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-parchment/80 backdrop-blur border border-stone text-xs font-semibold text-ink-black uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brass opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brass"></span>
              </span>
              AI-Powered Brand Intelligence
            </div>

            {/* Headline - Option C: Editorial Luxury */}
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-ink-black leading-[1.1]">
              The Editorial Director<br />
              <span className="italic text-charcoal">Your Brand Deserves.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-charcoal/80 leading-relaxed max-w-xl">
              Meet Madison—an AI-powered content studio that learns your brand voice, crafts master content, and multiplies it across every channel with museum-quality precision.
            </p>

            {/* Subheadline */}
            <p className="font-accent italic text-lg text-charcoal/70">
              AI-powered brand intelligence for businesses who refuse to sound like everyone else.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://app.madisonstudio.io/auth"
                target="_self"
                rel="noopener noreferrer"
                className="bg-brass text-parchment px-8 py-4 rounded-full text-base font-semibold hover:bg-brass/90 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                <span>Start Creating</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://cal.com/team/madison-studio/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-brass text-brass px-8 py-4 rounded-full text-base font-semibold hover:bg-brass/10 transition-all flex items-center justify-center gap-2"
              >
                <ChevronRight className="w-4 h-4" />
                <span>Schedule a Demo</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-charcoal/60">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sage" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sage" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sage" />
                <span>Set up in 5 minutes</span>
              </div>
            </div>
          </div>

          {/* Right side - Empty for image to show through */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};

export default Hero;