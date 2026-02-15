import React from 'react';
import { TrendingUp, DollarSign, Disc3, Hexagon, ArrowUpRight } from 'lucide-react';
import { StatsCard } from '../../components/shared/StatsCard';
import { ChartWidget } from '../../components/shared/ChartWidget';
import { songs } from '../../mock/songs';

export const ArtistDashboard = () => {
  return (
    <div className="space-y-8 pb-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome back, CyberSoul</h1>
        <p className="text-text-muted mt-1 font-medium">Here's your overview for this month.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard label="Total Streams" value="1.2M" icon={TrendingUp} trend="12% from last month" trendUp />
        <StatsCard label="Revenue" value="$8,450" icon={DollarSign} trend="8% from last month" trendUp gradient />
        <StatsCard label="Total Songs" value="24" icon={Disc3} />
        <StatsCard label="NFTs Sold" value="156" icon={Hexagon} trend="23% from last month" trendUp />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-96">
        <ChartWidget title="Streams (Last 7 Days)" type="bar" data={[1200, 1800, 900, 2100, 1500, 2400, 1900]} labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} />
        <ChartWidget title="Revenue (Last 6 Months)" type="bar" data={[3200, 4500, 3900, 5200, 6100, 8450]} labels={['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']} />
      </div>

      <div className="glass-card p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Top Performing Songs</h2>
          <button className="text-primary-dark text-sm font-bold hover:text-text-main flex items-center gap-1 transition-colors">
            View All <ArrowUpRight size={14} />
          </button>
        </div>
        <div className="space-y-2">
          {songs.slice(0, 5).map((song, i) => (
            <div key={song.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/40 transition-colors group cursor-pointer border border-transparent hover:border-white/30">
              <span className="text-lg font-bold text-text-muted w-8 text-center group-hover:text-primary-dark transition-colors">{i + 1}</span>
              <img src={song.coverImage} alt={song.title} className="w-12 h-12 rounded-xl object-cover shadow-sm" />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 truncate text-sm">{song.title}</h4>
                <p className="text-xs text-text-muted font-medium">{song.plays?.toLocaleString() || '0'} plays</p>
              </div>
              <div className="text-sm font-bold text-green-600 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                ${((song.plays || 0) * 0.003).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
