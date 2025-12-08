import React, { useState } from 'react';
import { Layers, Palette, Clock, FolderX, Check } from 'lucide-react';

interface PainPointCardProps {
    icon: React.ReactNode;
    solvedIcon: React.ReactNode;
    chaosColor: string;
    calmColor: string;
    title: string;
    problem: string;
    solution: string;
    delay: number;
}

const PainPointCard: React.FC<PainPointCardProps> = ({
    icon, solvedIcon, chaosColor, calmColor, title, problem, solution, delay
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative bg-parchment p-8 rounded-2xl border border-stone overflow-hidden cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Chaos background elements */}
            <div className={`absolute inset-0 transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                {/* Scattered lines */}
                <div className="absolute top-3 right-4 w-8 h-0.5 bg-stone rotate-12" />
                <div className="absolute top-8 right-8 w-6 h-0.5 bg-stone -rotate-6" />
                <div className="absolute bottom-12 right-6 w-10 h-0.5 bg-stone rotate-45" />
                <div className="absolute bottom-8 left-20 w-5 h-0.5 bg-stone -rotate-12" />
                {/* Scattered dots */}
                <div className="absolute top-16 right-12 w-1.5 h-1.5 bg-charcoal/20 rounded-full" />
                <div className="absolute bottom-20 right-16 w-1 h-1 bg-charcoal/20 rounded-full" />
                <div className="absolute top-20 left-28 w-1 h-1 bg-charcoal/20 rounded-full" />
            </div>

            {/* Calm background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${calmColor} transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

            {/* Content */}
            <div className="relative z-10">
                {/* Icon container with transform */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${isHovered
                        ? 'bg-sage/20 shadow-lg scale-110'
                        : `${chaosColor} rotate-3`
                    }`}>
                    <div className={`transition-all duration-500 ${isHovered ? 'scale-100 rotate-0' : 'scale-90 -rotate-3'}`}>
                        {isHovered ? solvedIcon : icon}
                    </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-medium mb-3 text-ink-black">
                    {title}
                </h3>

                {/* Description with crossfade */}
                <div className="relative min-h-[60px]">
                    <p className={`text-sm leading-relaxed transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                        } text-charcoal/70`}>
                        {problem}
                    </p>
                    <p className={`absolute top-0 left-0 text-sm leading-relaxed transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                        } text-sage font-medium`}>
                        {solution}
                    </p>
                </div>

                {/* Solved indicator */}
                <div className={`flex items-center gap-2 mt-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <div className="w-5 h-5 rounded-full bg-sage flex items-center justify-center">
                        <Check className="w-3 h-3 text-parchment" strokeWidth={3} />
                    </div>
                    <span className="text-xs font-semibold text-sage uppercase tracking-wider">Solved with Madison</span>
                </div>
            </div>

            {/* Border glow on hover */}
            <div className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${isHovered ? 'ring-2 ring-sage/30 shadow-xl shadow-sage/10' : 'ring-0'
                }`} />
        </div>
    );
};

const PainPoints: React.FC = () => {
    const painPoints = [
        {
            icon: <Layers className="w-6 h-6 text-rust" />,
            solvedIcon: <Layers className="w-6 h-6 text-sage" />,
            chaosColor: 'bg-rust/10',
            calmColor: 'from-sage/10 to-parchment',
            title: 'Brand Chaos',
            problem: 'Content scattered across docs, email drafts, and random chat threads. No single source of truth.',
            solution: 'One unified brand system. Every asset, guideline, and piece of content in one place.',
        },
        {
            icon: <Palette className="w-6 h-6 text-amber" />,
            solvedIcon: <Palette className="w-6 h-6 text-sage" />,
            chaosColor: 'bg-amber/10',
            calmColor: 'from-sage/10 to-parchment',
            title: 'Inconsistent Voice',
            problem: 'Every new writer "reinvents" your brand voice. Generic AI makes it worse.',
            solution: 'Madison learns your voice once. Every output sounds authentically you.',
        },
        {
            icon: <Clock className="w-6 h-6 text-brass" />,
            solvedIcon: <Clock className="w-6 h-6 text-sage" />,
            chaosColor: 'bg-brass/10',
            calmColor: 'from-sage/10 to-parchment',
            title: 'Time Drain',
            problem: 'Spending 10+ hours a week reformatting the same content for different channels.',
            solution: 'Create once, multiply everywhere. One piece becomes ten in seconds.',
        },
        {
            icon: <FolderX className="w-6 h-6 text-charcoal" />,
            solvedIcon: <FolderX className="w-6 h-6 text-sage" />,
            chaosColor: 'bg-charcoal/10',
            calmColor: 'from-sage/10 to-parchment',
            title: 'Lost Assets',
            problem: 'Great photos and copy buried in email threads, never to be reused or found.',
            solution: 'Smart library with instant search. Every asset tagged and ready to deploy.',
        },
    ];

    return (
        <section className="py-24 bg-vellum relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-32 h-32 border border-stone rounded-full" />
                <div className="absolute bottom-20 right-20 w-24 h-24 border border-stone rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-xs font-bold text-brass uppercase tracking-widest mb-4">Sound familiar?</p>
                    <h2 className="font-serif text-3xl lg:text-5xl font-medium text-ink-black mb-4 tracking-tight">
                        The challenges you face every day
                    </h2>
                    <p className="text-charcoal/70 text-lg">
                        Hover to see how Madison solves each one.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {painPoints.map((point, index) => (
                        <PainPointCard
                            key={point.title}
                            icon={point.icon}
                            solvedIcon={point.solvedIcon}
                            chaosColor={point.chaosColor}
                            calmColor={point.calmColor}
                            title={point.title}
                            problem={point.problem}
                            solution={point.solution}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
