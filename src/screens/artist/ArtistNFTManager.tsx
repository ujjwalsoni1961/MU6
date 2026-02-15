import React from 'react';
import { Hexagon, PlusCircle, ArrowUpRight, MoreVertical } from 'lucide-react';
import { RarityBadge } from '../../components/shared/RarityBadge';
import { PriceTag } from '../../components/shared/PriceTag';
import { nfts } from '../../mock/nfts';

export const ArtistNFTManager = () => {
  return (
    <div className="space-y-8 pb-8">
      <div className="flex items-center justify-between">
        <div><h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">NFT Manager</h1><p className="text-text-muted mt-1 font-medium">Manage your NFT collections and drops.</p></div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-secondary/10 text-secondary font-bold rounded-xl border border-secondary/20 hover:bg-secondary/20 transition-all text-sm shadow-sm active:scale-95"><PlusCircle size={16} /> Create Drop</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 text-center hover:scale-[1.02] transition-transform"><Hexagon size={32} className="text-secondary mx-auto mb-3" /><h3 className="text-3xl font-extrabold text-gray-900 mb-1">{nfts.length}</h3><p className="text-sm text-text-muted font-bold uppercase tracking-wider">Active Collections</p></div>
        <div className="glass-card p-6 text-center hover:scale-[1.02] transition-transform"><h3 className="text-3xl font-extrabold text-gray-900 mb-1">156</h3><p className="text-sm text-text-muted font-bold uppercase tracking-wider">Total Sold</p></div>
        <div className="glass-card p-6 text-center hover:scale-[1.02] transition-transform"><h3 className="text-3xl font-extrabold text-gray-900 mb-1">3.25 ETH</h3><p className="text-sm text-text-muted font-bold uppercase tracking-wider">Total NFT Revenue</p></div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Your NFT Collections</h2>
        <div className="space-y-4">
          {nfts.map(nft => (
            <div key={nft.id} className="glass-card hover:shadow-glass-lg transition-all p-5">
              <div className="flex items-center gap-6">
                <img src={nft.coverImage} alt={nft.songTitle} className="w-24 h-24 rounded-2xl object-cover shadow-md" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{nft.songTitle}</h3>
                    <RarityBadge rarity={nft.rarity} />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm text-text-dim font-medium">{nft.editionNumber} / {nft.totalEditions} sold</p>
                    <span className="text-xs font-bold text-secondary">{Math.round((nft.editionNumber / nft.totalEditions) * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-secondary rounded-full shadow-[0_0_10px_rgba(162,89,255,0.4)]" style={{ width: `${(nft.editionNumber / nft.totalEditions) * 100}%` }} /></div>
                </div>
                <div className="flex flex-col items-end gap-3 pl-4 border-l border-gray-100/50">
                  <PriceTag price={nft.price} />
                  <button className="p-2 rounded-lg hover:bg-black/5 text-text-muted hover:text-text-main transition-colors"><MoreVertical size={20} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
