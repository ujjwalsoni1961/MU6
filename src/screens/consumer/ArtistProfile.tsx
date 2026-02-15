import React, { useState, useEffect } from 'react';
import { BadgeCheck, Twitter, Instagram } from 'lucide-react';
import { SongCard } from '../../components/shared/SongCard';
import { NFTCard } from '../../components/shared/NFTCard';
import { artists } from '../../mock/artists';
import { songs } from '../../mock/songs';
import { nfts } from '../../mock/nfts';

interface ArtistProfileProps { mode: 'streaming' | 'nft'; }

export const ArtistProfile: React.FC<ArtistProfileProps> = ({ mode }) => {
  const artist = artists[0];
  const [activeTab, setActiveTab] = useState<'songs' | 'nfts' | 'about'>(mode === 'streaming' ? 'songs' : 'nfts');
  useEffect(() => { setActiveTab(mode === 'streaming' ? 'songs' : 'nfts'); }, [mode]);
  const tabs = mode === 'streaming' ? ['songs', 'about'] : ['nfts', 'about'];

  return (
    <div className="pb-24">
      {/* Banner */}
      <div className="h-64 md:h-80 bg-gradient-to-r from-primary to-secondary rounded-[40px] relative overflow-hidden mb-20 shadow-glass-lg">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="px-4 -mt-32 relative z-10 mb-12 flex flex-col md:flex-row items-end md:items-end gap-8">
        <div className="relative group">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-white/30 backdrop-blur-xl shadow-2xl">
            <img src={artist.avatar} alt={artist.name} className="w-full h-full rounded-full object-cover border-4 border-white" />
          </div>
          {artist.verified && <div className="absolute bottom-4 right-4 bg-secondary text-white p-2 rounded-full border-4 border-white shadow-lg"><BadgeCheck size={20} /></div>}
        </div>
        
        <div className="flex-1 mb-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">{artist.name}</h1>
          <p className="text-lg text-text-dim font-medium">{artist.followers.toLocaleString()} Followers</p>
        </div>
        
        <div className="flex gap-4 mb-6 w-full md:w-auto justify-center">
          <button className="flex-1 md:flex-none px-10 py-3 bg-gray-900 text-white font-bold rounded-2xl hover:scale-[1.02] hover:shadow-lg transition-all">Follow</button>
          <button className="p-3 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/60 transition-colors shadow-sm"><Twitter size={20} className="text-text-main" /></button>
          <button className="p-3 rounded-2xl bg-white/40 border border-white/50 hover:bg-white/60 transition-colors shadow-sm"><Instagram size={20} className="text-text-main" /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl">
        <div className="text-center p-6 glass-card hover:scale-[1.02] transition-transform">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-1">{artist.totalSongs}</h3>
          <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Songs Released</p>
        </div>
        <div className="text-center p-6 glass-card hover:scale-[1.02] transition-transform">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-1">{artist.totalNFTsSold}</h3>
          <p className="text-xs text-text-muted uppercase tracking-widest font-bold">NFTs Sold</p>
        </div>
        <div className="text-center p-6 glass-card hover:scale-[1.02] transition-transform">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-1">{artist.totalEarnings} ETH</h3>
          <p className="text-xs text-text-muted uppercase tracking-widest font-bold">Trading Volume</p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex border-b border-white/20">
          {tabs.map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab as any)} 
              className={`px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors relative ${
                activeTab === tab ? 'text-gray-900' : 'text-text-muted hover:text-text-main'
              }`}
            >
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-t-full shadow-[0_-2px_10px_rgba(116,229,234,0.5)]" />}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[300px] animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === 'songs' && <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">{songs.slice(0, 8).map(song => <SongCard key={song.id} {...song} cover={song.coverImage} artist={song.artistName} />)}</div>}
        {activeTab === 'nfts' && <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{nfts.slice(0, 4).map(nft => <NFTCard key={nft.id} {...nft} title={nft.songTitle} artist={nft.artistName} cover={nft.coverImage} edition={nft.editionNumber} rarity={nft.rarity} />)}</div>}
        {activeTab === 'about' && (
          <div className="max-w-3xl glass-card p-8 text-text-main leading-relaxed space-y-6 text-lg">
            <p>{artist.bio}</p>
            <p>Based in Neo Tokyo, {artist.name} has been pushing the boundaries of electronic music since 2020, blending analog warmth with digital precision.</p>
          </div>
        )}
      </div>
    </div>
  );
};
