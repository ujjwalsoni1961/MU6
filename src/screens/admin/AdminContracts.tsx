import React from 'react';
import { FileText, ExternalLink, CheckCircle, Clock, AlertTriangle, Copy } from 'lucide-react';

const mockContracts = [
  { id: '1', name: 'MU6 NFT Marketplace', address: '0x1234...ABCD', type: 'Marketplace', status: 'Active', deployed: 'Nov 15, 2024', txCount: 8920 },
  { id: '2', name: 'MU6 Token (MU6)', address: '0x5678...EFGH', type: 'ERC-20', status: 'Active', deployed: 'Oct 1, 2024', txCount: 45000 },
  { id: '3', name: 'Music NFT Factory', address: '0x9ABC...IJKL', type: 'Factory', status: 'Active', deployed: 'Nov 20, 2024', txCount: 3240 },
  { id: '4', name: 'Royalty Splitter v1', address: '0xDEF0...MNOP', type: 'Royalty', status: 'Deprecated', deployed: 'Sep 5, 2024', txCount: 1200 },
  { id: '5', name: 'Royalty Splitter v2', address: '0x3456...QRST', type: 'Royalty', status: 'Active', deployed: 'Jan 10, 2025', txCount: 890 },
];

export const AdminContracts = () => {
  return (
    <div className="space-y-8 pb-8">
      <div className="flex items-center justify-between">
        <div><h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Smart Contracts</h1><p className="text-text-muted mt-1 font-medium">Deployed contracts and their status.</p></div>
        <button className="px-6 py-2.5 bg-primary/20 text-primary-dark border border-primary/30 font-bold rounded-xl hover:bg-primary/30 hover:shadow-button transition-all text-sm active:scale-95">Deploy New</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 text-center"><FileText size={32} className="text-secondary mx-auto mb-3" /><h3 className="text-3xl font-extrabold text-gray-900">{mockContracts.length}</h3><p className="text-sm text-text-muted font-bold uppercase tracking-wider">Total Contracts</p></div>
        <div className="glass-card p-6 text-center"><CheckCircle size={32} className="text-green-600 mx-auto mb-3" /><h3 className="text-3xl font-extrabold text-gray-900">{mockContracts.filter(c => c.status === 'Active').length}</h3><p className="text-sm text-text-muted font-bold uppercase tracking-wider">Active</p></div>
        <div className="glass-card p-6 text-center"><h3 className="text-3xl font-extrabold text-gray-900">{mockContracts.reduce((a, c) => a + c.txCount, 0).toLocaleString()}</h3><p className="text-sm text-text-muted font-bold uppercase tracking-wider">Total Transactions</p></div>
      </div>

      <div className="space-y-4">
        {mockContracts.map(contract => (
          <div key={contract.id} className="glass-card hover:shadow-glass-lg transition-all p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-5">
                <div className={`p-4 rounded-xl shadow-sm ${contract.status === 'Active' ? 'bg-primary/10' : 'bg-gray-100'}`}><FileText size={24} className={contract.status === 'Active' ? 'text-primary-dark' : 'text-gray-400'} /></div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-gray-900 text-lg">{contract.name}</h3>
                    <span className={`px-2 py-0.5 rounded-lg text-xs font-bold ${contract.status === 'Active' ? 'bg-green-500/10 text-green-700' : 'bg-gray-100 text-gray-500'}`}>{contract.status}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono text-text-muted bg-white/30 px-2 py-1 rounded-md w-fit">
                    {contract.address}
                    <Copy size={14} className="cursor-pointer hover:text-gray-900 transition-colors" />
                    <ExternalLink size={14} className="cursor-pointer hover:text-gray-900 transition-colors" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8 text-sm border-t md:border-t-0 border-white/20 pt-4 md:pt-0">
                <div><p className="text-text-muted text-xs font-bold uppercase tracking-wider mb-1">Type</p><p className="font-bold text-gray-900">{contract.type}</p></div>
                <div><p className="text-text-muted text-xs font-bold uppercase tracking-wider mb-1">Transactions</p><p className="font-bold text-gray-900">{contract.txCount.toLocaleString()}</p></div>
                <div><p className="text-text-muted text-xs font-bold uppercase tracking-wider mb-1">Deployed</p><p className="font-bold text-gray-900">{contract.deployed}</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
