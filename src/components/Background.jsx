import { useEffect, useState } from "react";
import "../assets/css/Background.css";

export default function Background({ children }) {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (stars.length === 0) {
      const generatedStars = [];

      for (let i = 0; i < 300; i++) {
        generatedStars.push({
          id: `small-${i}`,
          size: `${Math.random() * 1.5 + 0.5}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          duration: `${Math.random() * 4 + 2}s`,
          delay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.8 + 0.2,
          color: Math.random() > 0.7 ? "bg-cyan-300" : "bg-white",
        });
      }

      for (let i = 0; i < 80; i++) {
        generatedStars.push({
          id: `medium-${i}`,
          size: `${Math.random() * 2 + 1.5}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          duration: `${Math.random() * 5 + 3}s`,
          delay: `${Math.random() * 6}s`,
          opacity: Math.random() * 0.9 + 0.1,
          color: Math.random() > 0.6 ? "bg-blue-300" : "bg-white",
        });
      }

      for (let i = 0; i < 30; i++) {
        generatedStars.push({
          id: `large-${i}`,
          size: `${Math.random() * 3 + 2}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          duration: `${Math.random() * 6 + 4}s`,
          delay: `${Math.random() * 8}s`,
          opacity: Math.random() * 0.9 + 0.1,
          color:
            Math.random() > 0.5
              ? "bg-cyan-400"
              : Math.random() > 0.5
                ? "bg-blue-400"
                : "bg-white",
        });
      }

      setStars(generatedStars);
    }
  }, [stars.length]);

  useEffect(() => {
    if (shootingStars.length === 0) {
      const generatedShootingStars = [];

      for (let i = 0; i < 8; i++) {
        generatedShootingStars.push({
          id: `shooting-${i}`,
          startY: `${Math.random() * 30}%`,
          duration: `${Math.random() * 3 + 2}s`,
          delay: `${Math.random() * 15 + i * 3}s`,
        });
      }

      setShootingStars(generatedShootingStars);
    }
  }, [shootingStars.length]);

  useEffect(() => {
    if (particles.length === 0) {
      const generatedParticles = [];

      for (let i = 0; i < 40; i++) {
        generatedParticles.push({
          id: `particle-${i}`,
          size: `${Math.random() * 2 + 0.5}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          duration: `${Math.random() * 20 + 15}s`,
          delay: `${Math.random() * 10}s`,
          color: Math.random() > 0.5 ? "bg-cyan-400/60" : "bg-blue-400/60",
        });
      }

      setParticles(generatedParticles);
    }
  }, [particles.length]);

  return (
    <div className="relative w-full h-full">
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950"></div>

      <div className="fixed inset-0 -z-40 bg-gradient-to-tr from-blue-900/30 via-transparent to-purple-900/20"></div>

      <div className="fixed inset-0 -z-35 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-transparent rounded-full blur-3xl animate-nebula-float"></div>
        <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-bl from-indigo-500/25 via-blue-400/20 to-transparent rounded-full blur-3xl animate-nebula-drift"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-purple-500/15 via-blue-500/20 to-transparent rounded-full blur-3xl animate-nebula-pulse"></div>
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-gradient-to-br from-cyan-400/10 via-blue-600/15 to-transparent rounded-full blur-3xl animate-nebula-slow"></div>
      </div>

      <div className="fixed inset-0 -z-30 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
            transform: "perspective(1000px) rotateX(20deg)",
          }}
        ></div>
      </div>

      <div className="fixed inset-0 -z-25 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute rounded-full ${star.color} animate-twinkle shadow-sm`}
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              animationDuration: star.duration,
              animationDelay: star.delay,
              opacity: star.opacity,
              boxShadow: star.color.includes("cyan")
                ? "0 0 4px rgba(34, 211, 238, 0.5)"
                : star.color.includes("blue")
                  ? "0 0 4px rgba(59, 130, 246, 0.5)"
                  : "0 0 2px rgba(255, 255, 255, 0.3)",
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 -z-20 overflow-hidden">
        {shootingStars.map((shootingStar) => (
          <div
            key={shootingStar.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-shooting opacity-80"
            style={{
              top: shootingStar.startY,
              left: "-10px",
              animationDuration: shootingStar.duration,
              animationDelay: shootingStar.delay,
              boxShadow:
                "0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(34, 211, 238, 0.4)",
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 -z-15 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute rounded-full ${particle.color} animate-drift`}
            style={{
              width: particle.size,
              height: particle.size,
              top: particle.top,
              left: particle.left,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-energy-pulse opacity-60"></div>
        <div
          className="absolute top-3/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-energy-pulse opacity-60"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-2 h-2 bg-indigo-400 rounded-full animate-energy-pulse opacity-60"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {children}
    </div>
  );
}
