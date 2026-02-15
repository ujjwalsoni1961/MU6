import React from 'react';
import { User, Transaction } from '../../types';
import { ChromeButton, LiquidCard } from './ChromeUI';
import { Wallet as WalletIcon, ArrowUpRight, ArrowDownLeft, Clock, CreditCard, Copy } from 'lucide-react';

interface WalletProps {
  user: User;
  transactions: Transaction[];
}

export const Wallet: React.FC<WalletProps> = ({ user, transactions }) => {
  return (
    <div className="animate-fade-in max-w-5xl mx-auto pb-10">
      <div className="mb-10">
          <h2 className="text-3xl font-light text-gray-900 tracking-tight">Digital Wallet</h2>
          <p className="text-gray-500 font-light">Manage your assets and transaction history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Main Balance Card */}
          <LiquidCard className="md:col-span-2 flex flex-col justify-between min-h-[220px] bg-gradient-to-br from-white/60 to-blue-50/40">
              <div className="flex justify-between items-start">
                  <div>
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Total Balance</h3>
                      <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-light text-gray-900">{user.balance.toFixed(3)}</span>
                          <span className="text-xl font-medium text-gray-500">ETH</span>
                      </div>
                  </div>
                  <div className="p-3 bg-white/50 rounded-full shadow-sm">
                      <WalletIcon className="text-gray-700" size={24} />
                  </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                  <ChromeButton variant="primary" className="flex-1">
                      <ArrowDownLeft size={18} /> Deposit
                  </ChromeButton>
                  <ChromeButton variant="secondary" className="flex-1">
                      <ArrowUpRight size={18} /> Withdraw
                  </ChromeButton>
              </div>
          </LiquidCard>

          {/* Address Card */}
          <LiquidCard className="flex flex-col justify-center gap-6">
              <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Wallet Address</h3>
                  <div className="flex items-center gap-2 bg-white/40 p-3 rounded-xl border border-white/60">
                      <code className="text-sm text-gray-700 truncate">{user.walletAddress}</code>
                      <button className="text-gray-400 hover:text-blue-500 transition-colors">
                          <Copy size={16} />
                      </button>
                  </div>
              </div>
              <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Connected Network</h3>
                  <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                      <span className="text-sm font-medium text-gray-700">Ethereum Mainnet</span>
                  </div>
              </div>
          </LiquidCard>
      </div>

      <h3 className="text-xl font-light text-gray-900 mb-6 flex items-center gap-2">
          <Clock size={20} className="text-gray-400" />
          Recent Activity
      </h3>

      <div className="space-y-4">
          {transactions.map((tx) => (
              <LiquidCard key={tx.id} className="p-4 flex items-center justify-between hover:scale-[1.01] transition-transform duration-300">
                  <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          tx.type === 'buy' || tx.type === 'deposit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                      }`}>
                          {tx.type === 'buy' || tx.type === 'deposit' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                      </div>
                      <div>
                          <p className="font-semibold text-gray-800 capitalize">
                              {tx.type === 'mint' ? 'Minted Asset' : tx.type === 'buy' ? 'Purchased Asset' : `${tx.type} ETH`}
                          </p>
                          <p className="text-xs text-gray-500">{tx.date} • <span className="font-mono text-gray-400">{tx.hash}</span></p>
                      </div>
                  </div>
                  
                  <div className="text-right">
                      <p className={`font-mono font-bold ${
                          tx.type === 'buy' || tx.type === 'sell' ? 'text-gray-900' : tx.type === 'deposit' ? 'text-green-600' : 'text-gray-900'
                      }`}>
                          {tx.type === 'sell' || tx.type === 'deposit' ? '+' : '-'}{tx.amount} ETH
                      </p>
                      {tx.assetName && <p className="text-xs text-blue-500">{tx.assetName}</p>}
                  </div>
              </LiquidCard>
          ))}
      </div>
    </div>
  );
};
