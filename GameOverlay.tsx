
import React, { useEffect } from 'react';
import { X, Star, Download, ShieldCheck, Zap, Globe, Smartphone } from 'lucide-react';
import { Game } from '../types';

interface GameOverlayProps {
  game: Game;
  onClose: () => void;
}

const GameOverlay: React.FC<GameOverlayProps> = ({ game, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl transition-opacity animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Content Modal */}
      <div className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-black/50 border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all"
        >
          <X size={24} />
        </button>

        {/* Left Section: Visuals */}
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <img 
            src={game.imageUrl} 
            alt={game.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
          
          <div className="absolute bottom-8 left-8">
            <div className="flex items-center gap-2 mb-4">
              {game.platforms.includes('iOS') && <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10"><Smartphone size={20} /></div>}
              {game.platforms.includes('Android') && <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/10"><Globe size={20} /></div>}
            </div>
            <h2 className="text-5xl font-black italic tracking-tighter metallic-text uppercase mb-2">
              {game.title}
            </h2>
            <p className="text-cyan-400 font-bold tracking-widest text-xs uppercase">
              {game.subtitle}
            </p>
          </div>
        </div>

        {/* Right Section: Details */}
        <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[80vh] md:max-h-full">
          <div className="flex items-center gap-6 mb-8 text-white/60">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Rating</span>
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <span className="text-lg font-bold text-white">{game.rating}</span>
              </div>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Size</span>
              <span className="text-lg font-bold text-white">{game.size}</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/30">Version</span>
              <span className="text-lg font-bold text-white">{game.version}</span>
            </div>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mb-10">
            {game.description}
          </p>

          <div className="mb-10">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400 mb-4">Key Features</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {game.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl">
                  <Zap size={14} className="text-cyan-400" />
                  <span className="text-[11px] font-medium text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              <Download size={20} strokeWidth={3} /> Download Now
            </button>
            <div className="flex items-center justify-center gap-2 text-[10px] text-white/30 font-bold uppercase">
              <ShieldCheck size={14} /> Official Verified Store Link
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOverlay;
