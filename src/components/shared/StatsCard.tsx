import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  gradient?: boolean;
}

export const StatsCard: React.FC<StatsCardProps> = ({ label, value, icon: Icon, trend, trendUp, gradient }) => {
  if (gradient) {
    return (
      <div className="bg-gradient-to-br from-primary to-secondary p-6 rounded-3xl shadow-glass-lg text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8 opacity-10 transform group-hover:scale-110 transition-transform duration-500">
          <Icon size={120} />
        </div>
        
        <div className="relative z-10 flex items-start justify-between">
          <div>
            <p className="text-sm text-white/80 font-bold tracking-wide uppercase mb-2">{label}</p>
            <h3 className="text-3xl font-extrabold mb-1">{value}</h3>
            {trend && (
              <div className="inline-flex items-center px-2 py-1 rounded-lg bg-white/20 backdrop-blur-md text-xs font-semibold mt-2">
                {trendUp ? '↑' : '↓'} {trend}
              </div>
            )}
          </div>
          <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-inner">
            <Icon size={24} className="text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6 hover:shadow-glass-lg transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-text-muted font-bold tracking-wide uppercase mb-2">{label}</p>
          <h3 className="text-3xl font-extrabold text-text-main mb-1">{value}</h3>
          {trend && (
            <p className={`text-xs font-bold mt-2 flex items-center gap-1 ${trendUp ? 'text-green-600' : 'text-red-500'}`}>
              {trendUp ? '↑' : '↓'} {trend}
            </p>
          )}
        </div>
        <div className="p-3 bg-primary/10 rounded-2xl text-primary-dark group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
};
