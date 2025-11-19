import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

interface FeatureProps {
  label: string;
  title: string;
  description: string;
  score?: number;
  isInteractive?: boolean;
}

const InteractiveVoiceDemo = () => {
  const [activeMode, setActiveMode] = useState<'draft' | 'corporate' | 'madison'>('madison');

  const content = {
    draft: "We make candles that smell good and help you relax.",
    corporate: "Our olfactory products facilitate relaxation via high-quality aromatic compounds.",
    madison: "Discover the essence of calm. Hand-poured wax that turns your space into a sanctuary."
  };

  return (
    <div className="mt-auto pt-6">
       <div className="flex gap-2 mb-4">
          {(['draft', 'corporate', 'madison'] as const).map((mode) => (
            <button
              key={mode}
              onClick={(e) => { e.preventDefault(); setActiveMode(mode); }}
              className={`text-sm uppercase tracking-wider font-bold px-4 py-2 rounded-sm border transition-all ${
                activeMode === mode 
                ? 'bg-deep-green text-white border-deep-green' 
                : 'bg-transparent text-stone-400 border-stone-200 hover:border-stone-300'
              }`}
            >
              {mode}
            </button>
          ))}
       </div>
       <div className="p-6 bg-stone-50 border border-stone-100 rounded-sm min-h-[120px] relative flex items-center">
          <p className="font-serif text-2xl text-ink-black leading-snug animate-fade-in">
            "{content[activeMode]}"
          </p>
          {activeMode === 'madison' && (
            <div className="absolute -right-1 -bottom-1 bg-muted-gold text-white text-xs px-3 py-1.5 uppercase tracking-widest font-bold">
              On Brand
            </div>
          )}
       </div>
    </div>
  );
};

const FeatureCard: React.FC<FeatureProps> = ({ label, title, description, score, isInteractive }) => (
  <div className="group bg-white p-10 rounded-sm border border-stone-100 hover:border-muted-gold hover:shadow-md transition-all duration-500 ease-out flex flex-col h-full cursor-default relative overflow-hidden">
    <div className="mb-6 relative z-10">
      <span className="text-sm font-bold tracking-widest text-muted-gold uppercase border border-stone-100 px-4 py-2 rounded-full bg-stone-50 group-hover:bg-white group-hover:border-muted-gold/30 transition-colors duration-300">
        {label}
      </span>
    </div>
    <h3 className="font-serif text-3xl md:text-4xl text-ink-black mb-5 group-hover:text-deep-green transition-colors duration-300 relative z-10">
      {title}
    </h3>
    
    {score !== undefined && !isInteractive && (
      <div className="mb-6 p-5 bg-stone-50/50 rounded-sm border border-stone-100/50 group-hover:bg-white group-hover:border-stone-100 transition-colors relative z-10">
        <div className="flex justify-between items-end mb-3">
          <span className="text-sm font-bold text-stone-400 uppercase tracking-widest">Brand Health</span>
          <span className="font-serif text-xl font-bold text-deep-green leading-none">{score}/100</span>
        </div>
        <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-deep-green to-ink-black rounded-full transition-all duration-1000 ease-out group-hover:brightness-110" 
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    )}

    {!isInteractive && (
      <p className="text-ink-black/60 leading-relaxed text-lg flex-grow group-hover:text-ink-black/80 transition-colors duration-300 relative z-10">
        {description}
      </p>
    )}

    {isInteractive && (
      <div className="relative z-10 flex-grow flex flex-col">
         <p className="text-ink-black/60 leading-relaxed text-lg mb-4">
          Capture your brand story, voice, and collections. <span className="text-deep-green font-medium">Try the voice engine:</span>
         </p>
         <InteractiveVoiceDemo />
      </div>
    )}
  </div>
);

const FeatureGrid: React.FC = () => {
  const features: FeatureProps[] = [
    {
      label: "Knowledge Base",
      title: "Brand Brain & Health",
      description: "Capture your brand story, voice, collections, and product data in a structured knowledge base.",
      score: 94,
      isInteractive: true
    },
    {
      label: "Creation",
      title: "The Forge",
      description: "Generate long-form emails, launches, blogs, and product stories using your brand rules. Madison drafts, you refine together in the editor."
    },
    {
      label: "Scale",
      title: "Multiply System",
      description: "Turn one master piece into a full campaign: social posts, ad angles, product descriptions, and marketplace listings — ranked and recommended."
    },
    {
      label: "Assets",
      title: "Library (The Archives)",
      description: "A searchable archive for master content, derivatives, image prompts, and generated assets. Filter by product, collection, channel, or campaign."
    },
    {
      label: "Visuals",
      title: "Image Studio",
      description: "Generate campaign-ready visuals and product imagery with AI, using brand-aware prompts and templates. Organize shots into sessions and mark heroes."
    },
    {
      label: "Commerce",
      title: "Marketplace Tools",
      description: "Create Etsy, TikTok Shop, and Shopify listings directly from your product data and master content, complete with SEO-smart titles and tags."
    }
  ];

  return (
    <section id="features" className="py-32 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-ink-black mb-8">Your brand’s creative stack, in one studio.</h2>
          <p className="text-ink-black/60 text-2xl">No more switching between Google Docs, ChatGPT, and Dropbox.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;