import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search songs, artists, NFTs..." }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-button leading-5 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:text-sm transition-all shadow-sm"
        placeholder={placeholder}
      />
    </div>
  );
};
