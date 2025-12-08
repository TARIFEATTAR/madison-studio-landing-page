import React, { useEffect, useRef, useState } from 'react';
import { PenTool, GitBranch, Camera, Film, Archive } from 'lucide-react';

interface FeatureBlockProps {
    icon: React.ReactNode;
    label: string;
    title: string;
    description: string;
    highlight: string;
    image?: string;
    index: number;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ icon, label, title, description, highlight, image, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* Label with thin icon */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brass/10 text-brass text-xs font-bold uppercase tracking-widest mb-6">
                    {icon}
                    <span>{label}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl lg:text-4xl font-medium text-ink-black mb-6 leading-tight">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-lg text-charcoal/80 leading-relaxed mb-4">
                    {description}
                </p>

                {/* Highlight */}
                <p className="font-accent italic text-lg text-charcoal">
                    {highlight}
                </p>
            </div>

            {/* Visual */}
            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {image ? (
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-stone shadow-lg relative group">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Cream overlay for consistency with hero */}
                        <div className="absolute inset-0 bg-gradient-to-t from-vellum/40 via-transparent to-vellum/20 pointer-events-none" />
                    </div>
                ) : (
                    <div className="aspect-[4/3] bg-vellum border border-stone rounded-2xl flex items-center justify-center">
                        <div className="text-brass opacity-30">
                            {React.cloneElement(icon as React.ReactElement, { className: 'w-24 h-24', strokeWidth: 1 })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const FeaturesSection: React.FC = () => {
    // Lucide icons with strokeWidth={1} for thin, elegant look
    const features = [
        {
            icon: <PenTool className="w-4 h-4" strokeWidth={1} />,
            label: 'Create',
            title: 'Start With a Single Spark',
            description: 'Write one master piece—a blog post, email, or product story—with Madison, your AI editorial director. She drafts, you refine. Edit every word in our beautiful editor. You\'re always in control of the final output.',
            highlight: 'No more staring at blank pages. No more generic AI slop.',
            image: '/images/feature-create.jpg',
        },
        {
            icon: <GitBranch className="w-4 h-4" strokeWidth={1} />,
            label: 'Multiply',
            title: 'Repurpose Without the Repetition',
            description: 'One click transforms your master content into platform-perfect versions for Instagram, Twitter, LinkedIn, Email, SMS, TikTok, and more. Each adaptation respects the platform\'s tone and format—while keeping your voice intact. Edit any derivative before publishing.',
            highlight: '10+ pieces of content from one idea. In minutes, not hours.',
            image: '/images/feature-multiply.jpg',
        },
        {
            icon: <Camera className="w-4 h-4" strokeWidth={1} />,
            label: 'Image Studio',
            title: 'Generate Visuals That Match Your Words',
            description: 'Create stunning, on-brand imagery with AI. Upload your product, describe your vision, and watch professional-quality photos appear. Control the camera angle, lighting, and style—or let Madison handle it.',
            highlight: 'No photographer required. No stock photo compromises.',
            image: '/images/feature-image-studio.jpg',
        },
        {
            icon: <Film className="w-4 h-4" strokeWidth={1} />,
            label: 'Video',
            title: 'Bring Your Content to Life',
            description: 'Transform any image into eye-catching video. Perfect for Reels, TikTok, product teasers, and email animations. Just describe the motion, and Madison makes it move.',
            highlight: 'Static posts are forgettable. Motion stops the scroll.',
            image: '/images/feature-video.jpg',
        },
        {
            icon: <Archive className="w-4 h-4" strokeWidth={1} />,
            label: 'The Archives',
            title: 'Never Lose Another Piece of Content',
            description: 'Unlike scattered ChatGPT conversations or lost Claude threads, everything you create in Madison lives in The Archives—searchable, organized, and ready to repurpose. Filter by product, campaign, or channel. Find anything in seconds.',
            highlight: 'Your complete content ecosystem. Always at your fingertips.',
            image: '/images/feature-archives.jpg',
        },
    ];

    return (
        <section className="py-24 lg:py-32 bg-parchment relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
                    <p className="text-xs font-bold text-brass uppercase tracking-widest mb-4">The Solution</p>
                    <h2 className="font-serif text-4xl lg:text-5xl font-medium text-ink-black mb-6 tracking-tight">
                        One Idea. Infinite Possibilities.
                    </h2>
                </div>

                {/* Feature Blocks */}
                <div className="space-y-24 lg:space-y-32">
                    {features.map((feature, index) => (
                        <FeatureBlock
                            key={feature.label}
                            icon={feature.icon}
                            label={feature.label}
                            title={feature.title}
                            description={feature.description}
                            highlight={feature.highlight}
                            image={feature.image}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
