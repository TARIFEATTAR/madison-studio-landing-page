import React, { useState, useEffect, useRef } from 'react';
import { Wand2, Instagram, Mail, Video, FileText } from 'lucide-react';

const Showstopper: React.FC = () => {
    const [typedText, setTypedText] = useState('');
    const [showButton, setShowButton] = useState(false);
    const [activeCards, setActiveCards] = useState<number[]>([]);
    const sectionRef = useRef<HTMLElement>(null);
    const hasAnimated = useRef(false);

    const demoText = "Introducing our new Spring Collection — handcrafted pieces that blend timeless elegance with modern sensibility.";

    const outputChannels = [
        { icon: Instagram, color: 'text-brass', label: 'Instagram' },
        { icon: Mail, color: 'text-brass', label: 'Email' },
        { icon: FileText, color: 'text-brass', label: 'Blog Post' },
        { icon: Video, color: 'text-brass', label: 'Video Script' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    runAnimation();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const runAnimation = () => {
        setTypedText('');
        setShowButton(false);
        setActiveCards([]);

        let charIndex = 0;
        const typeInterval = setInterval(() => {
            if (charIndex < demoText.length) {
                setTypedText(demoText.slice(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setShowButton(true);
                    setTimeout(() => {
                        outputChannels.forEach((_, index) => {
                            setTimeout(() => {
                                setActiveCards(prev => [...prev, index]);
                            }, index * 300);
                        });
                    }, 800);
                }, 500);
            }
        }, 30);
    };

    return (
        <section ref={sectionRef} id="how-it-works" className="py-32 overflow-hidden bg-ink-black text-parchment relative">
            {/* Background blurs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brass rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-6 tracking-tight">
                        Create Once. Publish Everywhere.
                    </h2>
                    <p className="text-stone text-lg max-w-2xl mx-auto">
                        Watch how Madison Studio transforms a single piece of content into a multi-channel campaign instantly.
                    </p>
                </div>

                {/* Interactive Demo */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    {/* Left: Editor */}
                    <div className="lg:col-span-5">
                        <div className="bg-parchment rounded-xl shadow-2xl overflow-hidden border border-stone">
                            {/* Toolbar */}
                            <div className="bg-vellum border-b border-stone p-3 flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-rust" />
                                <div className="w-3 h-3 rounded-full bg-amber" />
                                <div className="w-3 h-3 rounded-full bg-sage" />
                            </div>
                            {/* Editor Body */}
                            <div className="p-8 min-h-[280px] bg-parchment text-ink-black relative">
                                <div className="font-serif text-2xl mb-4 text-ink-black">Spring Collection Launch</div>
                                <div className="text-charcoal/80 font-sans text-sm leading-relaxed">
                                    {typedText}
                                    <span className="inline-block w-0.5 h-4 bg-brass ml-1 animate-pulse" />
                                </div>

                                {/* AI Button */}
                                <div
                                    className={`absolute bottom-6 right-6 transition-all duration-500 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                        }`}
                                >
                                    <button className="bg-brass hover:bg-brass/90 text-parchment px-4 py-2 rounded-lg text-sm font-medium shadow-lg flex items-center gap-2">
                                        <Wand2 className="w-4 h-4" />
                                        Adapt & Publish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle: Magic */}
                    <div className="lg:col-span-2 flex flex-col items-center justify-center gap-4 h-32 lg:h-auto">
                        <div className="hidden lg:block w-0.5 h-32 bg-charcoal relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/3 bg-brass animate-pulse" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-charcoal border border-stone flex items-center justify-center z-10">
                            <Wand2 className="w-5 h-5 text-brass animate-pulse" />
                        </div>
                    </div>

                    {/* Right: Output Channels */}
                    <div className="lg:col-span-5">
                        <div className="grid grid-cols-2 gap-4">
                            {outputChannels.map((channel, index) => {
                                const Icon = channel.icon;
                                const isActive = activeCards.includes(index);
                                return (
                                    <div
                                        key={channel.label}
                                        className={`p-4 rounded-lg bg-charcoal border transition-all duration-500 flex flex-col gap-2 ${isActive
                                                ? 'border-sage opacity-100 scale-100'
                                                : 'border-charcoal opacity-30 scale-95'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <Icon className={`w-4 h-4 ${channel.color}`} />
                                            <div className={`w-2 h-2 rounded-full transition-colors ${isActive ? 'bg-sage shadow-[0_0_10px_rgba(139,148,116,0.5)]' : 'bg-ink-black'
                                                }`} />
                                        </div>
                                        <div className="h-2 w-3/4 bg-ink-black rounded" />
                                        <div className="h-2 w-1/2 bg-ink-black rounded" />
                                        {index % 2 === 0 && <div className="h-16 bg-ink-black/50 rounded mt-1" />}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showstopper;
