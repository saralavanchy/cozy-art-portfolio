import React, { ReactNode } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

interface BackButtonProps {
  onClick: () => void;
}

export default function BackButton({ onClick }: BackButtonProps): ReactNode {
  return (
    <div className="w-full flex mt-8 justify-start">
      <button
        className="flex flex-row items-center gap-2 rounded-full px-16 py-4 text-lg sm:text-xl font-[Quicksand,Poppins,sans-serif] font-extrabold transition-all duration-300 focus:outline-none text-center leading-none back-btn"
        style={{ display: 'flex', background: '#FFE066', color: '#8C5C2E', border: '4px solid #8C5C2E', boxShadow: '0 4px 24px 0 rgba(255,224,102,0.18)' }}
        onClick={onClick}
      >
        <ChevronLeftIcon className="h-6 w-6 font-bold stroke-[#8C5C2E] stroke-[3px]" />
        <span className="font-extrabold">Back</span>
      </button>
    </div>
  );
}
