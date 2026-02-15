import React from 'react';
import { Play, DollarSign, Gem } from 'lucide-react';

interface SongCardProps {
  cover: string;
  title: string;
  artist: string;
  plays?: number;
  price?: number;
  isNFT?: boolean;
}

export const SongCard: React.FC<SongCardProps> = ({ cover, title, artist, plays, price, isNFT }) => {
  return (
    <div className="group relative w-40 md:w-48 flex-shrink-0 cursor-pointer transition-all duration-300 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-square rounded-3xl overflow-hidden mb-3 shadow-glass-sm group-hover:shadow-glow transition-all duration-500">
        <img 
          src={cover} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Glass Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
          <button className="glass-pill p-3 rounded-full hover:bg-white hover:text-primary-dark text-white transition-all transform hover:scale-110 active:scale-95 shadow-lg">
            <Play fill="currentColor" className="ml-1" size={24} />
          </button>
        </div>

        {/* NFT Price Tag */}
        {isNFT && price !== undefined && (
          <div className="absolute top-2 right-2">
            <div className="glass-pill px-2 py-1 flex items-center gap-1 bg-black/30 border-white/20 backdrop-blur-md">
               <Gem size={12} className="text-primary" />
               <span className="text-white text-xs font-bold">{price} ETH</span>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-1">
        <h3 className="font-bold text-text-main truncate text-base group-hover:text-primary-dark transition-colors">{title}</h3>
        <p className="text-sm text-text-muted truncate group-hover:text-text-main transition-colors">{artist}</p>
      </div>
    </div>
  );
};
