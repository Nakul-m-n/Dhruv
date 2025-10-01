import React from 'react';
import eagle from "../assets/images/Eagle.jpg"
import sayip from "../assets/images/sayip.jpg"

export default function StarAppearancesSection() {
  const guests = [
    {
      id: 1,
      name: 'Eagle Gaming',
      title: 'Gamer',
      image: eagle,
      description: 'Professional esports player and content creator'
    },
    {
      id: 2,
      name: 'SayipOp ',
      title: 'Gamer',
      image: sayip,
      description: 'Professional esports player and content creator'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-800 to-black bg-clip-text text-transparent mb-3 sm:mb-4 px-4">
            STAR APPEARANCES
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-gray-400 text-base sm:text-lg px-4">Meet Our Distinguished Guests</p>
        </div>

        {/* Guest Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto">
          {guests.map((guest, index) => (
            <div key={guest.id} className="backdrop-blur-xl bg-gradient-to-br from-blue-950/40 via-gray-950/60 to-black/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-blue-900/30 shadow-2xl hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:border-blue-700/50 transition-all duration-500 hover:scale-105 group">
              {/* Circle Image */}
              <div className="relative mb-5 sm:mb-6">
                <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto rounded-full backdrop-blur-lg bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-4 border-blue-800/40 shadow-[0_0_30px_rgba(59,130,246,0.2)] overflow-hidden transition-all duration-300 group-hover:border-blue-600/60 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="backdrop-blur-md bg-gradient-to-br from-blue-950/50 to-gray-950/60 rounded-xl p-4 sm:p-6 border border-blue-900/30 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{guest.name}</h3>
                <p className="text-blue-400 text-sm sm:text-base font-semibold mb-2 sm:mb-3">{guest.title}</p>
                <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mx-auto mb-2 sm:mb-3"></div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{guest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}