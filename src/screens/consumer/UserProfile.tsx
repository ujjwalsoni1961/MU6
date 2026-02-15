import React, { useState } from 'react';
import { 
  User, Settings, Wallet, Bell, Shield, HelpCircle, LogOut, 
  ChevronRight, Camera, Mail, Lock, Globe, Moon, Sun, Smartphone, CreditCard, Check 
} from 'lucide-react';
import { WalletBadge } from '../../components/shared/WalletBadge';

export const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    marketing: false,
    updates: true
  });
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  const menuItems = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'wallet', label: 'Wallet', icon: Wallet },
    { id: 'subscription', label: 'Subscription', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'help', label: 'Help & Support', icon: HelpCircle },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-text-main mb-4">Profile Information</h3>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative group cursor-pointer">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white/50 shadow-glass-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200" 
                      alt="Profile" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="flex-1 space-y-4 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Display Name</label>
                      <input 
                        type="text" 
                        defaultValue="CyberSoul" 
                        className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-text-main"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Username</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted font-medium">@</span>
                        <input 
                          type="text" 
                          defaultValue="cybersoul" 
                          className="w-full pl-8 pr-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-text-main"
                        />
                      </div>
                    </div>
                    <div className="space-y-1 md:col-span-2">
                      <label className="text-xs font-bold text-text-muted uppercase tracking-wider">Bio</label>
                      <textarea 
                        defaultValue="Digital collector and electronic music enthusiast. Building the future of sound." 
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-text-main resize-none"
                      />
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-primary text-text-main font-bold rounded-xl shadow-button hover:shadow-glow hover:-translate-y-0.5 transition-all">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-text-main mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/40 rounded-xl border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Mail size={20} className="text-text-muted" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-main">Email Address</p>
                      <p className="text-xs text-text-muted">cyber.soul@example.com</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-secondary hover:text-secondary-dark px-3 py-1.5 rounded-lg hover:bg-secondary/10 transition-colors">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'wallet':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="p-8 rounded-[32px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <p className="text-sm text-gray-400 font-bold mb-1 uppercase tracking-wider">Total Balance</p>
                    <h2 className="text-5xl font-extrabold tracking-tight">$12,450.00</h2>
                  </div>
                  <WalletBadge address="0x71C...976F" className="bg-white/10 border-white/20 text-white backdrop-blur-md" />
                </div>
                
                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-primary text-gray-900 font-bold rounded-2xl hover:bg-primary-light transition-all shadow-lg hover:shadow-primary/25">
                    Deposit
                  </button>
                  <button className="flex-1 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/10 backdrop-blur-md">
                    Withdraw
                  </button>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-text-main mb-4">Connected Wallets</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white/40 rounded-xl border border-white/50 group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="MetaMask" className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-text-main">MetaMask</p>
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-600 border border-green-500/20">Active</span>
                      </div>
                      <p className="text-xs text-text-muted font-mono">0x71C...976F</p>
                    </div>
                  </div>
                  <button className="text-text-muted hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors">
                    <LogOut size={18} />
                  </button>
                </div>

                <button className="w-full py-4 border-2 border-dashed border-gray-300 rounded-xl text-text-muted font-bold text-sm hover:border-secondary hover:text-secondary hover:bg-secondary/5 transition-all flex items-center justify-center gap-2">
                  <Wallet size={18} /> Connect Another Wallet
                </button>
              </div>
            </div>
          </div>
        );

      case 'subscription':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="glass-card p-6 border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-text-main">Current Plan</h3>
                  <p className="text-sm text-text-muted mt-1">Manage your subscription and billing</p>
                </div>
                <span className="bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Pro Member
                </span>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-gray-900">$9.99</span>
                <span className="text-text-muted font-medium">/month</span>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "Ad-free listening",
                  "High-quality audio (320kbps)",
                  "Offline downloads",
                  "Exclusive NFT drops access"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-text-main">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-3 bg-white border border-gray-200 text-text-main font-bold rounded-xl hover:bg-gray-50 transition-colors">
                  Manage Billing
                </button>
                <button className="flex-1 py-3 bg-red-50 text-red-600 border border-red-100 font-bold rounded-xl hover:bg-red-100 transition-colors">
                  Cancel Plan
                </button>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-text-main mb-6">Billing History</h3>
              <div className="space-y-2">
                {[
                  { date: "Oct 1, 2023", amount: "$9.99", status: "Paid", invoice: "#INV-2023-001" },
                  { date: "Sep 1, 2023", amount: "$9.99", status: "Paid", invoice: "#INV-2023-002" },
                  { date: "Aug 1, 2023", amount: "$9.99", status: "Paid", invoice: "#INV-2023-003" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/40 rounded-xl border border-white/50 hover:bg-white/60 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-text-muted">
                        <CreditCard size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-main">{item.date}</p>
                        <p className="text-xs text-text-muted font-mono">{item.invoice}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-text-main">{item.amount}</p>
                      <span className="text-[10px] font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'subscription':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="glass-card p-6 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-text-main">Current Plan</h3>
                  <p className="text-sm text-text-muted mt-1">Manage your subscription and billing</p>
                </div>
                <div className="bg-primary/10 text-primary-dark border border-primary/20 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Pro Member
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-gray-900">$9.99</span>
                <span className="text-text-muted font-medium">/month</span>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "Ad-free listening",
                  "High-quality audio (320kbps)",
                  "Offline downloads",
                  "Exclusive NFT drops access"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Check size={12} className="text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-text-main">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="flex-1 py-3 bg-white border border-gray-200 text-text-main font-bold rounded-xl hover:bg-gray-50 transition-colors">
                  Manage Billing
                </button>
                <button className="flex-1 py-3 bg-red-50 text-red-600 border border-red-100 font-bold rounded-xl hover:bg-red-100 transition-colors">
                  Cancel Plan
                </button>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-text-main mb-6">Billing History</h3>
              <div className="space-y-2">
                {[
                  { date: "Oct 1, 2023", amount: "$9.99", status: "Paid", invoice: "#INV-2023-001" },
                  { date: "Sep 1, 2023", amount: "$9.99", status: "Paid", invoice: "#INV-2023-002" },
                  { date: "Aug 1, 2023", amount: "$9.99", status: "Paid", invoice: "#INV-2023-003" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/40 rounded-xl border border-white/50 hover:bg-white/60 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-text-muted">
                        <CreditCard size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text-main">{item.date}</p>
                        <p className="text-xs text-text-muted font-mono">{item.invoice}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-text-main">{item.amount}</p>
                      <span className="text-[10px] font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-text-main mb-6">Notification Preferences</h3>
              
              <div className="space-y-6">
                {[
                  { id: 'email', label: 'Email Notifications', desc: 'Get emails about your account activity and transactions.' },
                  { id: 'push', label: 'Push Notifications', desc: 'Receive real-time updates on your device.' },
                  { id: 'updates', label: 'Product Updates', desc: 'Stay informed about new features and improvements.' },
                  { id: 'marketing', label: 'Marketing', desc: 'Receive offers and promotions from our partners.' }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-text-main">{item.label}</p>
                      <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={(notifications as any)[item.id]} 
                        onChange={() => setNotifications({ ...notifications, [item.id]: !(notifications as any)[item.id] })}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-text-main mb-6">Security Settings</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/40 rounded-xl border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Lock size={20} className="text-text-muted" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-main">Password</p>
                      <p className="text-xs text-text-muted">Last changed 3 months ago</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white border border-gray-200 text-text-main font-bold text-xs rounded-lg hover:bg-gray-50 transition-colors">
                    Update
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/40 rounded-xl border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Smartphone size={20} className="text-text-muted" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-main">Two-Factor Authentication</p>
                      <p className="text-xs text-text-muted">Not enabled</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-primary/10 text-primary-dark border border-primary/20 font-bold text-xs rounded-lg hover:bg-primary/20 transition-colors">
                    Enable
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

        case 'help':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold text-text-main mb-6">Help & Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   { title: "FAQs", desc: "Find answers to common questions" },
                   { title: "Contact Support", desc: "Get help from our team" },
                   { title: "Community Guidelines", desc: "Read our community rules" },
                   { title: "Terms of Service", desc: "View our legal terms" }
                 ].map((item, i) => (
                   <button key={i} className="text-left p-4 bg-white/40 hover:bg-white/60 border border-white/50 rounded-xl transition-all group">
                     <div className="flex justify-between items-center mb-1">
                       <span className="font-bold text-text-main text-sm">{item.title}</span>
                       <ChevronRight size={16} className="text-text-muted group-hover:translate-x-1 transition-transform" />
                     </div>
                     <p className="text-xs text-text-muted">{item.desc}</p>
                   </button>
                 ))}
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="pb-24 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Settings</h1>
        <p className="text-text-muted mt-1 font-medium">Manage your account preferences and settings.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="glass-card p-2 space-y-1 sticky top-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isActive 
                      ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20' 
                      : 'text-text-muted hover:bg-white/50 hover:text-text-main'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
            
            <div className="h-px bg-gray-200/50 my-2 mx-2" />
            
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 transition-colors">
              <LogOut size={18} />
              Log Out
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 min-w-0">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
