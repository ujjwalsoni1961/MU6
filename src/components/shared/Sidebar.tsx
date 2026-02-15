import React, { useState } from 'react';
import { 
  LayoutDashboard, Music, Upload, DollarSign, LogOut, ChevronLeft, ChevronRight,
  Users, ListMusic, Activity, FileText
} from 'lucide-react';

interface SidebarProps {
  role: 'artist' | 'admin';
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ role, activeTab, onTabChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const artistItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'songs', label: 'My Songs', icon: Music },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'nfts', label: 'NFT Manager', icon: ListMusic },
  ];

  const adminItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'songs', label: 'All Songs', icon: Music },
    { id: 'transactions', label: 'Transactions', icon: Activity },
    { id: 'contracts', label: 'Contracts', icon: FileText },
  ];

  const items = role === 'artist' ? artistItems : adminItems;

  return (
    <aside 
      className={`
        glass-panel border-r border-white/20 h-[calc(100vh-2rem)] my-4 ml-4 rounded-3xl sticky top-4 transition-all duration-300 flex flex-col z-30
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}
    >
      <div className="h-20 flex items-center justify-between px-6 mb-2">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <img src="/logo-updated.png" alt="MU6" className="h-8 object-contain" />
          </div>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`
            p-2 rounded-xl hover:bg-white/40 text-text-muted hover:text-text-main transition-colors 
            ${isCollapsed ? 'mx-auto' : ''}
          `}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 px-3 space-y-2 overflow-y-auto scrollbar-hide">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`
              w-full flex items-center gap-3 px-3 py-3 rounded-2xl transition-all duration-200 group relative overflow-hidden
              ${activeTab === item.id 
                ? 'bg-primary/20 text-primary-dark font-semibold shadow-glass-sm' 
                : 'text-text-muted hover:bg-white/30 hover:text-text-main'}
              ${isCollapsed ? 'justify-center' : ''}
            `}
          >
            {activeTab === item.id && (
              <div className="absolute left-0 top-0 w-1 h-full bg-primary rounded-r-full" />
            )}
            <item.icon size={20} className={`
              transition-colors
              ${activeTab === item.id ? 'text-primary-dark' : 'text-text-light group-hover:text-text-main'}
            `} />
            {!isCollapsed && <span className="text-sm">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <button 
          className={`
            w-full flex items-center gap-3 px-3 py-3 rounded-2xl text-red-500 hover:bg-red-50/50 hover:text-red-600 transition-colors
            ${isCollapsed ? 'justify-center' : ''}
          `}
        >
          <LogOut size={20} />
          {!isCollapsed && <span className="font-medium text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
};
