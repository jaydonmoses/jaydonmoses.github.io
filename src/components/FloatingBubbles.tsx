import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  delay: number;
  opacity: number;
  color: string;
}

const FloatingBubbles: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const colors = [
      'rgba(255, 107, 107, 0.4)', // Primary red
      'rgba(255, 142, 142, 0.3)', // Lighter red
      'rgba(255, 82, 82, 0.4)',   // Darker red
      'rgba(255, 178, 178, 0.3)', // Very light red
      'rgba(220, 38, 38, 0.3)',   // Deep red
      'rgba(254, 202, 202, 0.4)', // Pink-red
    ];

    const createBubbles = () => {
      const newBubbles: Bubble[] = [];
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20, // 20-80px
          speed: Math.random() * 3 + 1,  // 1-4s
          delay: Math.random() * 5,
          opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setBubbles(newBubbles);
    };

    createBubbles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-float"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: bubble.color,
            animationDuration: `${bubble.speed}s`,
            animationDelay: `${bubble.delay}s`,
            opacity: bubble.opacity,
            boxShadow: `0 0 ${bubble.size / 2}px ${bubble.color}`,
          }}
        />
      ))}
      
      {/* Additional smaller floating particles */}
      {Array.from({ length: 25 }, (_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full animate-pulse-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '4px',
            height: '4px',
            backgroundColor: '#ff6b6b',
            opacity: Math.random() * 0.5 + 0.2,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: '3s',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;