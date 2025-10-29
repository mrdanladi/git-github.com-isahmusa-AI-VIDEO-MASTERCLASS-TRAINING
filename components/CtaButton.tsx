
import React from 'react';

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'md' | 'lg';
}

const CtaButton: React.FC<CtaButtonProps> = ({ children, className, size = 'md', ...props }) => {
  const sizeClasses = size === 'lg' ? 'py-4 px-8 text-lg' : 'py-3 px-6 text-base';

  return (
    <button
      className={`
        ${sizeClasses}
        font-bold text-white rounded-full 
        bg-gradient-to-r from-electric-blue to-gold-accent
        hover:scale-105 hover:shadow-xl hover:shadow-electric-blue/30
        transition-all duration-300 transform
        focus:outline-none focus:ring-4 focus:ring-blue-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default CtaButton;
