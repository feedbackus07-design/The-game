
import React from 'react';
import { Game } from '../types';
import GameCard from './GameCard';

interface GameGridProps {
  games: Game[];
  onGameClick: (game: Game) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ games, onGameClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {games.length > 0 ? (
        games.map(game => (
          <GameCard key={game.id} game={game} onClick={() => onGameClick(game)} />
        ))
      ) : (
        <div className="col-span-full py-24 text-center">
          <p className="text-white/40 font-medium tracking-widest uppercase">No games found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default GameGrid;
