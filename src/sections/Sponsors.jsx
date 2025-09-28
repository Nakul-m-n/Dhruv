import React from "react";

// Split sponsors into two categories with image paths
const mainSponsors = [
  { name: "TechCorp", image: "/assets/sponsors/techcorp-logo.png" },
  { name: "InnovateAI", image: "/assets/sponsors/innovateai-logo.png" }
]; // Top tier sponsors

const otherSponsors = [
  { name: "RoboTech", image: "/assets/sponsors/robotech-logo.png" },
  { name: "FutureCode", image: "/assets/sponsors/futurecode-logo.png" },
  { name: "DataFlow", image: "/assets/sponsors/dataflow-logo.png" },
  { name: "CloudNext", image: "/assets/sponsors/cloudnext-logo.png" }
]; // Additional sponsors

const SponsorCard = ({ sponsor, idx, isMain = false }) => (
  <div
    className={`group relative transform hover:scale-105 transition-all duration-500 ease-out`}
    style={{
      animationDelay: `${idx * 0.2}s`,
    }}
  >
    <div className={`relative bg-gradient-to-br from-gray-900/40 via-black/60 to-gray-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-3xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 overflow-hidden ${
      isMain 
        ? 'p-6 sm:p-8 md:p-12 min-h-[200px] sm:min-h-[240px] md:min-h-[280px]' 
        : 'p-4 sm:p-6 md:p-8 min-h-[160px] sm:min-h-[190px] md:min-h-[220px]'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        <div
          className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-2 sm:top-4 bottom-2 sm:bottom-4 left-2 sm:left-4 w-px bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse"
          style={{ animationDelay: "0.25s" }}
        />
        <div
          className="absolute top-2 sm:top-4 bottom-2 sm:bottom-4 right-2 sm:right-4 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse"
          style={{ animationDelay: "0.75s" }}
        />
      </div>

      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-500" />
      <div className="absolute -inset-1 rounded-3xl border border-purple-500/20 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 text-center flex flex-col justify-center h-full">
        {/* Image Container */}
        <div className={`mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 backdrop-blur-sm border-2 border-cyan-400/30 group-hover:border-cyan-400/60 flex items-center justify-center overflow-hidden transition-all duration-500 ${
          isMain 
            ? 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24' 
            : 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20'
        }`}>
          <img
            src={sponsor.image}
            alt={`${sponsor.name} logo`}
            className={`object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${
              isMain 
                ? 'w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16' 
                : 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'
            }`}
            onError={(e) => {
              // Fallback to initial letter if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback initial letter */}
          <div 
            className={`hidden items-center justify-center w-full h-full text-black font-bold bg-gradient-to-br from-cyan-400 to-purple-500 ${
              isMain 
                ? 'text-lg sm:text-xl md:text-2xl' 
                : 'text-sm sm:text-lg md:text-xl'
            }`}
          >
            {sponsor.name.charAt(0)}
          </div>
        </div>

        <h3 className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 group-hover:from-white group-hover:to-cyan-200 transition-all duration-300 ${
          isMain 
            ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl' 
            : 'text-lg sm:text-xl md:text-2xl lg:text-3xl'
        }`}>
          {sponsor.name}
        </h3>

        <div className={`mt-2 sm:mt-3 md:mt-4 text-cyan-200/60 tracking-widest ${
          isMain 
            ? 'text-xs sm:text-sm md:text-base' 
            : 'text-xs sm:text-sm'
        }`}>
          ── COSMIC PARTNER ──
        </div>
      </div>

      {[...Array(6)].map((_, i) => (
        <div
          key={`card-particle-${idx}-${i}`}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-60 animate-float-particle"
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

      <div className="w-full max-w-7xl relative z-10 px-4 sm:px-6">
        {/* Main Sponsors Section - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
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

        {/* Other Sponsors Section - Responsive Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {otherSponsors.map((sponsor, idx) => (
            <SponsorCard key={sponsor.name} sponsor={sponsor} idx={idx + mainSponsors.length} isMain={false} />
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