import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './ui/Button';
import { Check, Building2, Users, Zap, Sparkles, Star, Plus } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Calculations for yearly billing (10x monthly price effectively giving 2 months free)
  const tiers = [
    {
      name: "Atelier",
      description: "For independent creators and boutique brands establishing their voice.",
      prices: {
        monthly: "$49",
        yearly: "$470"
      },
      period: {
        monthly: "/mo",
        yearly: "/yr"
      },
      features: [
        "50 master content pieces",
        "200 derivatives",
        "1 organization / 25 products",
        "25 images / 500 Madison queries",
        "1 team member",
        "Email support (48h SLA)"
      ],
      cta: "Enter the Atelier",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Studio",
      description: "For growing brands demanding scale, speed, and consistency.",
      prices: {
        monthly: "$199",
        yearly: "$1,990"
      },
      period: {
        monthly: "/mo",
        yearly: "/yr"
      },
      features: [
        "Unlimited master content",
        "1,000 derivatives",
        "3 organizations / 100 products",
        "100 images / 2,000 Madison queries",
        "5 team members",
        "Marketplace integrations enabled",
        "Priority email support (24h)",
        "White-label available as add‑on"
      ],
      cta: "Upgrade to Studio",
      variant: "primary" as const,
      popular: true,
      highlight: "Most Popular"
    },
    {
      name: "Maison",
      description: "For creative agencies and brand holdings requiring maximum power.",
      prices: {
        monthly: "$599",
        yearly: "$5,990"
      },
      period: {
        monthly: "/mo",
        yearly: "/yr"
      },
      features: [
        "Unlimited master content",
        "Unlimited derivatives",
        "Unlimited organizations, products",
        "500 images / 10,000 Madison queries",
        "Unlimited team members",
        "Marketplace + API access + white-label included",
        "Phone/Slack support (4h SLA)"
      ],
      cta: "Contact Sales",
      variant: "secondary" as const,
      popular: false
    }
  ];

  const addOns = [
    {
      name: "White-label for Studio",
      price: "$199/mo",
      desc: "Remove Madison branding from the interface.",
      icon: Building2
    },
    {
      name: "Extra image credits",
      price: "From $25/mo",
      desc: "50 for $25, 100 for $45, or 500 for $175.",
      icon: Sparkles
    },
    {
      name: "Additional brand slot",
      price: "$50/mo",
      desc: "Add another organization workspace. (Studio)",
      icon: Zap
    },
    {
      name: "Additional 5 team members",
      price: "$50/mo",
      desc: "Expand your team capacity. (Studio)",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink-black bg-warm-white selection:bg-muted-gold selection:text-white animate-fade-in">
      <Header />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Membership</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-ink-black mb-6">
              Invest in your brand's <br /> <span className="italic text-muted-gold">operating system.</span>
            </h1>
            <p className="text-xl text-ink-black/60 font-light">
              Stop paying per-seat for disjointed tools. Madison unifies your creative stack.
            </p>

            {/* Toggle */}
            <div className="mt-10 inline-flex bg-stone-200/50 p-1 rounded-full border border-stone-200 relative">
              <div className="flex items-center relative z-10">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'monthly' ? 'text-deep-green' : 'text-stone-500 hover:text-stone-700'
                    }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${billingCycle === 'yearly' ? 'text-deep-green' : 'text-stone-500 hover:text-stone-700'
                    }`}
                >
                  Yearly
                </button>
              </div>
              {/* Active Background Slider */}
              <div
                className={`absolute top-1 bottom-1 w-[50%] bg-white rounded-full shadow-sm transition-all duration-300 ease-out ${billingCycle === 'monthly' ? 'left-1' : 'left-[49%]'
                  }`}
              ></div>
            </div>

            {/* Savings Text */}
            <div className={`mt-3 text-xs font-bold text-deep-green uppercase tracking-widest transition-opacity duration-300 ${billingCycle === 'yearly' ? 'opacity-100' : 'opacity-0'}`}>
              2 Months Free included
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-24">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative p-8 md:p-10 rounded-sm transition-all duration-500 border flex flex-col h-full group ${tier.popular
                    ? 'bg-white border-muted-gold shadow-xl scale-100 lg:scale-105 z-10 ring-1 ring-muted-gold/20'
                    : 'bg-stone-50 border-stone-200 hover:border-stone-300 hover:bg-white hover:shadow-lg'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-muted-gold text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm flex items-center gap-1">
                    <Star size={10} fill="currentColor" /> {tier.highlight}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-serif text-3xl text-ink-black mb-3">{tier.name}</h3>
                  <p className="text-ink-black/60 text-sm min-h-[40px] leading-relaxed">{tier.description}</p>
                </div>

                <div className="mb-8 pb-8 border-b border-stone-100">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-5xl text-ink-black font-medium">
                      {billingCycle === 'monthly' ? tier.prices.monthly : tier.prices.yearly}
                    </span>
                    <span className="text-stone-400 font-medium">
                      {billingCycle === 'monthly' ? tier.period.monthly : tier.period.yearly}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-ink-black/80 leading-tight">
                      <div className={`mt-0.5 flex-shrink-0 p-0.5 rounded-full ${tier.popular ? 'bg-deep-green/10 text-deep-green' : 'bg-stone-200 text-stone-500'}`}>
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span dangerouslySetInnerHTML={{ __html: feature.replace(/Unlimited/g, '<strong class="text-deep-green font-bold">Unlimited</strong>') }}></span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.variant}
                  className="w-full justify-center"
                  href="https://cal.com/team/madison-studio/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-ink-black mb-4">Add-ons</h2>
              <p className="text-ink-black/60 text-lg font-light">Scale your capacity with modular add-ons as you grow.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon, i) => (
                <div key={i} className="bg-white p-6 md:p-8 rounded-sm border border-stone-200 flex items-start gap-5 hover:border-muted-gold transition-colors hover:shadow-md group">
                  <div className="p-3 bg-stone-50 rounded-sm text-stone-400 group-hover:text-deep-green group-hover:bg-deep-green/5 transition-colors">
                    <Plus size={20} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
                      <h4 className="font-serif text-xl text-ink-black font-medium">{addon.name}</h4>
                      <span className="text-xs font-bold text-deep-green bg-stone-100 px-2 py-1 rounded-sm border border-stone-200">{addon.price}</span>
                    </div>
                    <p className="text-sm text-ink-black/60 leading-relaxed">{addon.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Strip */}
          <div className="mt-24 pt-16 border-t border-stone-200 text-center">
            <p className="text-sm font-bold tracking-widest text-stone-400 uppercase mb-8">Trusted by modern brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-stone-300 grayscale opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2"><Building2 size={24} /><span className="font-serif font-bold text-xl">VOGUE</span></div>
              <div className="flex items-center gap-2"><Users size={24} /><span className="font-serif font-bold text-xl">GLOSSIER</span></div>
              <div className="flex items-center gap-2"><Zap size={24} /><span className="font-serif font-bold text-xl">AESOP</span></div>
              <div className="flex items-center gap-2"><Sparkles size={24} /><span className="font-serif font-bold text-xl">BYREDO</span></div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;