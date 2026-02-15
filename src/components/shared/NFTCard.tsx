import React from 'react';
import { PriceTag } from './PriceTag';
import { RarityBadge } from './RarityBadge';

interface NFTCardProps {
  cover: string;
  title: string;
  artist: string;
  price: number;
  edition: number;
  totalEditions: number;
  rarity: 'common' | 'rare' | 'legendary';
}

export const NFTCard: React.FC<NFTCardProps> = ({ cover, title, artist, price, edition, totalEditions, rarity }) => {
  return (
    <div className="group relative glass-card p-3 hover:-translate-y-2 hover:shadow-glass-lg transition-all duration-500">
      <div className="relative aspect-square overflow-hidden rounded-2xl mb-4">
        <img src={cover} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
        
        {/* Rarity Badge */}
        <div className="absolute top-3 right-3">
          <RarityBadge rarity={rarity} />
        </div>
        
        {/* Song info on image */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-white truncate text-lg mb-0.5">{title}</h3>
          <p className="text-sm text-white/80 truncate">{artist}</p>
        </div>
      </div>
      
      <div className="px-1 pb-1 space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-text-dim uppercase tracking-wider">
            Edition #{edition} / {totalEditions}
          </div>
          <PriceTag price={price} />
        </div>

        <button className="w-full py-3 bg-secondary text-white text-sm font-bold rounded-xl hover:shadow-cta hover:scale-[1.02] active:scale-[0.98] transition-all">
          Collect Now
        </button>
      </div>
    </div>
  );
};
