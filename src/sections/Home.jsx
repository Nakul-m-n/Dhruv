import React, { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-09T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Image with Responsive Positioning */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center center", // Center for large screens
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      
      {/* Mobile/Tablet Background Override */}
      <div 
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url('/images/bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "75% center", // Right side focus for mobile
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      
      {/* Tablet Background Override */}
      <div 
        className="absolute inset-0 hidden md:block lg:hidden"
        style={{
          backgroundImage: `url('/images/bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "65% center", // Slightly right for tablets
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/60"></div>

      {/* Logo */}
      <div className="relative z-10 mb-4 sm:mb-6 md:mb-8 flex justify-center px-4">
        <img
          src={"/images/logo.png"}
          alt="Logo"
          className="w-40 sm:w-52 md:w-72 lg:w-96 h-auto transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl text-white text-center space-y-3 sm:space-y-4 px-4">
  <p className="text-sm sm:text-md md:text-lg lg:text-xl p-3 sm:p-4 rounded-lg shadow-lg leading-relaxed">
    Dhruv 2025 is a three-day Tech-Culture-Innovation Festival at MES
    College of Engineering and Technology. With 3,000+ daily attendees
    from 50+ colleges, it blends hackathons, cultural competitions, and
    live entertainment. As Title Sponsor, your brand gains exclusive
    visibility and powerful digital reach to a Gen-Z audience.
  </p>
  <p className="mt-2 text-yellow-400 font-semibold text-sm sm:text-md md:text-lg lg:text-xl">
    October 09-11, 2025
  </p>
</div>


      {/* Countdown Timer */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-4 sm:mt-6 md:mt-8 px-4">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="flex flex-col items-center p-2 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 min-w-[60px] sm:min-w-[70px] md:min-w-[80px]"
            style={{
              background: "linear-gradient(145deg, #0b3d91, #1c7ed6, #122f5e)",
              boxShadow: "0 4px 15px rgba(18, 47, 94, 0.6)",
            }}
          >
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white drop-shadow-md">
              {value < 10 ? `0${value}` : value}
            </span>
            <span className="uppercase text-xs sm:text-xs md:text-sm text-white/80 mt-0.5 sm:mt-1 font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Additional Mobile Optimization */}
      <style jsx>{`
        @media (max-width: 640px) {
          #home {
            min-height: 100vh;
            min-height: 100svh; /* Safari mobile viewport */
          }
        }
        
        @media (orientation: landscape) and (max-height: 500px) {
          #home {
            min-height: 100vh;
            padding: 1rem 0;
          }
        }
      `}</style>
    </section>
  );
}