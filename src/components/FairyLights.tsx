import React, { useEffect, useRef } from 'react';

interface FairyLight {
  x: number;
  y: number;
  radius: number;
  speed: number;
  alpha: number;
  glow: number;
}

const FAIRY_COUNT = 18;
const COLORS = ['#FFE8A3', '#FFD580', '#FFF2CC']; // Cozy, warm yellows

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function FairyLights() {
  console.log('FairyLights component rendered');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fairyLights = useRef<FairyLight[]>([]);

  useEffect(() => {
    console.log('FairyLights useEffect running');
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function createFairy(): FairyLight {
      return {
        x: randomBetween(0, width),
        y: randomBetween(height, height + 100),
        radius: randomBetween(6, 14),
        speed: randomBetween(0.4, 1.2),
        alpha: randomBetween(0.6, 1),
        glow: randomBetween(25, 60)
      };
    }

    fairyLights.current = Array.from({ length: FAIRY_COUNT }, () => createFairy());

    function animate() {
      ctx.clearRect(0, 0, width, height);
      fairyLights.current.forEach((fairy, i) => {
        // Animate upward
        fairy.y -= fairy.speed;
        // Sway left/right
        fairy.x += Math.sin(Date.now() / 800 + i * 20) * 0.4;
        // Respawn at bottom if off top
        if (fairy.y + fairy.radius < 0) {
          Object.assign(fairy, createFairy(), { y: height + fairy.radius });
        }
        // Draw glowing circle
        ctx.save();
        ctx.globalAlpha = fairy.alpha;
        ctx.beginPath();
        ctx.arc(fairy.x, fairy.y, fairy.radius, 0, Math.PI * 2);
        ctx.shadowColor = COLORS[i % COLORS.length];
        ctx.shadowBlur = fairy.glow;
        ctx.fillStyle = COLORS[i % COLORS.length];
        ctx.fill();
        ctx.restore();
      });
      requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}

export default FairyLights;
