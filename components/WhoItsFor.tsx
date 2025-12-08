import React from 'react';
import { ShoppingBag, Users, Shield, Building2 } from 'lucide-react';

const WhoItsFor: React.FC = () => {
    const audiences = [
        {
            icon: <ShoppingBag className="w-6 h-6" strokeWidth={1} />,
            title: 'E-Commerce Founders',
            description: 'Create product stories, email campaigns, and social content without hiring a full marketing team.',
        },
        {
            icon: <Users className="w-6 h-6" strokeWidth={1} />,
            title: 'Content Teams',
            description: 'Multiply your output without multiplying your headcount. One writer becomes ten.',
        },
        {
            icon: <Shield className="w-6 h-6" strokeWidth={1} />,
            title: 'Brand Managers',
            description: 'Finally, AI that enforces brand guidelines instead of ignoring them.',
        },
        {
            icon: <Building2 className="w-6 h-6" strokeWidth={1} />,
            title: 'Marketing Agencies',
            description: 'Manage multiple client voices from one platform. Scale without sacrificing quality.',
        },
    ];

    return (
        <section className="py-24 lg:py-32 bg-parchment relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-xs font-bold text-brass uppercase tracking-widest mb-4">Who It's For</p>
                    <h2 className="font-serif text-4xl lg:text-5xl font-medium text-ink-black tracking-tight">
                        Built for Brands Who Care About Their Voice
                    </h2>
                </div>

                {/* Audience Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {audiences.map((audience) => (
                        <div
                            key={audience.title}
                            className="bg-vellum p-8 rounded-2xl border border-stone hover:border-brass/30 hover:shadow-lg transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-brass/10 text-brass flex items-center justify-center mb-6 group-hover:bg-brass group-hover:text-parchment transition-colors">
                                {audience.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-xl font-medium text-ink-black mb-3">
                                {audience.title}
                            </h3>

                            {/* Description */}
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                {audience.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhoItsFor;
