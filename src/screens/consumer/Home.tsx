import React from 'react';
import { SongCard } from '../../components/shared/SongCard';
import { NFTCard } from '../../components/shared/NFTCard';
import { ArtistCard } from '../../components/shared/ArtistCard';
import { GreetingCard } from '../../components/shared/GreetingCard';
import { songs } from '../../mock/songs';
import { nfts } from '../../mock/nfts';
import { artists } from '../../mock/artists';

interface HomeProps {
  mode: 'streaming' | 'nft';
}

const StreamingHome: React.FC = () => {
  const greetingItems = songs.slice(0, 6);

  return (
    <div className="space-y-12">
      {/* Greeting Grid */}
      <section>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-6">Good Afternoon</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {greetingItems.map(song => (
            <GreetingCard key={song.id} cover={song.coverImage} title={song.title} />
          ))}
        </div>
      </section>

      {/* Recently Played Shelf */}
      <section>
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-2xl font-bold text-text-main tracking-tight">Recently Played</h2>
          <button className="text-primary-dark text-sm font-semibold hover:text-primary transition-colors">View All</button>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-4 -mx-4 px-4 scrollbar-hide snap-x">
          {songs.slice(6, 12).map(song => (
            <div key={song.id} className="snap-start">
              <SongCard cover={song.coverImage} title={song.title} artist={song.artistName} />
            </div>
          ))}
        </div>
      </section>

      {/* Made For You Shelf */}
      <section>
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-2xl font-bold text-text-main tracking-tight">Made For You</h2>
          <button className="text-primary-dark text-sm font-semibold hover:text-primary transition-colors">View All</button>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-4 -mx-4 px-4 scrollbar-hide snap-x">
          {songs.slice(12, 18).map(song => (
            <div key={song.id} className="snap-start">
              <SongCard cover={song.coverImage} title={song.title} artist={song.artistName} />
            </div>
          ))}
        </div>
      </section>
      
      {/* Top Artists */}
       <section>
         <div className="flex items-center justify-between mb-6 px-2">
           <h2 className="text-2xl font-bold text-text-main tracking-tight">Your Top Artists</h2>
           <button className="text-text-muted text-sm font-semibold hover:text-text-main transition-colors">View All</button>
         </div>
         <div className="flex overflow-x-auto gap-8 pb-4 -mx-4 px-4 scrollbar-hide">
           {artists.map(artist => (
             <div key={artist.id} className="min-w-[160px] flex flex-col items-center justify-center">
               <ArtistCard 
                 avatar={artist.avatar} 
                 name={artist.name} 
                 followers={artist.followers} 
                 verified={artist.verified} 
               />
             </div>
           ))}
         </div>
       </section>
    </div>
  );
};

const NftHome: React.FC = () => {
  const featuredNFT = nfts.find(n => n.rarity === 'legendary') || nfts[0];

  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[480px] rounded-[2.5rem] overflow-hidden group shadow-glass">
        <img 
          src={featuredNFT.coverImage} 
          alt="Featured" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-auto md:max-w-2xl">
          <div className="glass-panel p-6 md:p-8 rounded-3xl border-white/10 backdrop-blur-md bg-black/30">
            <div className={`inline-block px-3 py-1 text-white text-xs font-bold rounded-lg mb-4 uppercase tracking-wider bg-secondary`}>
              Featured Drop
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight drop-shadow-md">
              {featuredNFT.songTitle}
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-6 font-medium">
              Exclusive limited edition by {featuredNFT.artistName}. Own a piece of music history.
            </p>
            <button className={`px-8 py-3.5 font-bold rounded-xl hover:scale-105 transition-all shadow-lg active:scale-95 bg-white text-secondary hover:bg-secondary-light hover:text-white`}>
              Collect Now
            </button>
          </div>
        </div>
      </section>

      {/* New NFT Drops */}
      <section>
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-2xl font-bold text-text-main tracking-tight">New NFT Drops</h2>
          <button className="text-secondary text-sm font-semibold hover:text-secondary-dark transition-colors">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nfts.slice(0, 4).map(nft => (
            <NFTCard 
              key={nft.id}
              cover={nft.coverImage} 
              title={nft.songTitle} 
              artist={nft.artistName} 
              price={nft.price} 
              edition={nft.editionNumber} 
              totalEditions={nft.totalEditions} 
              rarity={nft.rarity} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export const Home: React.FC<HomeProps> = ({ mode }) => {
  return mode === 'streaming' ? <StreamingHome /> : <NftHome />;
};
