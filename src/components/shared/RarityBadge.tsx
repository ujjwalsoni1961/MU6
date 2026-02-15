import React from 'react';

interface RarityBadgeProps {
  rarity: 'common' | 'rare' | 'legendary';
}

export const RarityBadge: React.FC<RarityBadgeProps> = ({ rarity }) => {
  const colors = {
    common: 'bg-green-500/10 text-green-700 border-green-500/20',
    rare: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
    legendary: 'bg-secondary/10 text-secondary border-secondary/20'
  };

  return (
    <span className={`
      px-2.5 py-1 rounded-lg text-[10px] uppercase tracking-wider font-bold border backdrop-blur-sm shadow-sm
      ${colors[rarity]}
    `}>
      {rarity}
    </span>
  );
};
