import React from 'react';
import { DollarSign, ArrowDownRight, ArrowUpRight, Wallet, TrendingUp } from 'lucide-react';
import { StatsCard } from '../../components/shared/StatsCard';
import { ChartWidget } from '../../components/shared/ChartWidget';
import { useCurrency } from '../../context/CurrencyContext';

export const ArtistEarnings = () => {
  const { formatPrice } = useCurrency();

  return (
    <div className="space-y-8 pb-8">
      <div className="flex items-center justify-between">
        <div><h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Earnings</h1><p className="text-text-muted mt-1 font-medium">Track your income and manage payouts.</p></div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-900/10 text-gray-900 border border-gray-900/20 font-bold rounded-xl hover:bg-gray-900/20 hover:scale-[1.02] transition-transform text-sm shadow-sm"><Wallet size={16} /> Withdraw</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard label="Total Earned" value={formatPrice(8.45)} icon={DollarSign} gradient />
        <StatsCard label="Streaming Revenue" value={formatPrice(5.2)} icon={TrendingUp} trend="+12%" trendUp />
        <StatsCard label="NFT Sales" value={formatPrice(3.25)} icon={DollarSign} trend="+23%" trendUp />
      </div>

      <div className="h-80">
        <ChartWidget title="Earnings Over Time" type="bar" data={[1200, 1800, 1500, 2100, 2400, 3100, 2800, 3500, 4100, 3800, 4500, 5200]} labels={['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']} />
      </div>

      <div className="glass-card p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Transactions</h2>
        <div className="space-y-3">
          {[
            { type: 'Stream Revenue', amount: 0.034, positive: true, date: '2 hours ago' },
            { type: 'NFT Sale: Digital Soul', amount: 0.5, positive: true, date: '5 hours ago' },
            { type: 'Withdrawal', amount: -1.2, positive: false, date: '2 days ago' },
            { type: 'Royalty Payment', amount: 0.12, positive: true, date: '3 days ago' },
            { type: 'NFT Sale: Neon Dreams', amount: 0.75, positive: true, date: '4 days ago' },
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/40 transition-colors border border-transparent hover:border-white/30">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${tx.positive ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`}>
                  {tx.positive ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                </div>
                <div><h4 className="font-bold text-gray-900 text-sm">{tx.type}</h4><p className="text-xs text-text-muted font-medium">{tx.date}</p></div>
              </div>
              <span className={`font-bold text-base ${tx.positive ? 'text-green-600' : 'text-red-600'}`}>{tx.positive ? '+' : ''}{formatPrice(Math.abs(tx.amount))}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
