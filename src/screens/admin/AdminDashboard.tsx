import React from 'react';
import { Users, Music, Activity, DollarSign, ArrowUpRight, TrendingUp } from 'lucide-react';
import { StatsCard } from '../../components/shared/StatsCard';
import { ChartWidget } from '../../components/shared/ChartWidget';

export const AdminDashboard = () => {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admin Dashboard</h1>
        <p className="text-text-muted mt-1 font-medium">Platform overview and key metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard label="Total Users" value="12,450" icon={Users} trend="+350 this month" trendUp />
        <StatsCard label="Total Songs" value="3,240" icon={Music} trend="+120 this month" trendUp />
        <StatsCard label="Platform Revenue" value="$124.5K" icon={DollarSign} trend="+18%" trendUp gradient />
        <StatsCard label="NFT Transactions" value="8,920" icon={Activity} trend="+42%" trendUp />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-96">
        <ChartWidget title="User Growth (Last 6 Months)" type="bar" data={[8200, 9100, 9800, 10500, 11200, 12450]} labels={['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']} />
        <ChartWidget title="Platform Revenue (Last 6 Months)" type="bar" data={[65000, 72000, 85000, 98000, 112000, 124500]} labels={['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <TrendingUp size={24} className="text-primary-dark" /> Top Performing Artists
          </h2>
          <div className="space-y-2">
            {[
              { name: 'CyberSoul', streams: '1.2M', revenue: '$8,450', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' },
              { name: 'NeonByte', streams: '890K', revenue: '$5,200', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
              { name: 'QuantumBeats', streams: '650K', revenue: '$4,100', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
            ].map((artist, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white/40 transition-colors cursor-pointer border border-transparent hover:border-white/30">
                <span className="text-lg font-bold text-text-muted w-6 text-center">{i + 1}</span>
                <img src={artist.avatar} alt={artist.name} className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-white/50" />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm">{artist.name}</h4>
                  <p className="text-xs text-text-muted font-medium">{artist.streams} streams</p>
                </div>
                <span className="font-bold text-green-600 text-sm bg-green-500/10 px-3 py-1 rounded-full">{artist.revenue}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-2">
            {[
              { action: 'New artist registered', detail: 'QuantumBeats joined the platform', time: '5 min ago', icon: Users },
              { action: 'NFT sold', detail: 'Digital Soul #42 sold for 0.5 ETH', time: '1 hour ago', icon: Activity },
              { action: 'Song flagged', detail: 'Copyright claim on "Neon Dreams"', time: '3 hours ago', icon: Music },
              { action: 'Payout processed', detail: '$12,500 distributed to artists', time: '6 hours ago', icon: DollarSign },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/40 transition-colors border border-transparent hover:border-white/30">
                <div className="p-3 bg-white/50 rounded-xl flex-shrink-0 shadow-sm">
                  <item.icon size={18} className="text-primary-dark" />
                </div>
                <div className="flex-1 pt-0.5">
                  <h4 className="font-bold text-gray-900 text-sm">{item.action}</h4>
                  <p className="text-xs text-text-muted font-medium mt-0.5">{item.detail}</p>
                </div>
                <span className="text-xs text-text-muted font-medium whitespace-nowrap bg-white/30 px-2 py-1 rounded-lg">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
