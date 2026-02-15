import React from 'react';
import { NFT, Track } from '../../types';
import { LiquidCard, Badge } from './ChromeUI';
import { Play, Heart, Share2 } from 'lucide-react';

interface LibraryProps {
  nfts: NFT[];
  likedTracks: Track[];
  onPlay: (track: Track) => void;
}

export const Library: React.FC<LibraryProps> = ({ nfts, likedTracks, onPlay }) => {
  return (
    <div className="animate-fade-in max-w-6xl mx-auto">
       <div className="mb-10">
          <h2 className="text-3xl font-light text-gray-900 tracking-tight">Your Collection</h2>
          <p className="text-gray-500 font-light">Owned artifacts and liked frequencies.</p>
      </div>

      <div className="mb-12">
          <h3 className="text-lg font-medium text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span>
              Owned Artifacts ({nfts.length})
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {nfts.map((nft) => (
                  <LiquidCard key={nft.tokenId} className="group hover:shadow-lg transition-all duration-500">
                      <div className="aspect-square rounded-2xl overflow-hidden relative mb-4">
                           <img src={nft.coverUrl} alt={nft.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                           <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                               <button 
                                    onClick={() => onPlay(nft)}
                                    className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform shadow-xl"
                                >
                                   <Play size={20} fill="currentColor" className="ml-0.5" />
                               </button>
                           </div>
                           <div className="absolute top-2 right-2">
                               <Badge text={nft.rarity} type={nft.rarity === 'Liquid Chrome' ? 'legendary' : nft.rarity === 'Rare' ? 'rare' : 'common'} />
                           </div>
                      </div>
                      <div>
                          <h4 className="font-bold text-gray-900 truncate">{nft.title}</h4>
                          <p className="text-xs text-gray-500 uppercase tracking-wider">{nft.artist}</p>
                      </div>
                  </LiquidCard>
              ))}
          </div>
      </div>

      <div>
          <h3 className="text-lg font-medium text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-pink-500 rounded-full"></span>
              Liked Tracks
          </h3>
          <div className="bg-white/40 border border-white/60 rounded-[30px] overflow-hidden backdrop-blur-md">
              <table className="w-full text-left border-collapse">
                  <thead>
                      <tr className="border-b border-gray-200/50 text-gray-400 text-xs uppercase tracking-wider">
                          <th className="p-4 pl-6 font-medium">Title</th>
                          <th className="p-4 font-medium hidden md:table-cell">Artist</th>
                          <th className="p-4 font-medium hidden sm:table-cell">Genre</th>
                          <th className="p-4 font-medium">Duration</th>
                          <th className="p-4 pr-6"></th>
                      </tr>
                  </thead>
                  <tbody>
                      {likedTracks.map((track, i) => (
                          <tr key={track.id} className="hover:bg-white/40 transition-colors group">
                              <td className="p-4 pl-6">
                                  <div className="flex items-center gap-3">
                                      <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                                          <img src={track.coverUrl} className="w-full h-full object-cover" />
                                          <div className="absolute inset-0 bg-black/20 hidden group-hover:flex items-center justify-center cursor-pointer" onClick={() => onPlay(track)}>
                                              <Play size={12} fill="white" className="text-white ml-0.5" />
                                          </div>
                                      </div>
                                      <span className="font-medium text-gray-800">{track.title}</span>
                                  </div>
                              </td>
                              <td className="p-4 text-gray-600 hidden md:table-cell">{track.artist}</td>
                              <td className="p-4 hidden sm:table-cell">
                                  <span className="px-2 py-1 rounded-md bg-gray-100/80 text-gray-500 text-xs">{track.genre}</span>
                              </td>
                              <td className="p-4 text-gray-500 font-mono text-xs">{track.duration}</td>
                              <td className="p-4 pr-6 text-right">
                                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <button className="text-pink-500 hover:scale-110 transition-transform"><Heart size={16} fill="currentColor" /></button>
                                      <button className="text-gray-400 hover:text-gray-800 transition-colors"><Share2 size={16} /></button>
                                  </div>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  );
};
