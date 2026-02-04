
import React from 'react';
import { Smartphone, Star, Download } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative bg-[#0d0d0d] border border-white/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(6,182,212,0.1)]"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={game.imageUrl} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60"></div>
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 flex items-center gap-1">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          <span className="text-[10px] font-bold text-white">{game.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
            {game.title}
          </h3>
        </div>
        <p className="text-white/40 text-[11px] leading-tight mb-4 line-clamp-2">
          {game.subtitle}
        </p>

        <div className="flex items-center justify-between text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-6">
          <div className="flex items-center gap-2">
            <Smartphone size={12} />
            <span>{game.platforms.join(' / ')}</span>
          </div>
          <span>{game.size}</span>
        </div>

        {/* Download Button Shadow Mockup */}
        <div className="relative w-full h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-all overflow-hidden">
          <span className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
            <Download size={14} /> Get Game
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
