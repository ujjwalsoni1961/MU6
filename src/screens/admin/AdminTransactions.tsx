import React from 'react';
import { ArrowUpRight, ArrowDownRight, ExternalLink } from 'lucide-react';
import { useCurrency } from '../../context/CurrencyContext';

const mockTransactions = [
  { id: '1', type: 'NFT Sale', from: '0x89AB...CD12', to: '0x71C7...976F', amount: 0.5, song: 'Digital Soul #42', date: '2 hours ago', status: 'Confirmed' },
  { id: '2', type: 'Payout', from: 'Platform', to: '0x23D9...A4F1', amount: 1.2, song: '—', date: '5 hours ago', status: 'Confirmed' },
  { id: '3', type: 'NFT Sale', from: '0xBC01...23DE', to: '0x45EF...6789', amount: 0.75, song: 'Neon Dreams #12', date: '1 day ago', status: 'Confirmed' },
  { id: '4', type: 'Royalty', from: 'Platform', to: '0x71C7...976F', amount: 0.034, song: 'Quantum Drift', date: '1 day ago', status: 'Pending' },
  { id: '5', type: 'NFT Sale', from: '0x56FG...HIJ3', to: '0x89AB...CD12', amount: 0.35, song: 'Cyber Night #8', date: '2 days ago', status: 'Confirmed' },
];

export const AdminTransactions = () => {
  const { formatPrice } = useCurrency();

  return (
    <div className="space-y-8 pb-8">
      <div><h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Transactions</h1><p className="text-text-muted mt-1 font-medium">All platform transactions and transfers.</p></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6"><p className="text-sm text-text-muted font-bold uppercase tracking-wider mb-2">Total Volume (30d)</p><h3 className="text-3xl font-extrabold text-gray-900">23.4 ETH</h3><p className="text-xs text-green-600 font-bold mt-2 bg-green-500/10 px-2 py-1 rounded-lg w-fit">↑ 18% from last month</p></div>
        <div className="glass-card p-6"><p className="text-sm text-text-muted font-bold uppercase tracking-wider mb-2">Transactions (30d)</p><h3 className="text-3xl font-extrabold text-gray-900">342</h3><p className="text-xs text-green-600 font-bold mt-2 bg-green-500/10 px-2 py-1 rounded-lg w-fit">↑ 25% from last month</p></div>
        <div className="glass-card p-6"><p className="text-sm text-text-muted font-bold uppercase tracking-wider mb-2">Platform Fee Earned</p><h3 className="text-3xl font-extrabold text-gray-900">1.17 ETH</h3><p className="text-xs text-text-dim font-bold mt-2 bg-white/30 px-2 py-1 rounded-lg w-fit">5% commission</p></div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block glass-card overflow-hidden">
        <table className="w-full text-left">
          <thead><tr className="border-b border-white/20 bg-white/10"><th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Type</th><th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Item</th><th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">From → To</th><th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Amount</th><th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Status</th><th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Date</th></tr></thead>
          <tbody className="divide-y divide-white/10">
            {mockTransactions.map(tx => (
              <tr key={tx.id} className="hover:bg-white/30 transition-colors">
                <td className="px-6 py-4"><span className={`px-3 py-1 rounded-lg text-xs font-bold ${tx.type === 'NFT Sale' ? 'bg-secondary/10 text-secondary' : tx.type === 'Payout' ? 'bg-blue-500/10 text-blue-600' : 'bg-green-500/10 text-green-600'}`}>{tx.type}</span></td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{tx.song}</td>
                <td className="px-6 py-4 text-xs font-mono text-text-dim bg-white/20 px-2 py-1 rounded-md w-fit">{tx.from} → {tx.to}</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-900">{formatPrice(tx.amount)}</td>
                <td className="px-6 py-4"><span className={`px-3 py-1 rounded-lg text-xs font-bold ${tx.status === 'Confirmed' ? 'bg-green-500/10 text-green-700' : 'bg-yellow-500/10 text-yellow-700'}`}>{tx.status}</span></td>
                <td className="px-6 py-4 text-sm text-text-muted font-medium">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {mockTransactions.map(tx => (
          <div key={tx.id} className="glass-card p-5">
            <div className="flex items-center justify-between mb-3"><span className={`px-2 py-1 rounded-lg text-xs font-bold ${tx.type === 'NFT Sale' ? 'bg-secondary/10 text-secondary' : 'bg-green-500/10 text-green-600'}`}>{tx.type}</span><span className="font-bold text-gray-900 text-sm">{formatPrice(tx.amount)}</span></div>
            <p className="font-bold text-gray-900 text-sm mb-2">{tx.song}</p>
            <div className="flex items-center justify-between mt-2 text-xs pt-2 border-t border-white/20"><span className="text-text-muted font-medium">{tx.date}</span><span className={`font-bold ${tx.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>{tx.status}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};
