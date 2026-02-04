
import React from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-1 flex justify-start items-center">
          <h1 className="text-3xl font-oswald italic tracking-tighter metallic-text select-none cursor-pointer">
            THE GAME
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl hidden md:block">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-white/30 group-focus-within:text-cyan-400 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="SEARCH TITLES..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-11 pr-4 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:bg-white/10 transition-all placeholder:text-white/20"
            />
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex-1 flex justify-end gap-6 items-center">
          <button className="text-xs font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
            Browse
          </button>
          <button className="text-xs font-bold tracking-[0.2em] text-white/50 hover:text-white transition-colors uppercase">
            Rewards
          </button>
          <button className="px-5 py-2 bg-white/5 border border-white/10 rounded-sm text-[10px] font-black tracking-widest hover:bg-white/10 hover:border-cyan-500/50 transition-all uppercase">
            Sign In
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
