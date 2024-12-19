import React from 'react';

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-quantum-primary/20 rounded-full animate-particle-slow`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;