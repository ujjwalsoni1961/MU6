import React, { useState, useEffect } from 'react';
import { SongCard } from '../../components/shared/SongCard';
import { NFTCard } from '../../components/shared/NFTCard';
import { songs } from '../../mock/songs';
import { nfts } from '../../mock/nfts';

interface LibraryProps { mode: 'streaming' | 'nft'; }

export const Library: React.FC<LibraryProps> = ({ mode }) => {
  const [activeTab, setActiveTab] = useState<'nfts' | 'liked' | 'playlists'>(mode === 'streaming' ? 'liked' : 'nfts');
  useEffect(() => { setActiveTab(mode === 'streaming' ? 'liked' : 'nfts'); }, [mode]);

  const tabs = mode === 'streaming' ? [{ id: 'liked', label: 'Liked Songs' }, { id: 'playlists', label: 'Playlists' }] : [{ id: 'nfts', label: 'Owned NFTs' }];

  return (
    <div className="space-y-8 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">{mode === 'streaming' ? 'My Library' : 'My Collection'}</h1>
        
        <div className="flex p-1 bg-white/30 backdrop-blur-md rounded-2xl border border-white/40">
          {tabs.map(tab => (
            <button 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id as any)} 
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-white shadow-glass-sm text-primary-dark' 
                  : 'text-text-muted hover:text-text-main'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {activeTab === 'nfts' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {nfts.map(nft => <NFTCard key={nft.id} {...nft} title={nft.songTitle} artist={nft.artistName} cover={nft.coverImage} edition={nft.editionNumber} rarity={nft.rarity} />)}
          </div>
        )}
        {activeTab === 'liked' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {songs.map(song => <SongCard key={song.id} {...song} cover={song.coverImage} artist={song.artistName} />)}
          </div>
        )}
        {activeTab === 'playlists' && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="group cursor-pointer glass-card p-4 hover:bg-white/50 transition-all">
                <div className="aspect-square bg-gray-100 rounded-2xl mb-4 overflow-hidden grid grid-cols-2 gap-0.5 shadow-inner">
                  <img src={songs[0].coverImage} className="w-full h-full object-cover" />
                  <img src={songs[1].coverImage} className="w-full h-full object-cover" />
                  <img src={songs[2].coverImage} className="w-full h-full object-cover" />
                  <img src={songs[3].coverImage} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">My Playlist #{i}</h3>
                <p className="text-xs text-text-muted font-medium">24 songs</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
