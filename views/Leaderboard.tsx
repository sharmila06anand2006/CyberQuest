
import React from 'react';

const MOCK_LEADERBOARD = [
  { name: 'NullPointer', xp: 12500, level: 25, rank: 1, avatar: 'https://picsum.photos/31' },
  { name: 'BioHazard', xp: 10200, level: 21, rank: 2, avatar: 'https://picsum.photos/32' },
  { name: 'Firewall_X', xp: 9800, level: 20, rank: 3, avatar: 'https://picsum.photos/33' },
  { name: 'CryptoKnight', xp: 8500, level: 17, rank: 4, avatar: 'https://picsum.photos/34' },
  { name: 'Agent_Cyber', xp: 50, level: 1, rank: 99, avatar: 'https://picsum.photos/35' },
];

export default function Leaderboard({ onNavigate }: any) {
  return (
    <div className="flex-1 flex flex-col p-6 space-y-8 pb-32 overflow-y-auto">
      <div className="text-center space-y-2 py-4">
        <h2 className="text-3xl font-orbitron font-bold neon-text-magenta">Global Ranking</h2>
        <p className="text-slate-500 text-sm">Top Global Defenders</p>
      </div>

      <div className="flex justify-center items-end space-x-2 h-48 mb-8">
        {/* Top 3 Podium */}
        <div className="flex-1 flex flex-col items-center">
          <img src={MOCK_LEADERBOARD[1].avatar} className="w-12 h-12 rounded-full border-2 border-slate-500 mb-2" />
          <div className="w-full h-24 bg-slate-800 rounded-t-xl flex items-center justify-center text-xl font-black">2</div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <div className="mb-2 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl">👑</div>
            <img src={MOCK_LEADERBOARD[0].avatar} className="w-16 h-16 rounded-full border-4 border-yellow-500" />
          </div>
          <div className="w-full h-32 bg-gradient-to-t from-violet-600 to-magenta-500 rounded-t-xl flex items-center justify-center text-2xl font-black shadow-[0_0_20px_#8b5cf666]">1</div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <img src={MOCK_LEADERBOARD[2].avatar} className="w-12 h-12 rounded-full border-2 border-orange-700 mb-2" />
          <div className="w-full h-20 bg-slate-900 rounded-t-xl flex items-center justify-center text-xl font-black">3</div>
        </div>
      </div>

      <div className="space-y-3">
        {MOCK_LEADERBOARD.map((user, i) => (
          <div key={i} className={`glass rounded-2xl p-4 flex items-center justify-between border-white/5 ${user.name === 'Agent_Cyber' ? 'border-magenta-500 bg-magenta-500/10' : ''}`}>
            <div className="flex items-center space-x-4">
              <span className="w-6 font-black font-orbitron text-slate-500 text-sm">{user.rank}</span>
              <img src={user.avatar} className="w-10 h-10 rounded-full border border-white/10" />
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-[10px] text-slate-500 uppercase font-black">Level {user.level}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-orbitron font-bold text-violet-400">{user.xp}</p>
              <p className="text-[8px] text-slate-500 uppercase">Total XP</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
