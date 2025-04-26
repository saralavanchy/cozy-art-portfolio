import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import QuestLog from './components/QuestLog';
import Inventory from './components/Inventory';
import About from './components/About';
import FairyLights from './components/FairyLights';

export default function App() {
  const [screen, setScreen] = useState<'menu' | 'quests' | 'inventory' | 'about'>('menu');

  return (
    <div
      style={{
        backgroundImage: 'url(/assets/forest.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="min-h-screen w-full relative"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Central radial gradient overlay for focus */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 55%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0.00) 75%)",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="relative z-10">
        <div className="min-h-screen flex flex-col items-center justify-center relative">
          {screen === 'menu' && <MainMenu setScreen={setScreen} />}
          {screen === 'quests' && <QuestLog setScreen={setScreen} />}
          {screen === 'inventory' && <Inventory setScreen={setScreen} />}
          {screen === 'about' && <About setScreen={setScreen} />}
        </div>
        <FairyLights />
      </div>
    </div>
  );
}
