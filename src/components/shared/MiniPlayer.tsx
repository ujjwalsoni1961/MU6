import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart, Volume2, Maximize2, ChevronUp } from 'lucide-react';

interface MiniPlayerProps {
  title: string;
  artist: string;
  cover: string;
  onExpand?: () => void;
}

export const MiniPlayer: React.FC<MiniPlayerProps> = ({ title, artist, cover, onExpand }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(33);
  const [volume, setVolume] = useState(70);

  // Simulate progress
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 0.5));
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div className="glass-pill backdrop-blur-2xl bg-white/80 border border-white/60 p-3 pr-6 flex items-center justify-between shadow-glass-lg hover:shadow-glow hover:bg-white/90 transition-all duration-500 ease-out group/player">
        
        {/* Track Info */}
        <div className="flex items-center gap-4 min-w-[240px] flex-1 md:flex-none cursor-pointer" onClick={onExpand}>
          <div className="relative group">
            <img 
              src={cover} 
              alt={title} 
              className={`w-14 h-14 rounded-xl object-cover shadow-md border border-white/50 ${isPlaying ? '' : ''}`}
            />
            <div className="absolute inset-0 bg-black/40 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <ChevronUp size={20} className="text-white" />
            </div>
          </div>
          <div className="overflow-hidden">
            <h4 className="text-sm font-bold text-gray-900 truncate hover:text-primary-dark transition-colors">{title}</h4>
            <p className="text-xs text-text-muted truncate hover:text-text-main transition-colors">{artist}</p>
          </div>
          <button className="ml-2 text-gray-400 hover:text-secondary transition-colors md:hidden">
            <Heart size={18} />
          </button>
        </div>

        {/* Controls (Centered) */}
        <div className="flex flex-col items-center flex-1 max-w-md px-6 hidden md:flex">
          <div className="flex items-center gap-6 mb-1.5">
            <button className="text-gray-400 hover:text-gray-900 transition-colors hover:scale-110 active:scale-95">
              <SkipBack size={20} fill="currentColor" className="opacity-0 group-hover/player:opacity-100 transition-opacity" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
              className="bg-gray-900 text-white p-2 rounded-full hover:scale-110 hover:shadow-lg transition-all active:scale-95 shadow-md"
            >
              {isPlaying ? (
                <Pause size={18} fill="currentColor" />
              ) : (
                <Play size={18} fill="currentColor" className="ml-0.5" />
              )}
            </button>
            
            <button className="text-gray-400 hover:text-gray-900 transition-colors hover:scale-110 active:scale-95">
              <SkipForward size={20} fill="currentColor" className="opacity-0 group-hover/player:opacity-100 transition-opacity" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full flex items-center gap-3 group/progress cursor-pointer" onClick={onExpand}>
            <span className="text-[10px] text-gray-400 font-mono tabular-nums">1:24</span>
            <div className="flex-1 h-1 bg-gray-200/80 rounded-full overflow-hidden relative">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                style={{ width: `${progress}%` }}
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border border-gray-100 rounded-full shadow-sm opacity-0 group-hover/progress:opacity-100 transition-opacity"
                style={{ left: `${progress}%` }}
              />
            </div>
            <span className="text-[10px] text-gray-400 font-mono tabular-nums">3:45</span>
          </div>
        </div>

        {/* Right Controls (Volume & Expand) */}
        <div className="flex items-center gap-5 min-w-[140px] justify-end hidden md:flex">
          <button className="text-gray-400 hover:text-secondary transition-colors hover:scale-110">
            <Heart size={20} />
          </button>
          
          <div className="flex items-center gap-2 group/volume w-24">
            <Volume2 size={18} className="text-gray-400 group-hover/volume:text-gray-600 transition-colors" />
            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden cursor-pointer">
              <div 
                className="h-full bg-gray-400 group-hover/volume:bg-primary transition-colors rounded-full"
                style={{ width: `${volume}%` }}
              />
            </div>
          </div>
          
          <div className="h-8 w-px bg-gray-200 mx-1" />

          <button 
            onClick={onExpand}
            className="p-2 rounded-full hover:bg-black/5 text-gray-500 hover:text-gray-900 transition-colors"
            title="Expand Player"
          >
            <ChevronUp size={20} />
          </button>
        </div>

        {/* Mobile Play Button (Absolute Right) */}
        <div className="md:hidden flex items-center gap-3">
           <button 
              onClick={(e) => { e.stopPropagation(); setIsPlaying(!isPlaying); }}
              className="bg-gray-900 text-white p-2.5 rounded-full shadow-md"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
            </button>
        </div>
      </div>
    </div>
  );
};
