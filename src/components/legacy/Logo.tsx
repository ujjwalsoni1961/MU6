import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logoGradient" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3b82f6" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="url(#logoGradient)" opacity="0.15" />
    <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 8.5L15.5 12L9.5 15.5V8.5Z" fill="url(#logoGradient)" stroke="url(#logoGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
