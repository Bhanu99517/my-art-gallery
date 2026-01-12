import { useState, useEffect, useMemo } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const particleColors = [
  'particle-gold',
  'particle-rose',
  'particle-teal',
  'particle-amber',
  'particle-violet',
  'particle-cyan',
];

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isExiting, setIsExiting] = useState(false);

  // Generate random colorful particles
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${30 + Math.random() * 60}%`,
      delay: `${Math.random() * 2.5}s`,
      size: Math.random() * 6 + 3,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
    }));
  }, []);

  useEffect(() => {
    // Start exit animation after 3.5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3500);

    // Complete after exit animation
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`intro-container ${isExiting ? 'intro-exit' : ''}`}>
      {/* Background */}
      <div className="intro-bg" />
      
      {/* Animated color layers */}
      <div className="color-layer color-layer-1" />
      <div className="color-layer color-layer-2" />
      <div className="color-layer color-layer-3" />
      <div className="color-layer color-layer-4" />
      <div className="color-layer color-layer-5" />
      
      {/* Paint stroke effects */}
      <div className="paint-stroke" />
      <div className="paint-stroke-2" />
      
      {/* Floating colorful particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.color}`}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
      
      {/* Main content */}
      <div className="intro-content">
        <div className="intro-line" />
        <h1 className="intro-title">Gallery</h1>
        <p className="intro-subtitle">Original Artworks & Portraits</p>
      </div>
    </div>
  );
};
