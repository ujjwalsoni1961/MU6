import React from 'react';
import { Play, MoreHorizontal, Hexagon } from 'lucide-react';
import { songs } from '../../mock/songs';

export const ArtistSongs = () => {
  return (
    <div className="space-y-8 pb-8">
      <div className="flex items-center justify-between">
        <div><h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">My Songs</h1><p className="text-text-muted mt-1 font-medium">{songs.length} songs uploaded</p></div>
        <button className="px-6 py-2.5 bg-primary/20 text-primary-dark border border-primary/30 font-bold rounded-xl hover:bg-primary/30 hover:shadow-sm transition-all text-sm">+ Upload New</button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="hidden md:grid grid-cols-[48px_3fr_1fr_1fr_1fr_48px] gap-4 px-6 py-4 border-b border-gray-200/50 bg-white/30 backdrop-blur-sm">
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">#</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Title</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Plays</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">NFT</span>
          <span className="text-xs font-bold text-text-muted uppercase tracking-wider">Revenue</span>
          <span></span>
        </div>
        <div className="divide-y divide-gray-100/50">
          {songs.map((song, i) => (
            <div key={song.id} className="grid grid-cols-[48px_3fr_1fr_1fr_1fr_48px] gap-4 items-center px-6 py-4 hover:bg-white/40 transition-colors cursor-pointer group">
              <span className="text-sm text-text-muted font-bold group-hover:hidden">{i + 1}</span>
              <span className="hidden group-hover:block"><Play size={16} className="text-primary-dark" /></span>
              <div className="flex items-center gap-4">
                <img src={song.coverImage} alt={song.title} className="w-10 h-10 rounded-lg object-cover shadow-sm" />
                <div><h4 className="font-bold text-gray-900 text-sm truncate">{song.title}</h4><p className="text-xs text-text-muted font-medium">{song.genre}</p></div>
              </div>
              <span className="text-sm text-text-dim font-medium">{(song.plays || 0).toLocaleString()}</span>
              <span>{song.isNFT ? <span className="flex items-center gap-1.5 text-secondary text-xs font-bold bg-secondary/10 px-2 py-1 rounded-md w-fit"><Hexagon size={12} /> Minted</span> : <span className="text-text-muted text-xs">—</span>}</span>
              <span className="text-sm font-bold text-green-600">${((song.plays || 0) * 0.003).toFixed(2)}</span>
              <button className="p-2 rounded-lg hover:bg-black/5 text-text-muted hover:text-text-main transition-colors"><MoreHorizontal size={18} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
