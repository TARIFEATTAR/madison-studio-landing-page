import React from 'react';

const ProblemSection: React.FC = () => {
    return (
        <section className="py-24 lg:py-32 bg-ink-black text-parchment relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(184,149,106,0.3),_transparent_50%)]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,_rgba(184,149,106,0.2),_transparent_50%)]" />
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <p className="text-xs font-bold text-brass uppercase tracking-widest mb-6">The Problem</p>

                    <h2 className="font-serif text-4xl lg:text-5xl font-medium mb-8 leading-tight">
                        Content Creation Shouldn't Feel Like Groundhog Day
                    </h2>

                    <div className="text-lg lg:text-xl text-stone leading-relaxed space-y-6 max-w-3xl mx-auto">
                        <p>
                            You write a great blog post. Then you rewrite it for Instagram. Then again for email. Then LinkedIn. Then Twitter. By the time you're done, you've spent hours saying the same thing six different ways.
                        </p>

                        <p>
                            Meanwhile, your brand voice gets diluted, your team gets burned out, and your content calendar stays perpetually behind.
                        </p>

                        <p className="font-accent italic text-2xl text-parchment pt-4">
                            There's a better way.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
