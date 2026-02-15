import React from 'react';
import { BadgeCheck } from 'lucide-react';

interface ArtistCardProps {
  avatar: string;
  name: string;
  followers: number;
  verified?: boolean;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ avatar, name, followers, verified }) => {
  return (
    <div className="flex flex-col items-center group cursor-pointer w-[120px] flex-shrink-0">
      <div className="relative w-24 h-24 mb-3">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
        <img 
          src={avatar} 
          alt={name} 
          className="relative w-full h-full rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300 border-2 border-white/50" 
        />
      </div>
      <div className="flex items-center gap-1 mb-1">
        <h3 className="font-bold text-text-main text-center truncate max-w-full text-sm group-hover:text-primary-dark transition-colors">{name}</h3>
        {verified && <BadgeCheck size={14} className="text-secondary flex-shrink-0" />}
      </div>
      <p className="text-xs text-text-muted font-medium">{followers.toLocaleString()} fans</p>
    </div>
  );
};
