import React from 'react';
import { Play, Heart, Share2, MoreHorizontal } from 'lucide-react';
import { SongCard } from '../../components/shared/SongCard';
import { WalletBadge } from '../../components/shared/WalletBadge';
import { songs } from '../../mock/songs';
import { useCurrency } from '../../context/CurrencyContext';

interface SongDetailProps { mode: 'streaming' | 'nft'; }

export const SongDetail: React.FC<SongDetailProps> = ({ mode }) => {
  const song = songs[0];
  const { formatPrice } = useCurrency();

  return (
    <div className="pb-24 animate-in fade-in zoom-in duration-500">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:w-1/3 max-w-md mx-auto lg:mx-0 sticky top-8">
          <div className="aspect-square rounded-[40px] overflow-hidden shadow-glass-lg ring-1 ring-white/50 relative group">
            <img src={song.coverImage} alt={song.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
          </div>
        </div>
        
        <div className="flex-1 space-y-8 w-full">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-2 tracking-tight">{song.title}</h1>
            <h2 className="text-2xl text-text-dim font-medium">{song.artistName}</h2>
            
            <div className="flex items-center gap-4 mt-8">
              <button className="bg-primary/20 text-primary-dark border border-primary/30 px-8 py-4 rounded-full font-bold shadow-sm hover:bg-primary/30 hover:scale-105 transition-transform flex items-center gap-2">
                <Play size={24} fill="currentColor" /> Play Now
              </button>
              <button className="p-4 rounded-full bg-white/40 border border-white/50 hover:bg-white/60 transition-colors shadow-sm"><Heart size={24} className="text-secondary" /></button>
              <button className="p-4 rounded-full bg-white/40 border border-white/50 hover:bg-white/60 transition-colors shadow-sm"><Share2 size={24} className="text-text-dim" /></button>
              <button className="p-4 rounded-full bg-white/40 border border-white/50 hover:bg-white/60 transition-colors shadow-sm"><MoreHorizontal size={24} className="text-text-dim" /></button>
            </div>
          </div>

          {mode === 'nft' && (
            <div className="glass-card p-8 border border-white/40">
              <div className="flex items-start justify-between mb-6">
                <div><h3 className="text-xl font-bold text-gray-900">Own this track</h3><p className="text-text-muted text-sm mt-1">Support the artist and get exclusive perks.</p></div>
                <div className="text-right"><p className="text-3xl font-bold text-gray-900">{formatPrice(song.price)}</p><p className="text-xs font-bold text-secondary uppercase tracking-wide bg-secondary/10 px-2 py-1 rounded-lg mt-1 inline-block">{song.editionsSold} / {song.totalEditions} Claimed</p></div>
              </div>
              <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden mb-8 shadow-inner">
                <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_15px_rgba(116,229,234,0.5)]" style={{ width: `${(song.editionsSold! / song.totalEditions!) * 100}%` }} />
              </div>
              <button className="w-full py-4 bg-secondary/10 text-secondary border border-secondary/20 font-bold rounded-2xl shadow-sm hover:bg-secondary/20 transition-all text-lg">Collect NFT</button>
              <p className="text-center text-xs text-text-muted mt-4 font-medium">Includes high-quality audio download & access to artist community.</p>
            </div>
          )}

          {mode === 'streaming' && (
            <div className="space-y-6">
              <div className="glass-card p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Lyrics</h3>
                <p className="text-text-muted italic text-sm leading-relaxed">
                  (Lyrics styling placeholder) <br/>
                  Neon lights reflected in the rain... <br/>
                  Cybernetic dreams calling my name...
                </p>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Credits</h3>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div><p className="text-text-muted mb-1">Performed by</p><p className="font-bold text-gray-900">{song.artistName}</p></div>
                  <div><p className="text-text-muted mb-1">Produced by</p><p className="font-bold text-gray-900">Cyber Studios</p></div>
                  <div><p className="text-text-muted mb-1">Written by</p><p className="font-bold text-gray-900">{song.artistName}, AI Co-pilot</p></div>
                  <div><p className="text-text-muted mb-1">Release Date</p><p className="font-bold text-gray-900">Oct 24, 2024</p></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 px-2">More from {song.artistName}</h3>
        <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x">
          {songs.slice(1, 6).map(s => (
            <div key={s.id} className="snap-start">
              <SongCard {...s} cover={s.coverImage} artist={s.artistName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
