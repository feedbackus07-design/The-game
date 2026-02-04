
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import TrustSection from './components/TrustSection';
import GameOverlay from './components/GameOverlay';
import { GAMES } from './constants';
import { Game } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => 
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-cyan-500/30">
      <Header onSearch={setSearchQuery} />
      
      <main className="relative pb-24">
        <Hero games={GAMES} onGameClick={setSelectedGame} />
        
        <div id="games-section" className="max-w-7xl mx-auto px-6 mt-12 md:mt-[-100px] relative z-20">
          <div className="flex flex-col mb-12">
            <h2 className="text-4xl font-oswald metallic-text mb-2 tracking-wider">FLAGSHIP TITLES</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </div>
          
          <GameGrid games={filteredGames} onGameClick={setSelectedGame} />
          
          <TrustSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-oswald metallic-text tracking-tighter">THE GAME</h1>
            <p className="text-white/40 text-sm mt-2">© 2025 THE GAME STUDIO PORTAL. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex gap-8 text-white/60 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">SUPPORT</a>
          </div>
        </div>
      </footer>

      {/* Overlay Modal */}
      {selectedGame && (
        <GameOverlay 
          game={selectedGame} 
          onClose={() => setSelectedGame(null)} 
        />
      )}
    </div>
  );
};

export default App;
