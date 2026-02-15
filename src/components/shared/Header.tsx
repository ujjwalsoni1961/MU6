import React, { useState } from 'react';
import { Menu, X, Bell, Music, Hexagon, DollarSign, Settings, Search, User, LogOut, ChevronRight } from 'lucide-react';
import { WalletBadge } from './WalletBadge';
import { useCurrency } from '../../context/CurrencyContext';

interface HeaderProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  mode: 'streaming' | 'nft';
  onModeChange: (mode: 'streaming' | 'nft') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab = 'home', onTabChange, mode, onModeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currency, toggleCurrency } = useCurrency();

  const streamingNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'search', label: 'Search' },
    { id: 'library', label: 'Library' },
  ];

  const nftNavItems = [
    { id: 'home', label: 'Drops' },
    { id: 'marketplace', label: 'Marketplace' },
    { id: 'library', label: 'Collection' },
  ];

  const navItems = mode === 'streaming' ? streamingNavItems : nftNavItems;

  return (
    <header className="flex items-center justify-between px-8 py-6 z-20 relative">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-8 flex-1">
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="MU6" className="w-10 h-10 object-contain" />
        </div>

        <div className="relative w-full max-w-md hidden md:block">
          <input 
            type="text" 
            placeholder="Search songs, artists, NFTs..." 
            className="w-full px-5 py-3 rounded-2xl bg-white/40 border border-white/50 backdrop-blur-md text-text-main placeholder-text-muted text-sm font-medium focus:outline-none focus:bg-white/60 focus:shadow-glass-sm transition-all"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
        </div>
      </div>

      {/* Right: Profile & Mobile Menu Trigger */}
      <div className="flex items-center justify-end relative">
        <button 
          className="lg:hidden p-2 rounded-full bg-white/30 backdrop-blur-md text-text-main mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Profile Dropdown Container */}
        <div className="relative group z-50">
          {/* Avatar Trigger */}
          <div className="flex items-center gap-3 cursor-pointer py-2">
            <div className="text-right hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-bold text-text-main">CyberSoul</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px] shadow-lg group-hover:shadow-glow transition-all">
              <div className="w-full h-full rounded-full bg-white/90 flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Hover Dropdown Menu */}
          <div className="absolute right-0 top-full mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100">
            <div className="glass-panel p-2 rounded-3xl shadow-xl bg-white/80 backdrop-blur-xl border border-white/60">
              
              {/* User Info Section */}
              <div className="p-4 mb-2 bg-white/50 rounded-2xl border border-white/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="Profile" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">CyberSoul</p>
                    <p className="text-xs text-text-muted font-mono">0x71...976F</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => onTabChange?.('profile')}
                    className="flex-1 text-xs font-bold py-2 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    Profile
                  </button>
                  <button 
                    onClick={() => onTabChange?.('profile')}
                    className="flex-1 text-xs font-bold py-2 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors flex items-center justify-center gap-1"
                  >
                    <Settings size={12} /> Settings
                  </button>
                </div>
              </div>

              {/* Mode Toggle */}
              <div className="px-2 py-1 space-y-1">
                <p className="text-xs font-bold text-text-muted px-2 py-1 uppercase tracking-wider">Switch Mode</p>
                <div className="grid grid-cols-2 gap-2 p-1 bg-gray-100/50 rounded-xl">
                  <button
                    onClick={() => onModeChange('streaming')}
                    className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${
                      mode === 'streaming' ? 'bg-white shadow-sm text-primary-dark' : 'text-text-muted hover:text-text-main'
                    }`}
                  >
                    <Music size={14} /> Stream
                  </button>
                  <button
                    onClick={() => onModeChange('nft')}
                    className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${
                      mode === 'nft' ? 'bg-white shadow-sm text-secondary' : 'text-text-muted hover:text-text-main'
                    }`}
                  >
                    <Hexagon size={14} /> Collect
                  </button>
                </div>
              </div>

              <div className="h-px bg-gray-200/50 my-2 mx-2" />

              {/* Currency & Logout */}
              <div className="px-2 pb-2">
                <button 
                  onClick={toggleCurrency}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-text-main hover:bg-white/50 transition-colors mb-1"
                >
                  <span className="flex items-center gap-2"><DollarSign size={16} className="text-text-muted" /> Currency</span>
                  <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded-lg">{currency}</span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
                  <LogOut size={16} /> Disconnect
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay (unchanged logic for smaller screens) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-2xl z-50 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={() => setIsMenuOpen(false)}><X size={20} /></button>
          </div>
          
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { onTabChange?.(item.id); setIsMenuOpen(false); }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  activeTab === item.id ? 'bg-primary text-text-main' : 'text-text-dim hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => { onModeChange('streaming'); setIsMenuOpen(false); }}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold ${
                mode === 'streaming' ? 'bg-primary text-text-main' : 'bg-gray-100 text-text-muted'
              }`}
            >
              <Music size={16} /> Stream
            </button>
            <button
              onClick={() => { onModeChange('nft'); setIsMenuOpen(false); }}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold ${
                mode === 'nft' ? 'bg-secondary text-white' : 'bg-gray-100 text-text-muted'
              }`}
            >
              <Hexagon size={16} /> Collect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
