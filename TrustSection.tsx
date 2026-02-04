
import React from 'react';
import { ShieldCheck, Zap, Gift } from 'lucide-react';

const TrustSection: React.FC = () => {
  const blocks = [
    {
      icon: <ShieldCheck className="text-cyan-400" size={32} />,
      title: "Secure and verified downloads",
      desc: "All flagship titles undergo rigorous security audits and integrity checks for a safe experience."
    },
    {
      icon: <Zap className="text-cyan-400" size={32} />,
      title: "Lightning-fast experience",
      desc: "Optimized infrastructure ensuring the fastest browsing and one-tap installs across platforms."
    },
    {
      icon: <Gift className="text-cyan-400" size={32} />,
      title: "Exclusive rewards and bonuses",
      desc: "Unlock premium in-game items, currency packs, and limited edition cosmetics through our portal."
    }
  ];

  return (
    <div className="mt-32 py-20 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {blocks.map((block, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="mb-6 p-6 bg-white/5 border border-white/10 rounded-3xl transition-all duration-500 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 group-hover:-translate-y-2 shadow-xl">
              {block.icon}
            </div>
            <h3 className="text-lg font-bold mb-3 metallic-text uppercase tracking-widest">{block.title}</h3>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">{block.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
