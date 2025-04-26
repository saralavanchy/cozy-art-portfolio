import React, { useState } from 'react';
import BackButton from './BackButton';

// Define the type for a quest
interface Quest {
  title: string;
  status: string;
  description: string;
  details: string;
  icon: string;
}

// Props for QuestLog
interface QuestLogProps {
  setScreen: React.Dispatch<React.SetStateAction<'menu' | 'quests' | 'inventory' | 'about'>>;
}

const quests: Quest[] = [
  {
    title: 'Quest Log',
    status: 'Coming Soon',
    description: 'This section will showcase my work experience in the form of completed quests and professional milestones.',
    details: 'Check back soon to view a detailed log of my roles, projects, and achievements throughout my creative career. Each quest will highlight the skills, collaborations, and impact of my work as a UI artist and designer.',
    icon: '🗂️',
  },
];

export default function QuestLog({ setScreen }: QuestLogProps) {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-12 animate-fade-in flex flex-col items-center">
      {/* Magical blurred background accents */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-[#F6D365]/30 via-[#B7D7B0]/40 to-[#F7CAC9]/20 blur-3xl rounded-full opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-52 h-32 bg-gradient-to-br from-[#F6D365]/30 to-[#B7D7B0]/10 blur-2xl rounded-full opacity-50 pointer-events-none" />
      {/* Wood card background and palette update */}
      <div className="relative z-10 w-full rounded-2xl border border-[#8C5C2E] shadow-xl p-10 flex flex-col items-center bg-wood-card overflow-hidden" style={{background: 'url(/assets/wood-seamless.jpg) center/cover repeat'}}>
        <span style={{position: 'absolute', inset: 0, background: 'rgba(40,24,8,0.55)', zIndex: 1, borderRadius: 'inherit'}} />
        <h2 className="text-4xl sm:text-5xl font-[Quicksand,Poppins,sans-serif] text-[#7ec49e] drop-shadow font-bold mb-6 flex items-center gap-3" style={{position: 'relative', zIndex: 2}}>
          Quest Log <span className="text-2xl">📜</span>
        </h2>
        <div className="flex flex-col gap-6 w-full" style={{position: 'relative', zIndex: 2}}>
          {quests.map((q, i) => (
            <div key={i} className="bg-[#fffbe6]/80 rounded-xl border-2 border-[#C2A13C] shadow p-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl">{q.icon}</span>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-[Quicksand,Poppins,sans-serif] text-xl text-[#8C5C2E] font-bold">{q.title}</h3>
                    <span className="text-sm bg-nature text-white px-3 py-1 rounded-full">{q.status}</span>
                  </div>
                  <p className="text-[#8C5C2E] mt-1">{q.description}</p>
                  <button
                    className="mt-2 text-magical underline text-sm font-[Quicksand,Poppins,sans-serif]"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                  >{expanded === i ? 'Hide details' : 'Show details'}</button>
                  {expanded === i && (
                    <div className="mt-2 text-sm text-gray-700 bg-white bg-opacity-60 rounded p-3 border border-[#C2A13C]">
                      {q.details}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BackButton onClick={() => setScreen('menu')} />
    </div>
  );
}
