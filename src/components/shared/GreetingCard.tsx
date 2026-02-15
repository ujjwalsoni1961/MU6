import React from 'react';

interface GreetingCardProps {
  cover: string;
  title: string;
}

export const GreetingCard: React.FC<GreetingCardProps> = ({ cover, title }) => {
  return (
    <div className="flex items-center bg-white/40 border border-white/50 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer group hover:bg-white/60 transition-all shadow-sm">
      <img src={cover} alt={title} className="w-16 h-16 object-cover" />
      <h3 className="flex-1 px-4 font-bold text-sm text-text-main group-hover:text-primary-dark transition-colors">{title}</h3>
    </div>
  );
};
