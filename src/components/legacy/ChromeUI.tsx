import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  glow?: boolean;
}

export const ChromeButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  glow = false,
  className = '', 
  ...props 
}) => {
  // Styles based on the .play-hex idea but adapted for buttons
  const baseStyle = "relative overflow-hidden font-medium transition-all duration-300 rounded-full flex items-center justify-center gap-2 px-6 py-3";
  
  const variants = {
    // White clean button with shadow
    primary: "bg-white text-gray-900 shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:scale-105 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-white/50",
    // Glassy secondary button
    secondary: "bg-white/30 border border-white/60 text-gray-700 hover:bg-white/50 hover:text-black backdrop-blur-sm",
    // Ghost
    ghost: "bg-transparent text-gray-500 hover:text-gray-900 hover:bg-white/20"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const LiquidCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`glass-panel rounded-[40px] p-6 relative group overflow-hidden ${className}`}>
        {/* Subtle internal gradient shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
    </div>
  );
};

export const Badge: React.FC<{ text: string; type?: 'rare' | 'common' | 'legendary' }> = ({ text, type = 'common' }) => {
    let colors = "bg-gray-100 text-gray-500 border-gray-200";
    if (type === 'rare') colors = "bg-blue-50 text-blue-600 border-blue-100";
    if (type === 'legendary') colors = "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100";
    
    return (
        <span className={`text-[10px] px-3 py-1 border ${colors} rounded-full uppercase tracking-wider font-semibold shadow-sm`}>
            {text}
        </span>
    );
};
