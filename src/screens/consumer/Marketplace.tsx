import React from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { NFTCard } from '../../components/shared/NFTCard';
import { GenreTag } from '../../components/shared/GenreTag';
import { nfts } from '../../mock/nfts';

export const Marketplace = () => {
  const genres = ['All', 'Hip-Hop', 'Electronic', 'Pop', 'R&B'];
  return (
    <div className="pb-24 space-y-8 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Marketplace</h1>
          <p className="text-text-muted mt-1 font-medium">Discover and collect exclusive music NFTs.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white/40 backdrop-blur-md rounded-xl border border-white/50 text-text-main text-sm font-bold hover:bg-white/60 transition-all shadow-sm">
            <Filter size={16} /> Filter
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white/40 backdrop-blur-md rounded-xl border border-white/50 text-text-main text-sm font-bold hover:bg-white/60 transition-all shadow-sm">
            Sort by: Newest <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide snap-x">
        {genres.map((genre, i) => <GenreTag key={genre} genre={genre} selected={i === 0} />)}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
        {nfts.map(nft => <NFTCard key={nft.id} {...nft} title={nft.songTitle} artist={nft.artistName} cover={nft.coverImage} edition={nft.editionNumber} rarity={nft.rarity} />)}
        {nfts.map(nft => <NFTCard key={`${nft.id}-d`} {...nft} title={nft.songTitle} artist={nft.artistName} cover={nft.coverImage} edition={nft.editionNumber + 1} rarity={nft.rarity} />)}
      </div>
    </div>
  );
};
