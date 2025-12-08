import React from 'react';
import { Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
    const testimonials = [
        {
            quote: "Madison cut our content creation time by 70%. But more importantly, everything actually sounds like us now.",
            name: "Sarah Chen",
            title: "Founder",
            company: "Maison Rose Parfums",
        },
        {
            quote: "We went from publishing twice a month to twice a week. Same team, same budget, completely different results.",
            name: "Michael Torres",
            title: "Marketing Director",
            company: "Artisan Home Co.",
        },
        {
            quote: "Finally, AI that makes our brand voice stronger instead of diluting it. Game changer for our agency.",
            name: "Emily Park",
            title: "Creative Director",
            company: "Bloom Creative Studio",
        },
    ];

    return (
        <section className="py-24 lg:py-32 bg-ink-black text-parchment relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(184,149,106,0.3),_transparent_50%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs font-bold text-brass uppercase tracking-widest mb-4">Social Proof</p>
                    <h2 className="font-serif text-4xl lg:text-5xl font-medium tracking-tight">
                        Brands That Sound Like Themselves
                    </h2>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-charcoal/50 p-8 rounded-2xl border border-charcoal hover:border-brass/30 transition-all"
                        >
                            {/* Quote icon */}
                            <Quote className="w-8 h-8 text-brass mb-6" strokeWidth={1} />

                            {/* Quote text */}
                            <p className="font-accent italic text-lg text-stone leading-relaxed mb-8">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brass/20" />
                                <div>
                                    <p className="font-semibold text-parchment">{testimonial.name}</p>
                                    <p className="text-sm text-stone">{testimonial.title}, {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
