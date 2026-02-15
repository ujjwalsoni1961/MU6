import React from 'react';
import { MoreVertical, Flag, CheckCircle, XCircle, Play } from 'lucide-react';
import { songs } from '../../mock/songs';

export const AdminSongs = () => {
  return (
    <div className="space-y-8 pb-8">
      <div className="flex items-center justify-between">
        <div><h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Song Management</h1><p className="text-text-muted mt-1 font-medium">{songs.length} songs on platform</p></div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block glass-card overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/20 bg-white/10">
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Song</th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Artist</th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Genre</th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Plays</th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-text-muted uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {songs.map((song, i) => (
              <tr key={song.id} className="hover:bg-white/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img src={song.coverImage} alt={song.title} className="w-12 h-12 rounded-xl object-cover shadow-sm ring-1 ring-white/50" />
                    <span className="font-bold text-gray-900 text-sm">{song.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-text-main font-medium">{song.artistName}</td>
                <td className="px-6 py-4"><span className="px-3 py-1 bg-white/40 text-text-dim rounded-lg text-xs font-bold border border-white/30">{song.genre}</span></td>
                <td className="px-6 py-4 text-sm text-text-dim font-mono">{(song.plays || 0).toLocaleString()}</td>
                <td className="px-6 py-4"><span className="flex items-center gap-1.5 text-xs font-bold text-green-700 bg-green-500/10 px-2 py-1 rounded-lg w-fit"><CheckCircle size={14} /> Approved</span></td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-white/50 text-text-muted hover:text-primary-dark transition-colors"><Play size={18} /></button>
                    <button className="p-2 rounded-lg hover:bg-red-500/10 text-text-muted hover:text-red-500 transition-colors"><Flag size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {songs.map(song => (
          <div key={song.id} className="glass-card p-4">
            <div className="flex items-center gap-4 mb-4">
              <img src={song.coverImage} alt={song.title} className="w-14 h-14 rounded-xl object-cover shadow-sm" />
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 text-sm truncate">{song.title}</h4>
                <p className="text-xs text-text-muted font-medium">{song.artistName}</p>
              </div>
              <span className="px-2 py-1 bg-green-500/10 text-green-700 text-xs rounded-lg font-bold">Live</span>
            </div>
            <div className="flex items-center justify-between text-xs pt-3 border-t border-white/20">
              <span className="text-text-muted font-medium">{(song.plays || 0).toLocaleString()} plays</span>
              <span className="text-text-muted font-bold bg-white/30 px-2 py-1 rounded-md">{song.genre}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
