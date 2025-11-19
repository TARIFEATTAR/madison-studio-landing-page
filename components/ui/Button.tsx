import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href,
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-green disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";
  
  const variants = {
    primary: "bg-deep-green text-white hover:bg-opacity-90 shadow-sm hover:shadow-md",
    secondary: "bg-muted-gold text-white hover:bg-opacity-90",
    outline: "border border-ink-black text-ink-black hover:bg-ink-black hover:text-white bg-transparent",
    ghost: "text-ink-black hover:bg-stone-200/50",
  };

  const sizes = {
    sm: "text-base px-5 py-2.5",
    md: "text-lg px-8 py-3.5",
    lg: "text-xl px-12 py-5",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;