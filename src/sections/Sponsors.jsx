import React from "react";
import oberonimg from "../assets/images/sponsors/oberon.png"
import isroimg from "../assets/images/sponsors/isro.png"
import floraimg from "../assets/images/sponsors/flora.png"
import ifeimg from "../assets/images/sponsors/ife.png"
import ksumimg from "../assets/images/sponsors/ksum1.png"
import fragomenimg from  "../assets/images/sponsors/fragomen.png"
import dicimg from  "../assets/images/sponsors/DIC.png"
import kamcoimg from  "../assets/images/sponsors/kamco.png"
import cmrlimg from  "../assets/images/sponsors/cmrl1.png"

// Mock sponsor images - replace these with your actual imports
const oberon = oberonimg;
const isro = isroimg;
const flora = floraimg;
const ife = ifeimg;
const ksum = ksumimg;
const fragomen = fragomenimg;
const dic = dicimg;
const kamco = kamcoimg;
const cmrl = cmrlimg;

// Split sponsors into two categories with image paths
const mainSponsors = [
  { name: "OberonMall", image: oberon },
  { name: "ISRO", image: isro },
  { name: "Flora", image: flora },
  { name: "Ife", image: ife },
  {name :"unknown"}
]; // Top tier sponsors

const otherSponsors = [
  { name: "Kerala Startup Mission", image: ksum },
  { name: "fragomen", image: fragomen },
  { name: "DIC", image: dic },
  { name: "Kamco", image: kamco },
  { name: "CMRL", image: cmrl },
  {name :"unknown"},
  {name:"unknown2"}
]; // Additional sponsors

const SponsorCard = ({ sponsor, idx, isMain = false }) => (
  <div
    className={`group relative transform hover:scale-105 transition-all duration-500 ease-out`}
    style={{
      animationDelay: `${idx * 0.2}s`,
    }}
  >
    <div className={`relative backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 border-2 border-cyan-400/30 rounded-3xl shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:border-cyan-300/50 transition-all duration-500 overflow-hidden ${
      isMain 
        ? 'p-6 sm:p-8 md:p-12 h-[200px] sm:h-[240px] md:h-[280px]' 
        : 'p-4 sm:p-6 md:p-8 h-[160px] sm:h-[190px] md:h-[220px]'
    }`}>
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700 rounded-3xl" />

      {/* Animated border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500">
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 h-px bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
        <div
          className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 h-px bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-2 sm:top-4 bottom-2 sm:bottom-4 left-2 sm:left-4 w-px bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"
          style={{ animationDelay: "0.25s" }}
        />
        <div
          className="absolute top-2 sm:top-4 bottom-2 sm:bottom-4 right-2 sm:right-4 w-px bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"
          style={{ animationDelay: "0.75s" }}
        />
      </div>

      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/60 transition-all duration-500" />

      <div className="relative z-10 text-center flex flex-col justify-center h-full">
        {/* Image - Fully fitted without inner border */}
        <img
          src={sponsor.image}
          alt={`${sponsor.name} logo`}
          className="w-full h-full object-contain p-4 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 filter drop-shadow-lg"
          onError={(e) => {
            // Fallback to initial letter if image fails to load
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback initial letter */}
        <div 
          className={`hidden items-center justify-center w-full h-full backdrop-blur-xl bg-white/30 rounded-2xl text-white font-bold ${
            isMain 
              ? 'text-3xl sm:text-4xl md:text-5xl' 
              : 'text-2xl sm:text-3xl md:text-4xl'
          }`}
        >
          {sponsor.name.charAt(0)}
        </div>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`card-particle-${idx}-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-70 animate-float-particle"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  </div>
);

const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="relative py-12 sm:py-16 md:py-24 bg-black text-white min-h-screen flex flex-col items-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at center, rgba(30, 0, 60, 0.4) 0%, rgba(0, 0, 0, 0.9) 100%),
          linear-gradient(45deg, rgba(0, 20, 40, 0.3) 0%, rgba(0, 0, 0, 1) 50%, rgba(20, 0, 40, 0.3) 100%)
        `,
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}

        {[...Array(2)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-shooting"
            style={{
              top: `${Math.random() * 30 + 10}%`,
              left: `-10px`,
              animationDelay: `${i * 8 + Math.random() * 5}s`,
            }}
          />
        ))}

        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-gradient-to-br from-purple-500/20 via-blue-500/15 to-transparent rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-br from-cyan-500/15 via-purple-500/20 to-transparent rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/3 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-br from-pink-500/10 via-blue-500/15 to-transparent rounded-full blur-3xl animate-float" />

        {[...Array(10)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full animate-drift opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Header */}
      <div className="text-center mb-10 sm:mb-16 md:mb-20 z-10 relative px-4">
        <div className="relative inline-block">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 animate-glow-pulse mb-2 sm:mb-4">
            Our SPONSORS
          </h2>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 border border-cyan-500/20 rounded-full animate-spin-slow pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 sm:w-52 md:w-80 h-40 sm:h-52 md:h-80 border border-purple-500/20 rounded-full animate-spin-reverse pointer-events-none" />
        </div>

        <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-xl md:text-2xl text-cyan-200/70 max-w-4xl mx-auto font-light tracking-wider leading-relaxed px-4">
          {" Powered by "}
          <span className="text-purple-400 font-semibold">
            {" industry leaders"}
          </span>
        </p>
      </div>

      <div className="  w-full max-w-7xl relative z-10 px-4 sm:px-6">
        {/* Main Sponsors Section - Responsive Layout */}
        <div className="  grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {mainSponsors.map((sponsor, idx) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} idx={idx} isMain={true} />
          ))}
        </div>

        {/* Decorative Separator */}
        <div className="flex items-center justify-center mb-10 sm:mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
          <div className="mx-4 sm:mx-8 flex items-center space-x-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-500/30 to-transparent"></div>
        </div>

        {/* Other Sponsors Section - Centered Flex Layout */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {otherSponsors.map((sponsor, idx) => (
            <div key={sponsor.name} className="w-[calc(50%-6px)] sm:w-[calc(50%-8px)] md:w-[calc(25%-18px)] max-w-[280px]">
              <SponsorCard sponsor={sponsor} idx={idx + mainSponsors.length} isMain={false} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 sm:w-64 md:w-96 h-12 sm:h-16 md:h-24 opacity-20">
        <div className="w-full h-full bg-gradient-to-t from-cyan-500/30 via-purple-500/20 to-transparent rounded-full blur-xl animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes shooting {
          0% {
            transform: translateX(-10px) translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(-50px);
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(1deg);
          }
          66% {
            transform: translateY(10px) translateX(-5px) rotate(-1deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) translateX(15px) rotate(2deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(20px) translateX(-10px) rotate(-1deg);
          }
        }

        @keyframes drift {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            text-shadow:
              0 0 20px rgba(34, 211, 238, 0.5),
              0 0 40px rgba(34, 211, 238, 0.3);
          }
          50% {
            text-shadow:
              0 0 30px rgba(34, 211, 238, 0.8),
              0 0 60px rgba(34, 211, 238, 0.5);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10%,
          90% {
            opacity: 1;
          }
          50% {
            transform: translateY(-20px) translateX(10px) scale(1.2);
          }
        }

        .animate-twinkle {
          animation: twinkle var(--tw-animate-duration, 3s) ease-in-out infinite;
        }
        .animate-shooting {
          animation: shooting 8s linear infinite;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 10s ease-in-out infinite;
        }
        .animate-drift {
          animation: drift var(--tw-animate-duration, 20s) linear infinite;
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        .animate-float-particle {
          animation: float-particle var(--tw-animate-duration, 4s) ease-in-out
            infinite;
        }
        
        @media (max-width: 640px) {
          .animate-glow-pulse {
            animation: glow-pulse 3s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Sponsors;