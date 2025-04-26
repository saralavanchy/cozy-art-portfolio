import React from 'react';
import { Tooltip } from './Tooltip';

interface MainMenuProps {
  setScreen: (screen: 'menu' | 'quests' | 'inventory' | 'about') => void;
}

function MainMenu({ setScreen }: MainMenuProps) {
  // Custom touch handler for mobile to trigger onTouchMove instead of onClick
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  function handleButtonTouchMove(action: () => void) {
    return (e: React.TouchEvent) => {
      action();
      e.preventDefault();
    };
  }

  return (
    <div className="flex flex-col items-center gap-8 mt-10 animate-fade-in px-4">
      <div className="relative flex flex-col items-center w-full glass-panel">
        {/* Fairy floating animation - now using SVG */}
        <img
          src="/assets/fairy.svg"
          alt="Fairy"
          className="absolute left-1/2 -translate-x-1/2 -top-7 z-20 animate-fairy-float"
          style={{ width: '3.2rem', height: '3.2rem', filter: 'drop-shadow(0 0 16px #FFE066), drop-shadow(0 0 32px #FFE066)' }}
        />
        <h1 className="text-5xl sm:text-7xl font-extrabold drop-shadow-lg mb-6 text-center tracking-wide font-[Quicksand,Poppins,sans-serif]" style={{ color: '#17391B' }}>
          <span>🌿✨ Grisa ✨🌿</span>
        </h1>
      </div>
      <div className="flex flex-col gap-8 w-full max-w-xs mx-auto items-center">
        <Tooltip label="Portfolio">
          <button
            className="btn-modern magical-btn-dark px-8 py-4 text-lg sm:text-xl font-[Quicksand,Poppins,sans-serif] transition-all duration-300 focus:outline-none w-full min-w-[14rem]"
            onClick={() => setScreen('inventory')}
            {...(isTouch ? { onTouchMove: handleButtonTouchMove(() => setScreen('inventory')) } : {})}
          >
            Inventory
          </button>
        </Tooltip>
        <button
          className="btn-modern magical-btn-dark px-8 py-4 text-lg sm:text-xl font-[Quicksand,Poppins,sans-serif] transition-all duration-300 focus:outline-none w-full min-w-[14rem]"
          onClick={() => setScreen('about')}
          {...(isTouch ? { onTouchMove: handleButtonTouchMove(() => setScreen('about')) } : {})}
        >
          About Me
        </button>
        <Tooltip label="My work experience">
          <button
            className="btn-modern magical-btn-dark px-8 py-4 text-lg sm:text-xl font-[Quicksand,Poppins,sans-serif] transition-all duration-300 focus:outline-none w-full min-w-[14rem]"
            onClick={() => setScreen('quests')}
            {...(isTouch ? { onTouchMove: handleButtonTouchMove(() => setScreen('quests')) } : {})}
          >
            Quest Log
          </button>
        </Tooltip>
      </div>
      {/* Removed the welcome/portfolio description section as per user request */}
      <style>{`
        /* Removed custom tooltip styles */
      `}</style>
    </div>
  );
}

export default MainMenu;
