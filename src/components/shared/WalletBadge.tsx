import React from 'react';
import { Wallet, Copy } from 'lucide-react';

interface WalletBadgeProps {
  address: string;
}

export const WalletBadge: React.FC<WalletBadgeProps> = ({ address }) => {
  const truncated = `${address.slice(0, 6)}...${address.slice(-4)}`;
  
  return (
    <div className="flex items-center gap-2 bg-white/40 px-3 py-1.5 rounded-xl border border-white/50 backdrop-blur-sm text-text-main text-xs font-bold cursor-pointer hover:bg-white/60 transition-colors shadow-sm">
      <Wallet size={14} className="text-text-muted" />
      <span className="font-mono">{truncated}</span>
      <Copy size={12} className="text-text-muted ml-1 hover:text-primary-dark transition-colors" />
    </div>
  );
};
