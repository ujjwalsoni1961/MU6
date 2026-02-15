import React, { useState, useEffect } from 'react';
import { Track } from '../../types';
import { Play, Pause, SkipForward, SkipBack, Volume2, Maximize2, Minimize2, Repeat, Shuffle, Mic2 } from 'lucide-react';
import { ChromeButton } from './ChromeUI';

interface PlayerProps {
  currentTrack: Track | null;
  isPlaying: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Player: React.FC<PlayerProps> = ({ currentTrack, isPlaying, onPlayPause, onNext, onPrev }) => {
  const [progress, setProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [volume, setVolume] = useState(80);

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!currentTrack) return null;

  const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

  // Full Screen Overlay
  if (isFullScreen) {
      return (
          <div className="fixed inset-0 z-50 bg-gray-100/90 backdrop-blur-3xl flex flex-col animate-fade-in overflow-hidden">
              {/* Background Caustics for Full Player */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-400/20 blur-[120px] rounded-full animate-pulse pointer-events-none" />
              
              <div className="flex-1 flex flex-col items-center justify-center p-8 relative z-10">
                  <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Album Art */}
                      <div className="relative group mx-auto w-full max-w-md aspect-square">
                           <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[60px] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
                           <img 
                                src={currentTrack.coverUrl} 
                                alt="Cover" 
                                className="w-full h-full object-cover rounded-[60px] shadow-2xl relative z-10 transform transition-transform duration-700 hover:scale-[1.02]" 
                           />
                      </div>

                      {/* Controls Area */}
                      <div className="flex flex-col justify-center text-center lg:text-left">
                          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight mb-2">{currentTrack.title}</h2>
                          <p className="text-xl md:text-2xl text-gray-500 font-light mb-12">{currentTrack.artist}</p>

                          {/* Progress Bar */}
                          <div className="w-full mb-10 group">
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden cursor-pointer">
                                  <div className="h-full bg-gray-900 relative" style={{ width: `${progress}%` }}>
                                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </div>
                              </div>
                              <div className="flex justify-between mt-2 text-xs font-mono text-gray-400">
                                  <span>0:{(progress * 2).toFixed(0).padStart(2, '0')}</span>
                                  <span>{currentTrack.duration}</span>
                              </div>
                          </div>

                          {/* Main Controls */}
                          <div className="flex items-center justify-center lg:justify-start gap-8 mb-10">
                              <button className="text-gray-400 hover:text-gray-900 transition-colors"><Shuffle size={24} /></button>
                              <button onClick={onPrev} className="text-gray-800 hover:scale-110 transition-transform"><SkipBack size={40} strokeWidth={1.5} /></button>
                              <button 
                                  onClick={onPlayPause}
                                  className="w-24 h-24 rounded-full bg-gray-900 text-white flex items-center justify-center hover:scale-105 hover:shadow-2xl transition-all"
                              >
                                  {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-2"/>}
                              </button>
                              <button onClick={onNext} className="text-gray-800 hover:scale-110 transition-transform"><SkipForward size={40} strokeWidth={1.5} /></button>
                              <button className="text-gray-400 hover:text-gray-900 transition-colors"><Repeat size={24} /></button>
                          </div>
                          
                          {/* Extra Actions */}
                          <div className="flex items-center justify-center lg:justify-start gap-4">
                              <ChromeButton variant="secondary" className="text-xs py-2 h-auto">
                                  <Mic2 size={16} /> Lyrics
                              </ChromeButton>
                              <div className="flex items-center gap-3 px-4 py-2 bg-white/40 rounded-full border border-white/60">
                                  <Volume2 size={16} className="text-gray-500" />
                                  <input 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={volume} 
                                    onChange={(e) => setVolume(Number(e.target.value))}
                                    className="w-24 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gray-900 [&::-webkit-slider-thumb]:rounded-full"
                                  />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Close Full Screen */}
              <button 
                onClick={toggleFullScreen}
                className="absolute top-6 right-6 p-4 rounded-full bg-white/50 hover:bg-white text-gray-900 transition-colors z-20"
              >
                  <Minimize2 size={24} />
              </button>
          </div>
      );
  }

  // Mini Player
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-40 animate-slide-up">
      <div className="glass-panel rounded-full p-3 px-6 flex items-center justify-between shadow-2xl backdrop-blur-xl bg-white/70">
        
        {/* Track Info */}
        <div className="flex items-center gap-4 w-1/3">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg relative group cursor-pointer" onClick={toggleFullScreen}>
            <img src={currentTrack.coverUrl} alt="Cover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={16} className="text-white" />
            </div>
          </div>
          <div className="hidden sm:block overflow-hidden">
            <h4 className="font-semibold text-gray-900 text-sm truncate cursor-pointer hover:text-blue-600 transition-colors" onClick={toggleFullScreen}>{currentTrack.title}</h4>
            <p className="text-gray-500 text-xs truncate">{currentTrack.artist}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center flex-1 max-w-xs mx-4">
          <div className="flex items-center gap-6 mb-1">
              <button onClick={onPrev} className="text-gray-400 hover:text-gray-900 transition-colors">
                  <SkipBack size={20} fill="currentColor" className="text-transparent stroke-current" />
              </button>
              <button 
                  onClick={onPlayPause}
                  className="w-12 h-12 rounded-full bg-gray-900 shadow-lg shadow-blue-500/20 flex items-center justify-center text-white hover:scale-105 transition-transform"
              >
                  {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1"/>}
              </button>
              <button onClick={onNext} className="text-gray-400 hover:text-gray-900 transition-colors">
                  <SkipForward size={20} fill="currentColor" className="text-transparent stroke-current" />
              </button>
          </div>
        </div>

        {/* Volume & Extras */}
        <div className="flex items-center justify-end gap-4 w-1/3">
           {/* Progress (Mini) */}
           <div className="hidden md:block w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden mr-2 cursor-pointer group">
              <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                  style={{ width: `${progress}%` }}
              ></div>
          </div>
          <button onClick={toggleFullScreen} className="text-gray-400 hover:text-gray-900 transition-colors">
            <Maximize2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
