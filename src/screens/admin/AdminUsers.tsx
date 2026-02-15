import React, { useState } from 'react';
import { Search, Filter, MoreVertical, BadgeCheck, Ban, Eye } from 'lucide-react';
import { WalletBadge } from '../../components/shared/WalletBadge';

const mockUsers = [
  { id: '1', name: 'CyberSoul', email: 'cyber@mu6.io', role: 'Artist', wallet: '0x71C7...976F', status: 'Active', songs: 24, joined: 'Jan 15, 2025' },
  { id: '2', name: 'NeonByte', email: 'neon@mu6.io', role: 'Artist', wallet: '0x23D9...A4F1', status: 'Active', songs: 18, joined: 'Feb 3, 2025' },
  { id: '3', name: 'Alex Rivera', email: 'alex@email.com', role: 'Consumer', wallet: '0x89AB...CD12', status: 'Active', songs: 0, joined: 'Mar 12, 2025' },
  { id: '4', name: 'ShadowBass', email: 'shadow@mu6.io', role: 'Artist', wallet: '0x45EF...6789', status: 'Suspended', songs: 6, joined: 'Dec 8, 2024' },
  { id: '5', name: 'Maria Chen', email: 'maria@email.com', role: 'Consumer', wallet: '0xBC01...23DE', status: 'Active', songs: 0, joined: 'Jan 22, 2025' },
];

export const AdminUsers = () => {
  const [filterRole, setFilterRole] = useState('All');
  const roles = ['All', 'Artist', 'Consumer', 'Admin'];
  const filtered = filterRole === 'All' ? mockUsers : mockUsers.filter(u => u.role === filterRole);

  return (
    <div className="space-y-8 pb-8">
      <div className="flex items-center justify-between">
        <div><h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">User Management</h1><p className="text-text-muted mt-1 font-medium">{mockUsers.length} registered users</p></div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96 group">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-hover:text-primary-dark transition-colors" />
          <input className="w-full pl-12 pr-4 py-3 border border-white/50 rounded-xl bg-white/40 backdrop-blur-sm text-gray-900 text-sm font-medium placeholder-text-muted focus:outline-none focus:bg-white/60 focus:shadow-glass-sm transition-all" placeholder="Search users by name, email or wallet..." />
        </div>
        <div className="flex gap-2 p-1 bg-white/30 backdrop-blur-md rounded-xl border border-white/40">
          {roles.map(role => (
            <button key={role} onClick={() => setFilterRole(role)} className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${filterRole === role ? 'bg-white shadow-sm text-primary-dark' : 'text-text-muted hover:text-text-main'}`}>
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block glass-card overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/20 bg-white/10">
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">User</th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Wallet</th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Joined</th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {filtered.map(user => (
              <tr key={user.id} className="hover:bg-white/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-md ring-2 ring-white/50">{user.name[0]}</div>
                    <div><h4 className="font-bold text-gray-900 text-sm">{user.name}</h4><p className="text-xs text-text-muted font-medium">{user.email}</p></div>
                  </div>
                </td>
                <td className="px-6 py-4"><span className={`px-3 py-1 rounded-lg text-xs font-bold ${user.role === 'Artist' ? 'bg-secondary/10 text-secondary' : 'bg-white/50 text-text-dim'}`}>{user.role}</span></td>
                <td className="px-6 py-4 text-sm font-mono text-text-dim bg-white/20 px-2 py-1 rounded-md w-fit">{user.wallet}</td>
                <td className="px-6 py-4"><span className={`px-3 py-1 rounded-lg text-xs font-bold ${user.status === 'Active' ? 'bg-green-500/10 text-green-700' : 'bg-red-500/10 text-red-600'}`}>{user.status}</span></td>
                <td className="px-6 py-4 text-sm text-text-muted font-medium">{user.joined}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-white/50 text-text-muted hover:text-primary-dark transition-colors"><Eye size={18} /></button>
                    <button className="p-2 rounded-lg hover:bg-red-500/10 text-text-muted hover:text-red-500 transition-colors"><Ban size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {filtered.map(user => (
          <div key={user.id} className="glass-card p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-md">{user.name[0]}</div>
                <div><h4 className="font-bold text-gray-900 text-sm">{user.name}</h4><p className="text-xs text-text-muted font-medium">{user.role}</p></div>
              </div>
              <span className={`px-2 py-1 rounded-lg text-xs font-bold ${user.status === 'Active' ? 'bg-green-500/10 text-green-700' : 'bg-red-500/10 text-red-600'}`}>{user.status}</span>
            </div>
            <div className="flex items-center justify-between text-xs pt-3 border-t border-white/20">
              <span className="text-text-muted font-medium">Joined {user.joined}</span>
              <button className="text-secondary font-bold hover:underline">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
