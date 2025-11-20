import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up';
  delay?: string;
  duration?: string;
  threshold?: number;
  width?: 'full' | 'auto';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  animation = 'slide-up',
  delay = '0ms',
  duration = '0.8s',
  threshold = 0.15,
  width = 'full'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const visibilityClass = isVisible ? `animate-${animation}` : 'opacity-0';

  return (
    <div 
      ref={ref} 
      className={`${className} ${visibilityClass} ${width === 'full' ? 'w-full' : ''}`}
      style={{ 
        animationDelay: delay,
        animationDuration: duration,
        // Ensure the element doesn't block interaction before it appears (though opacity-0 usually handles visual)
        willChange: isVisible ? 'opacity, transform' : 'auto'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;