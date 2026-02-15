import React from 'react';

interface GenreTagProps {
  genre: string;
  onClick?: () => void;
  selected?: boolean;
}

export const GenreTag: React.FC<GenreTagProps> = ({ genre, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap border
        ${selected 
          ? 'bg-primary/20 text-primary-dark border-primary/30 shadow-sm backdrop-blur-sm' 
          : 'bg-white/40 text-text-muted border-white/50 hover:bg-white/60 hover:text-text-main hover:border-white/70 backdrop-blur-sm'}
      `}
    >
      {genre}
    </button>
  );
};
