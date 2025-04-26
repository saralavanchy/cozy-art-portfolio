import React, { useRef, useState } from 'react';
import '../magical-button.css';
import BackButton from './BackButton';

// Define the type for an inventory item
interface InventoryItem {
  name: string;
  icon: string;
  img?: string;
  description: string;
  fullDescription?: string;
  lore: string;
}

// Props for Inventory
interface InventoryProps {
  setScreen: React.Dispatch<React.SetStateAction<'menu' | 'quests' | 'inventory' | 'about'>>;
}

const items: InventoryItem[] = [
  {
    name: 'Art Time',
    icon: '⏳',
    img: '/assets/art-time.jpg',
    description: 'Graphite pencil drawing on paper, exploring the concept of time through art.',
    lore: 'Created with graphite pencil on paper, this piece reflects on the passage of time and the creative process. Digitized for the portfolio.',
  },
  {
    name: 'Clothes Design',
    icon: '👗',
    img: '/assets/clothes-design.jpg',
    description: 'Concept character portrait for a fantasy RPG, featuring a woman in ornate attire.',
    fullDescription: 'A concept character portrait designed for game development, featuring a woman with a calm, inviting expression. Her attire showcases intricate, fantasy-inspired textile patterns that could easily belong to a noble NPC, a quest-giver, or a key story character in a narrative-driven RPG. The detailed rendering of facial features and clothing provides strong visual cues for personality and backstory, making this artwork ideal for character sheets, dialogue portraits, or promotional material in immersive game worlds.',
    lore: 'Created with traditional graphite pencil, this piece demonstrates a blend of character design and costume illustration tailored for the videogame industry. The subject’s poised demeanor and ornate garment hint at a rich narrative, encouraging players to imagine her role—perhaps as a wise mentor, a mysterious ally, or a central figure in a branching storyline. The artwork’s attention to detail supports world-building and character-driven storytelling, making it a versatile asset for concept art pipelines and in-game use.',
  },
  {
    name: 'They Look at You: Part 1',
    icon: '👁️',
    img: '/assets/they-look-at-you.jpg',
    description: 'A graphite study of haunting, hyper-real eyes—designed for a monster concept.',
    fullDescription: '"They Look at You" is a graphite pencil exploration of realistic, expressive eyes, each rendered with meticulous attention to texture and light. The composition evokes an unsettling sense of being watched, perfect for character or creature design in games or narrative art. The eyes are intentionally uncanny, balancing beauty and unease, and could belong to a shapeshifter, spirit, or otherworldly monster. This piece demonstrates technical skill in anatomy and shading, as well as the ability to convey emotion and narrative through a single feature.',
    lore: 'Drawn on heavyweight paper with a range of graphite pencils, this study was inspired by the challenge of making the familiar—human eyes—feel strange and otherworldly. The careful layering and blending techniques bring out the glassy reflections and intricate lashes, while the arrangement of the eyes hints at a creature that sees from all angles. Ideal for portfolios focused on concept art, horror, or fantasy, this work showcases both foundational technique and imaginative worldbuilding.',
  },
  {
    name: 'They Look at You: Part 2',
    icon: '👁️',
    img: '/assets/they-look-at-you-part-2.png',
    description: 'A graphite-style monster of eyes and tentacles—my original concept, realized with AI assistance.',
    fullDescription: '"They Look at You: Part 2" is the next evolution of my eye monster concept. This spherical, tentacled creature is made entirely of hyper-real human eyes, each rendered with graphite-style detail. The unsettling, all-seeing form blends fantasy and horror, with the tentacles adding a sense of movement and otherworldliness. While AI tools accelerated the rendering, the idea, composition, and direction are entirely my own, showing how technology can support personal creativity.',
    lore: 'Inspired by my hand-drawn studies of eyes, this monster design explores the uncanny boundary between the familiar and the alien. The use of AI allowed for rapid iteration and refinement, but every aspect—from the arrangement of the eyes to the organic tentacles—was guided by my vision. This piece demonstrates how traditional skills and new tools can combine to push creative boundaries in concept art, especially for games and speculative fiction.',
  },
  {
    name: 'Elf Portrait',
    icon: '🧝',
    img: '/assets/elf-portrait.jpg',
    description: 'Graphite pencil portrait of a serene elf on paper, with glowing eyes and intricate jewelry.',
    lore: 'Drawn traditionally with graphite pencil on paper, then digitized. Inspired by fantasy novels and RPG character design.',
  },
  {
    name: 'The Girl with the Pearl Earring Study',
    icon: '🎨',
    img: '/assets/the-girl-of-the-pearl.jpg',
    description: 'Graphite pencil study of Vermeer’s iconic “Girl with a Pearl Earring”, focusing on classical portrait techniques.',
    fullDescription: 'A graphite pencil study inspired by Johannes Vermeer’s “Girl with a Pearl Earring.” This drawing explores the delicate rendering of light, shadow, and subtle facial expression that define the original masterpiece. The use of traditional graphite on paper allows for soft gradients and fine details, capturing the luminous quality of the skin and the enigmatic gaze of the subject. This piece demonstrates a commitment to mastering classical techniques while interpreting a timeless work through a personal lens.',
    lore: 'Created as part of an ongoing exploration of art history and classical portraiture, this study was drawn using graphite pencils on high-quality paper. Special attention was given to the reflective qualities of the pearl, the softness of the fabric, and the nuanced transitions in the subject’s face. The process involved careful observation and layering, aiming to honor Vermeer’s approach while developing technical skill and a deeper understanding of traditional realism. Ideal for portfolios seeking to showcase foundational art abilities and respect for the Old Masters.',
  },
];

export default function Inventory({ setScreen }: InventoryProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  // Arrow handlers
  const scrollByCard = (dir: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector('.gallery-card') as HTMLDivElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth + 32; // gap-8 = 2rem = 32px
    container.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setDragStartX(e.touches[0].clientX);
    setScrollLeftStart(scrollRef.current?.scrollLeft ?? 0);
  };
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (dragStartX === null) return;
    const dx = dragStartX - e.touches[0].clientX;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeftStart + dx;
    }
  };
  const onTouchEnd = () => setDragStartX(null);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-12 animate-fade-in flex flex-col items-center">
      {/* Magical blurred background accents */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[40rem] h-40 bg-gradient-to-r from-[#F6D365]/30 via-[#B7D7B0]/40 to-[#F7CAC9]/20 blur-3xl rounded-full opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-40 bg-gradient-to-br from-[#F6D365]/30 to-[#B7D7B0]/10 blur-2xl rounded-full opacity-50 pointer-events-none" />
      {/* Wood card background and palette update */}
      <div className="relative z-10 w-full rounded-2xl border border-[#8C5C2E] shadow-xl p-14 flex flex-col items-center bg-wood-card overflow-hidden" style={{background: 'url(/assets/wood-seamless.jpg) center/cover repeat'}}>
        {/* Background overlay only */}
        <span style={{position: 'absolute', inset: 0, background: 'rgba(40,24,8,0.55)', zIndex: 1, borderRadius: 'inherit', pointerEvents: 'none'}} />
        <h2 className="text-5xl sm:text-6xl font-[Quicksand,Poppins,sans-serif] text-[#FFE066] drop-shadow font-bold mb-10 flex items-center gap-5" style={{position: 'relative', zIndex: 2}}>
         <span className="text-3xl sm:text-4xl">🖌️</span> Inventory
        </h2>
        {/* Minimal horizontal scrollable gallery, no arrows */}
        <div className="relative w-full z-10">
          <div
            ref={scrollRef}
            className="flex flex-row gap-8 overflow-x-auto overflow-y-hidden minimal-scrollbar py-2"
            style={{scrollSnapType:'x mandatory', maxHeight: 'calc(100vh - 24rem)', overflowY: 'hidden'}}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Spacer at start to prevent first card from scaling out of view */}
            <div className="shrink-0" style={{width: '3.5rem'}} aria-hidden="true" />
            {items.map((item, i) => (
              <div
                key={i}
                className="gallery-card bg-[#fffbe6]/80 rounded-2xl border-2 border-[#C2A13C] p-6 my-8 shadow flex flex-col items-center cursor-pointer hover:scale-105 transition-all min-w-[20rem] max-w-xs w-full scroll-snap-align-start"
                onClick={() => setSelected(i)}
                style={{minHeight:'24rem'}}
              >
                {item.img ? (
                  <img src={item.img} alt={item.name} className="w-64 h-64 object-cover rounded-2xl border-2 border-[#8C5C2E] shadow mb-6 bg-white" />
                ) : (
                  <span className="text-7xl mb-6 drop-shadow">{item.icon}</span>
                )}
                <span className="font-[Quicksand,Poppins,sans-serif] text-2xl text-center text-[#8C5C2E] font-semibold mb-3">{item.name}</span>
                <p className="text-[#8C5C2E] text-center text-lg">{item.description}</p>
              </div>
            ))}
            {/* Spacer at end to prevent last card from scaling out of view */}
            <div className="shrink-0" style={{width: '3.5rem'}} aria-hidden="true" />
          </div>
        </div>
      </div>
      {/* Back button after card, About style */}
      <BackButton onClick={() => setScreen('menu')} />
      {/* Modal for item details */}
      {selected !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-auto">
          <div className="flex flex-col items-center justify-start min-h-screen py-8">
            <div className="inline-flex flex-col items-center">
              <div className="relative bg-transparent rounded-2xl border-4 border-[#C2A13C] shadow-2xl flex flex-col items-center justify-center max-w-6xl max-h-[90vh] w-full sm:w-auto h-auto m-8">
                <button
                  className="absolute top-4 right-4 text-[#fffbe6] bg-[#8C5C2E]/80 rounded-full px-5 py-2 font-[Quicksand,Poppins,sans-serif] text-4xl font-bold shadow-lg hover:bg-[#C2A13C]/80 transition border-2 border-[#fffbe6] pointer-events-auto"
                  onClick={() => setSelected(null)}
                  style={{ zIndex: 10 }}
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <img
                  src={selected !== null ? items[selected].img : ''}
                  alt={selected !== null ? items[selected].name : ''}
                  className="max-w-[80vw] max-h-[75vh] object-contain rounded-xl w-full"
                  style={{ zIndex: 1 }}
                />
              </div>
              {/* Overlayed text OUTSIDE the modal, below the image frame, exactly matching modal width */}
              <div className="flex flex-col items-center justify-center mt-4 px-4 w-full">
                <div className="bg-[#fffbe6]/80 rounded-xl border border-[#C2A13C] shadow-lg px-8 py-6 text-center backdrop-blur-sm">
                  <h3 className="font-[Quicksand,Poppins,sans-serif] text-4xl mb-2 text-[#8C5C2E] font-bold drop-shadow">{selected !== null ? items[selected].name : ''}</h3>
                  <p className="text-[#8C5C2E] mb-2 text-lg drop-shadow">{selected !== null ? (items[selected].fullDescription || items[selected].description) : ''}</p>
                  <div className="bg-white bg-opacity-70 rounded p-4 text-base text-gray-700 border border-[#C2A13C] mt-2">
                    {selected !== null ? items[selected].lore : ''}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
