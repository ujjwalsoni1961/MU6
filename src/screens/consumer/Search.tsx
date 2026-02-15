import React, { useState, useEffect } from 'react';
import { SearchBar } from '../../components/shared/SearchBar';
import { SongCard } from '../../components/shared/SongCard';
import { ArtistCard } from '../../components/shared/ArtistCard';
import { NFTCard } from '../../components/shared/NFTCard';
import { songs } from '../../mock/songs';
import { artists } from '../../mock/artists';
import { nfts } from '../../mock/nfts';

interface SearchProps { mode: 'streaming' | 'nft'; }

export const Search: React.FC<SearchProps> = ({ mode }) => {
  const [activeTab, setActiveTab] = useState<'songs' | 'artists' | 'nfts'>(mode === 'streaming' ? 'songs' : 'nfts');
  const genres = ['Hip-Hop', 'Electronic', 'Pop', 'R&B', 'Rock', 'Lo-fi'];

  useEffect(() => { setActiveTab(mode === 'streaming' ? 'songs' : 'nfts'); }, [mode]);

  const tabs = mode === 'streaming' ? ['songs', 'artists'] : ['nfts', 'artists'];

  return (
    <div className="space-y-8 min-h-screen">
      <div className="pt-2">
        <SearchBar placeholder={mode === 'streaming' ? "Search songs, artists..." : "Search NFTs, artists..."} />
      </div>

      <section>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Genres</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre, i) => (
            <div key={genre} className="h-24 rounded-2xl p-4 flex items-end justify-start text-white font-bold text-lg cursor-pointer hover:scale-[1.02] transition-transform shadow-glass-sm hover:shadow-glass-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 group-hover:scale-110 transition-transform duration-500" />
              <span className="relative z-10">{genre}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Searches</h3>
        <div className="flex flex-wrap gap-3">
          {['Cyber Soul', 'Neon Nights', 'Lo-fi Beats', 'NFT Drops', 'Top 50 Global'].map(term => (
            <span key={term} className="px-5 py-2 bg-white/30 border border-white/40 backdrop-blur-sm rounded-full text-text-main text-sm cursor-pointer hover:bg-white/60 hover:border-white/60 transition-all font-medium">
              {term}
            </span>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-6 border-b border-white/20 mb-6">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab as any)} className={`pb-3 text-sm font-bold uppercase tracking-wider transition-colors relative ${activeTab === tab ? 'text-primary-dark' : 'text-text-muted hover:text-text-main'}`}>
              {tab}
              {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full shadow-[0_0_10px_rgba(116,229,234,0.5)]" />}
            </button>
          ))}
        </div>
        <div className="min-h-[200px]">
          {activeTab === 'songs' && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {songs.slice(0, 5).map(song => <SongCard key={song.id} {...song} cover={song.coverImage} artist={song.artistName} />)}
            </div>
          )}
          {activeTab === 'artists' && (
            <div className="flex flex-wrap gap-8">
              {artists.slice(0, 4).map(artist => <ArtistCard key={artist.id} {...artist} />)}
            </div>
          )}
          {activeTab === 'nfts' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {nfts.slice(0, 3).map(nft => <NFTCard key={nft.id} {...nft} title={nft.songTitle} artist={nft.artistName} cover={nft.coverImage} edition={nft.editionNumber} rarity={nft.rarity} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
