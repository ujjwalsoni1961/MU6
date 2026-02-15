import React, { useState } from 'react';
import { Upload, Music, Image, Hexagon, AlertCircle } from 'lucide-react';

export const ArtistUpload = () => {
  const [isNFT, setIsNFT] = useState(false);

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Upload Music</h1>
        <p className="text-text-muted mt-1 font-medium">Share your music with the world. Optionally mint as NFT.</p>
      </div>

      <div className="glass-card p-8">
        {/* File Upload Zone */}
        <div className="border-2 border-dashed border-gray-300 rounded-3xl p-12 flex flex-col items-center justify-center text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer group bg-white/20">
          <div className="p-4 bg-white/50 rounded-full mb-4 shadow-sm group-hover:scale-110 transition-transform">
            <Upload size={32} className="text-text-muted group-hover:text-primary-dark transition-colors" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-1">Drop your audio file here</h3>
          <p className="text-sm text-text-muted">WAV, FLAC, or MP3 — Max 50MB</p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Music size={16} className="text-text-muted" /> Song Title
              </label>
              <input type="text" placeholder="Enter song title" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-white/50 text-gray-900 placeholder-gray-400 transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">Genre</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm bg-white/50 text-gray-900 transition-all">
                <option>Hip-Hop</option><option>Electronic</option><option>Pop</option><option>R&B</option><option>Rock</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Image size={16} className="text-text-muted" /> Cover Art
            </label>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-300 border border-gray-200 shadow-inner">
                <Image size={32} />
              </div>
              <button className="px-6 py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-xl text-sm hover:bg-gray-50 transition-colors shadow-sm">
                Choose Image
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-6 bg-white/40 border border-white/50 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <Hexagon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Mint as NFT</h4>
                <p className="text-xs text-text-muted font-medium">Set price, editions, and list on marketplace.</p>
              </div>
            </div>
            <button 
              onClick={() => setIsNFT(!isNFT)} 
              className={`w-14 h-8 rounded-full transition-all duration-300 flex items-center px-1 ${isNFT ? 'bg-primary' : 'bg-gray-300'}`}
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isNFT ? 'translate-x-6' : ''}`} />
            </button>
          </div>

          {isNFT && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-secondary/5 rounded-2xl border border-secondary/10 animate-in fade-in slide-in-from-top-2">
              <div><label className="block text-sm font-bold text-gray-900 mb-2">Price (ETH)</label><input type="number" placeholder="0.05" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-sm bg-white/80 text-gray-900 placeholder-gray-400 transition-all" /></div>
              <div><label className="block text-sm font-bold text-gray-900 mb-2">Total Editions</label><input type="number" placeholder="100" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-sm bg-white/80 text-gray-900 placeholder-gray-400 transition-all" /></div>
              <div><label className="block text-sm font-bold text-gray-900 mb-2">Rarity</label><select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-sm bg-white/80 text-gray-900 transition-all"><option>Common</option><option>Rare</option><option>Legendary</option></select></div>
              <div><label className="block text-sm font-bold text-gray-900 mb-2">Royalty %</label><input type="number" placeholder="10" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-sm bg-white/80 text-gray-900 placeholder-gray-400 transition-all" /></div>
            </div>
          )}

          <div className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-sm text-blue-700 font-medium">
            <AlertCircle size={20} className="flex-shrink-0 text-blue-500" />
            <span>All uploads are stored on-chain. Make sure your content is final before publishing.</span>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="flex-1 py-4 bg-primary/20 text-primary-dark border border-primary/30 font-bold rounded-xl hover:bg-primary/30 hover:scale-[1.01] transition-all text-base shadow-sm">Publish Song</button>
            <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors">Save Draft</button>
          </div>
        </div>
      </div>
    </div>
  );
};
