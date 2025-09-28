import React from "react";

const Footer = () => {
  const logos = [
    { src: "/images/L1.png", alt: "L1" },
    { src: "/images/L2.png", alt: "L2" },
    { src: "/images/L3.png", alt: "L3" },
    { src: "/images/L4.png", alt: "L4" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-15 animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-40 animate-pulse" />
      </div>

      <div className="container mx-auto px-4 flex flex-col-reverse sm:flex-row justify-between items-center z-10 gap-8 sm:gap-0">
        <div className="text-center sm:text-left">
          <p className="text-cyan-200/80 text-sm sm:text-base flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="flex items-center">
              <span className="mr-2">©</span>
              <span>{new Date().getFullYear()}</span>
            </span>
            <span className="text-cyan-400">•</span>
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400 animate-glow">
              DHRUV'25
            </span>
            <span className="text-cyan-400">•</span>
            <span>All Rights Reserved</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-24 h-12 sm:w-28 sm:h-14 object-contain rounded-md shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-500 transform group-hover:-translate-y-1"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
