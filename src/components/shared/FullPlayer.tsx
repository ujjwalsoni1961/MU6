import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, Repeat, Shuffle, Minimize2, Volume2, Share2, MoreHorizontal } from 'lucide-react';
import { PriceTag } from './PriceTag';

interface FullPlayerProps {
  onClose: () => void;
  title: string;
  artist: string;
  cover: string;
  isNFT?: boolean;
  price?: number;
}

export const FullPlayer: React.FC<FullPlayerProps> = ({ onClose, title, artist, cover, isNFT, price }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [progress, setProgress] = useState(33);

  return (
    <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center p-6 backdrop-blur-3xl bg-white/90 animate-in fade-in zoom-in duration-300">
      {/* Dynamic Background Glows */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      {/* Header / Minimize */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
        <div className="text-xs font-bold tracking-widest text-text-muted uppercase">Now Playing</div>
        <button 
          onClick={onClose} 
          className="p-3 rounded-full bg-white/40 border border-white/50 hover:bg-white text-gray-900 transition-all shadow-sm hover:shadow-md group"
          title="Minimize Player"
        >
          <Minimize2 size={20} className="group-hover:scale-90 transition-transform" />
        </button>
      </div>

      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 max-w-7xl mx-auto overflow-y-auto lg:overflow-visible scrollbar-hide py-12">
        
        {/* Left Side: Artwork */}
        <div className="w-full max-w-md lg:max-w-xl flex-shrink-0 relative group perspective-1000">
          <div className="aspect-square rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-glass-lg ring-1 ring-white/50 relative transform transition-transform duration-500 hover:rotate-y-2 hover:scale-[1.01]">
            <img src={cover} alt={title} className="w-full h-full object-cover" />
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
            
            {isNFT && price && (
              <div className="absolute top-6 right-6">
                <PriceTag price={price} />
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Info & Controls */}
        <div className="w-full max-w-lg flex flex-col justify-center gap-10">
          
          {/* Metadata */}
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">{title}</h2>
              <p className="text-xl lg:text-2xl text-text-dim font-medium hover:underline cursor-pointer">{artist}</p>
            </div>
            <button className="p-3 rounded-full hover:bg-black/5 text-text-muted hover:text-secondary transition-colors">
              <Heart size={28} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2 group">
            <div className="relative w-full h-2 bg-gray-200/80 rounded-full overflow-hidden cursor-pointer">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full" 
                style={{ width: `${progress}%` }}
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs font-bold text-text-muted font-mono">
              <span>1:24</span>
              <span>3:45</span>
            </div>
          </div>

          {/* Main Controls */}
          <div className="flex items-center justify-between">
            <button className="text-text-muted hover:text-text-main transition-colors p-2 hover:bg-black/5 rounded-full"><Shuffle size={24} /></button>
            <button className="text-text-main hover:scale-110 transition-transform p-2"><SkipBack size={36} fill="currentColor" /></button>
            
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-gray-900 text-white p-7 rounded-full shadow-2xl hover:scale-105 hover:shadow-primary/30 transition-all active:scale-95"
            >
              {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} fill="currentColor" className="ml-1" />}
            </button>
            
            <button className="text-text-main hover:scale-110 transition-transform p-2"><SkipForward size={36} fill="currentColor" /></button>
            <button className="text-text-muted hover:text-text-main transition-colors p-2 hover:bg-black/5 rounded-full"><Repeat size={24} /></button>
          </div>

          {/* Bottom Actions & Volume */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
               <button className="p-3 rounded-xl hover:bg-black/5 text-text-muted hover:text-text-main transition-colors"><Share2 size={20} /></button>
               <button className="p-3 rounded-xl hover:bg-black/5 text-text-muted hover:text-text-main transition-colors"><MoreHorizontal size={20} /></button>
            </div>

            <div className="flex items-center gap-3 group">
              <Volume2 size={20} className="text-text-muted" />
              <div className="w-24 h-1.5 bg-gray-200 rounded-full overflow-hidden cursor-pointer relative">
                <div 
                  className="h-full bg-text-muted group-hover:bg-primary transition-colors rounded-full" 
                  style={{ width: `${volume}%` }}
                />
              </div>
            </div>
          </div>

          {/* NFT Action */}
          {isNFT && (
             <div className="mt-4">
               <button className="w-full py-4 rounded-2xl bg-secondary/10 border border-secondary/20 text-secondary font-bold text-lg shadow-sm hover:bg-secondary/20 hover:shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2">
                 Collect this Drop
               </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};
