
import React from 'react';
import { Game } from '../types';

interface HeroProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

const Hero: React.FC<HeroProps> = ({ games, onGameClick }) => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0 flex">
        {games.slice(0, 4).map((game, index) => (
          <div 
            key={game.id}
            onClick={() => onGameClick(game)}
            className={`relative flex-1 group cursor-pointer overflow-hidden h-full transition-all duration-700 hover:flex-[1.5] border-r border-white/10 last:border-0`}
          >
            {/* Split Image */}
            <img 
              src={game.bannerUrl} 
              alt={game.title}
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 brightness-[0.4] group-hover:brightness-[0.7]"
            />
            
            {/* Volumetric / Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-[1500ms] ease-out"></div>
            
            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-cyan-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Featured Title
                </p>
                <h2 className="text-4xl lg:text-5xl font-oswald text-white leading-tight mb-2 tracking-tight group-hover:metallic-text transition-all">
                  {game.title.split(' ').map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h2>
                <div className="h-[2px] w-0 group-hover:w-full bg-cyan-500 transition-all duration-700"></div>
              </div>
            </div>

            {/* Subtle Sparks / Glow on hover */}
            <div className={`absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-[-20deg] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}></div>
          </div>
        ))}
      </div>

      {/* Master Content Overlay */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <h3 className="text-white/40 text-xs font-bold tracking-[0.5em] mb-4 uppercase animate-pulse">
            Experience the Evolution
          </h3>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter metallic-text mb-6">
            ENTER THE NEXT LEVEL
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
