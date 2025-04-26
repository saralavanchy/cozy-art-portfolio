import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import '../magical-button.css';
import '../sparkle.css';

export default function About({ setScreen }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-12 animate-fade-in flex flex-col items-center">
      {/* Magical blurred background accents */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-[#F6D365]/30 via-[#B7D7B0]/40 to-[#F7CAC9]/20 blur-3xl rounded-full opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-52 h-32 bg-gradient-to-br from-[#F6D365]/30 to-[#B7D7B0]/10 blur-2xl rounded-full opacity-50 pointer-events-none" />
      {/* Wood card background and palette update */}
      <div className="relative z-10 w-full rounded-2xl border border-[#8C5C2E] shadow-xl p-10 flex flex-col items-center bg-wood-card overflow-hidden" style={{background: 'url(/assets/wood-seamless.jpg) center/cover repeat'}}>
        <span style={{position: 'absolute', inset: 0, background: 'rgba(40,24,8,0.55)', zIndex: 1, borderRadius: 'inherit'}} />
        <div className="flex flex-col items-center mb-6" style={{position: 'relative', zIndex: 2}}>
          <h2 className="text-4xl sm:text-5xl font-[Quicksand,Poppins,sans-serif] text-[#FFE066] drop-shadow font-bold mb-1 flex items-center gap-3">
            Grisa <span className="text-2xl">✨</span>
          </h2>
          <span className="text-[#B7D7B0] text-lg sm:text-xl font-[Quicksand,Poppins,sans-serif]">Artist & Software Engineer</span>
        </div>
        <p className="text-[#fffbe6] text-lg sm:text-xl text-center mb-4 max-w-2xl font-[Quicksand,Poppins,sans-serif]" style={{position: 'relative', zIndex: 2}}>
          Hi! I’m <span className="font-bold text-[#FFE066]">Grisa</span>, an Argentinian creative who bridges traditional art, digital design, and technology. My dream is to become a full-time artist who inspires and innovates in the world of videogames.<br/>
          <span className="block mt-3 text-base sm:text-lg text-[#FFE066] font-semibold">Fast learner • Team player • Agile workflow experience</span>
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-4" style={{position: 'relative', zIndex: 2}}>
          <span className="px-3 py-1 rounded-full bg-[#FFE066] text-[#17391B] font-[Quicksand,Poppins,sans-serif] text-sm font-semibold shadow border border-[#C2A13C]">Montreal, Canada</span>
          <span className="px-3 py-1 rounded-full bg-[#B7D7B0] text-[#17391B] font-[Quicksand,Poppins,sans-serif] text-sm font-semibold shadow border border-[#7AA57A]">LATAM Origins</span>
          <span className="px-3 py-1 rounded-full bg-[#FFD23F] text-[#17391B] font-[Quicksand,Poppins,sans-serif] text-sm font-semibold shadow border border-[#C2A13C]">Digital & Traditional Art</span>
          <span className="px-3 py-1 rounded-full bg-[#E9D6EC] text-[#17391B] font-[Quicksand,Poppins,sans-serif] text-sm font-semibold shadow border border-[#BFA1C2]">React & UI/UX</span>
          <span className="px-3 py-1 rounded-full bg-[#B7D7B0] text-[#17391B] font-[Quicksand,Poppins,sans-serif] text-sm font-semibold shadow border border-[#7AA57A]">Certified Digital Artist</span>
          <span className="px-3 py-1 rounded-full bg-[#FFD1CF] text-[#17391B] font-[Quicksand,Poppins,sans-serif] text-sm font-semibold shadow border border-[#C28C7A]">Adobe Suite</span>
          <span className="px-3 py-1 rounded-full bg-[#FFD1AA] text-[#17391B] font-[Quicksand,Poppins,sans-serif] text-sm font-semibold shadow border border-[#C2A47A]">Procreate</span>
          <span className="px-3 py-1 rounded-full bg-[#B7D7B0] text-[#17391B] font-[Quicksand,Poppins,sans-serif] text-sm font-semibold shadow border border-[#7AA57A]">Figma</span>
          <span className="px-3 py-1 rounded-full bg-[#E9D6EC] text-[#17391B] font-[Quicksand,Poppins,sans-serif] text-sm font-semibold shadow border border-[#BFA1C2]">Canva</span>
        </div>
        <p className="text-[#fffbe6] text-lg sm:text-xl text-center mb-4 max-w-xl font-[Quicksand,Poppins,sans-serif]" style={{position: 'relative', zIndex: 2}}>
          I see AI as a magical tool that enhances creativity and saves time—never a replacement for human imagination. All my portfolio projects are 100% human-made, but I’m excited by the possibilities that technology brings to art.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full justify-center" style={{position: 'relative', zIndex: 2}}>
          <div style={{position:'relative', display:'inline-block'}}>
            <button onClick={() => setScreen && setScreen('inventory')} className="flex flex-row rounded-xl items-center gap-2 px-16 py-4 text-lg sm:text-xl font-[Quicksand,Poppins,sans-serif] font-extrabold transition-all duration-300 focus:outline-none text-center leading-none magical-btn magical-btn-readable" style={{ display: 'flex', background: '#FFE066', color: '#8C5C2E', border: '4px solid #8C5C2E', boxShadow: '0 4px 24px 0 rgba(255,224,102,0.18)', minWidth: '12rem', minHeight: '3.5rem'}}>
              <span className="font-extrabold w-full text-center">View My Art</span>
            </button>
            <div className="sparkle-container">
              {Array.from({length: 3}).map((_, i) => (
                <span key={i} className="sparkle" style={{left: `${18 + 60*Math.random()}%`, top: `${16 + 60*Math.random()}%`, animationDelay: `${0.5*i + 0.2*Math.random()}s`}} />
              ))}
            </div>
          </div>
          <div style={{position:'relative', display:'inline-block'}}>
            <a href="mailto:saralavanchy94@gmail.com" className="flex flex-row rounded-xl items-center gap-2 px-16 py-4 text-lg sm:text-xl font-[Quicksand,Poppins,sans-serif] font-extrabold transition-all duration-300 focus:outline-none text-center leading-none magical-btn magical-btn-readable" style={{ display: 'flex', background: '#FFE066', color: '#8C5C2E', border: '4px solid #8C5C2E', boxShadow: '0 4px 24px 0 rgba(255,224,102,0.18)', minWidth: '12rem', minHeight: '3.5rem'}}>
              <span className="font-extrabold w-full text-center">Contact Me</span>
            </a>
            <div className="sparkle-container">
              {Array.from({length: 3}).map((_, i) => (
                <span key={i} className="sparkle" style={{left: `${18 + 60*Math.random()}%`, top: `${16 + 60*Math.random()}%`, animationDelay: `${0.5*i + 0.2*Math.random()}s`}} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center" style={{position: 'relative', zIndex: 2}}>
          <span className="italic text-[#fffbe6] text-center text-base sm:text-lg max-w-lg font-[Quicksand,Poppins,sans-serif]">“Creativity thrives where curiosity meets collaboration. I believe every project is an opportunity to learn, inspire, and build something extraordinary—together.”</span>
          <span className="text-[#B7D7B0] text-sm mt-1 font-[Quicksand,Poppins,sans-serif]">— Grisa</span>
        </div>
      </div>
      <div className="w-full flex mt-8 justify-start">
        <button className="flex flex-row rounded-full items-center gap-2 px-16 py-4 text-lg sm:text-xl font-[Quicksand,Poppins,sans-serif] font-extrabold transition-all duration-300 focus:outline-none text-center leading-none back-btn" style={{ display: 'flex', background: '#FFE066', color: '#8C5C2E', border: '4px solid #8C5C2E', boxShadow: '0 4px 24px 0 rgba(255,224,102,0.18)'}} onClick={() => setScreen('menu')}>
          <ChevronLeftIcon className="h-6 w-6 font-bold stroke-[#8C5C2E] stroke-[3px]" />
          <span className="font-extrabold">Back</span>
        </button>
      </div>
    </div>
  );
}
