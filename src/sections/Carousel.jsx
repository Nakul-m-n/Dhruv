import React, { useEffect, useState } from "react";
import { X, Clock, Calendar, MapPin, ExternalLink, Users, Award, Coffee, Trophy, Code, Lightbulb, Target, Presentation } from "lucide-react";

const hackathonImage = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop";

const scheduleData = [
  {
    day: "Day 1",
    date: "9th October 2025",
    inauguration: {
      time: "9:45 AM - 12:00 PM",
      title: "Inauguration",
      description: "Grand opening ceremony with keynote speakers and special guests",
      venue: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop"
    },
    events: [
      {
        time: "01:00 PM (Oct 9) - 01:00 PM (Oct 10)",
        title: "CodeRevolt 2025 - Hackathon",
        description: "A 24-Hour Software & AI Hackathon. 'Innovate. Code. Revolt.' Design and develop real-world software and AI solutions with mentor guidance and technical support.",
        venue: "MES College of Engineering and Technology, Kunnukara",
        hasRegister: true,
        registerLink: "https://makemypass.com/event/hackathon-2",
        image: hackathonImage,
        detailedInfo: {
          about: "CodeRevolt is the flagship 24-hour Software and AI Hackathon of Dhruv Tech Fest, hosted by MES College of Engineering and Technology, Kunnukara. It challenges participants to design and develop real-world software and AI solutions within 24 hours of intense coding, creativity, and teamwork. Throughout the event, participants will receive mentor guidance, access to resources, and an engaging atmosphere that fosters collaboration and innovation.",
          highlights: [
            "Focused on Software & AI innovations",
            "Team-based competition (up to 3 members per team)",
            "Problem statements released 2 days before the hackathon",
            "Mentorship & technical support throughout the event",
            "Cash prizes worth ₹20,000+",
            "Presentations before expert judges",
            "Certificates for all participants"
          ],
          schedule: [
            {
              day: "Day 1 – October 9, 2025",
              events: [
                "🕐 1:00 PM – Inauguration & Instructions",
                "🕜 1:30 PM – Hackathon Kickoff / Development Phase Begins",
                "🌙 2:00 PM – 12:00 AM – Continuous Coding, Mentor Support & Refreshments",
                "🍽️ Dinner Provided",
                "🌅 Midnight Check-in – Progress Monitoring"
              ]
            },
            {
              day: "Day 2 – October 10, 2025",
              events: [
                "☀️ 12:00 AM – 8:00 AM – Overnight Development & Debugging",
                "🍳 Breakfast Provided",
                "🕗 8:00 AM – 9:00 AM – Final Testing & Refinement",
                "🕘 9:00 AM – 12:00 PM – Project Presentations (3 min demo + 2 min Q&A)",
                "🕛 12:00 PM – 12:30 PM – Judges' Evaluation & Discussion",
                "🏆 12:30 PM – 1:00 PM – Winner Announcement & Closing Ceremony"
              ]
            }
          ],
          foodRefreshments: [
            "🍽️ Dinner will be provided on October 9",
            "🍳 Breakfast will be provided on October 10",
            "🥤 Light refreshments and beverages throughout the event",
            "🏪 College canteen remains open for additional food/snacks"
          ],
          judgingCriteria: [
            "💡 Innovation & Creativity",
            "⚙️ Technical Implementation",
            "🌍 Practical Impact & Relevance",
            "🗣️ Presentation & Demonstration"
          ],
          rewards: {
            allParticipants: [
              "Certificate of Participation",
              "Mentorship & Expert Interaction",
              "Networking opportunities through Dhruv Tech Fest"
            ],
            topTeams: [
              "Cash Prizes Worth ₹20,000+",
              "Trophies & Certificates",
              "Recognition on Dhruv Tech Fest Platforms"
            ]
          },
          registration: {
            expectedTeams: "20 Teams",
            teamSize: "Up to 3 participants",
            fee: "₹300 per team",
            mode: "Onsite at MES College of Engineering and Technology"
          },
          eligibility: [
            "Open to students from all engineering and technology disciplines",
            "Teams must work on assigned problem statements",
            "Only Software and AI-based projects are accepted"
          ]
        }
      },
      {
        time: "01:30 PM - 01:30 PM",
        title: "Ideathon",
        description: "Collaborative innovation challenge to pitch creative ideas and solutions",
        venue: "Innovation Hub",
        hasRegister: true,
        registerLink: "https://ideathon-register.example.com",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop"
      },
      {
        time: "12:30 PM - 3:00 PM",
        title: "Workshops",
        description: "Technical workshops across multiple domains",
        venue: "Various Halls",
        hasRegister: true,
        registerLink: "https://workshop-register.example.com",
        details: ["Arduino", "Web Design"],
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=400&fit=crop"
      },
      {
        time: "Full Day",
        title: "Exhibitions",
        description: "Explore cutting-edge technology and safety demonstrations",
        venue: "Exhibition Ground",
        details: ["Fire and Safety", "KSRTC", "Kamco"],
        image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&h=400&fit=crop"
      }
    ]
  },
  {
    day: "Day 2",
    date: "10th October 2025",
    events: [
      {
        time: "10:00 AM - 12:00 PM",
        title: "Panel Discussion",
        description: "Industry experts share insights on emerging technologies and innovation",
        venue: "Main Stage",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=400&fit=crop"
      },
      {
        time: "2:00 PM - 3:00 PM",
        title: "Mentalism",
        description: "Mind-bending performance that will leave you amazed and questioning reality",
        venue: "Main Stage",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop"
      },
      {
        time: "3:00 PM - 6:00 PM",
        title: "Concert",
        description: "Thakida – A Night of Music & Madness! 🎶✨ An electrifying concert full of beats, vibes, and unforgettable energy!",
        venue: "Main Stage",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=400&fit=crop"
      },
      {
        time: "Full Day",
        title: "Exhibitions",
        description: "Space technology and educational displays",
        venue: "Exhibition Ground",
        details: ["ISRO Expo", "School Polytechnic Expo"],
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=400&fit=crop"
      },
      {
        time: "Full Day",
        title: "Online Gaming",
        description: "Competitive gaming tournaments with exciting prizes",
        venue: "Gaming Zone",
        hasRegister: true,
        registerLink: "https://gaming-register.example.com",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop"
      }
    ]
  },
  {
    day: "Day 3",
    date: "11th October 2025",
    events: [
      {
        time: "9:00 AM - 11:00 AM",
        title: "Film Promotion",
        description: "Latest movie previews and celebrity interactions",
        venue: "Main Stage",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=400&fit=crop"
      },
      {
        time: "11:00 AM - 6:00 PM",
        title: "Fashion Show",
        description: "Stunning runway displays featuring talented designers and models",
        venue: "Outdoor Stage",
        image: "https://png.pngtree.com/background/20230606/original/pngtree-fashion-show-with-models-on-the-runway-picture-image_2882850.jpg"
      }
    ]
  }
];

// Event Detail Modal with Complete Information
const EventDetailModal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  const hasDetailedInfo = event.detailedInfo;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] border border-cyan-500/40 shadow-2xl overflow-hidden">
        {event.image && (
          <div className="relative w-full h-64 border-b-2 border-cyan-500/40">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
          </div>
        )}
        
        <div className="overflow-y-auto max-h-[calc(90vh-16rem)] custom-scrollbar">
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <h4 className="text-3xl font-bold text-cyan-100">{event.title}</h4>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-cyan-300/80">
                <Clock className="w-5 h-5 mr-3" />
                <span className="text-base">{event.time}</span>
              </div>

              {event.venue && (
                <div className="flex items-center text-cyan-400/80">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span className="text-base">{event.venue}</span>
                </div>
              )}

              {event.description && (
                <p className="text-slate-300 text-base leading-relaxed">{event.description}</p>
              )}
            </div>

            {/* Detailed Info Section for Hackathon */}
            {hasDetailedInfo && (
              <div className="space-y-8 mt-8">
                {/* About Section */}
                <div className="bg-slate-800/40 rounded-lg p-6 border border-cyan-500/20">
                  <h5 className="text-xl font-bold text-cyan-200 mb-3 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    About CodeRevolt
                  </h5>
                  <p className="text-slate-300 leading-relaxed">{event.detailedInfo.about}</p>
                </div>

                {/* Highlights */}
                <div className="bg-slate-800/40 rounded-lg p-6 border border-cyan-500/20">
                  <h5 className="text-xl font-bold text-cyan-200 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Highlights
                  </h5>
                  <ul className="space-y-2">
                    {event.detailedInfo.highlights.map((highlight, i) => (
                      <li key={i} className="text-slate-300 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Event Schedule */}
                <div className="bg-slate-800/40 rounded-lg p-6 border border-cyan-500/20">
                  <h5 className="text-xl font-bold text-cyan-200 mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Event Schedule
                  </h5>
                  {event.detailedInfo.schedule.map((daySchedule, i) => (
                    <div key={i} className="mb-4">
                      <h6 className="text-lg font-semibold text-cyan-300 mb-2">{daySchedule.day}</h6>
                      <ul className="space-y-1.5 ml-4">
                        {daySchedule.events.map((scheduleEvent, j) => (
                          <li key={j} className="text-slate-300 text-sm">{scheduleEvent}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Food & Refreshments */}
                <div className="bg-slate-800/40 rounded-lg p-6 border border-cyan-500/20">
                  <h5 className="text-xl font-bold text-cyan-200 mb-4 flex items-center">
                    <Coffee className="w-5 h-5 mr-2" />
                    Food & Refreshments
                  </h5>
                  <ul className="space-y-2">
                    {event.detailedInfo.foodRefreshments.map((item, i) => (
                      <li key={i} className="text-slate-300">{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Judging Criteria */}
                <div className="bg-slate-800/40 rounded-lg p-6 border border-cyan-500/20">
                  <h5 className="text-xl font-bold text-cyan-200 mb-4 flex items-center">
                    <Presentation className="w-5 h-5 mr-2" />
                    Judging Criteria
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {event.detailedInfo.judgingCriteria.map((criteria, i) => (
                      <div key={i} className="bg-cyan-500/10 rounded-lg p-3 border border-cyan-500/30">
                        <p className="text-slate-300 text-sm">{criteria}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rewards & Recognition */}
                <div className="bg-slate-800/40 rounded-lg p-6 border border-cyan-500/20">
                  <h5 className="text-xl font-bold text-cyan-200 mb-4 flex items-center">
                    <Trophy className="w-5 h-5 mr-2" />
                    Rewards & Recognition
                  </h5>
                  <div className="space-y-4">
                    <div>
                      <h6 className="text-lg font-semibold text-cyan-300 mb-2">🎖️ All Participants Receive:</h6>
                      <ul className="space-y-1 ml-4">
                        {event.detailedInfo.rewards.allParticipants.map((reward, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {reward}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h6 className="text-lg font-semibold text-cyan-300 mb-2">🏆 Top Teams Win:</h6>
                      <ul className="space-y-1 ml-4">
                        {event.detailedInfo.rewards.topTeams.map((reward, i) => (
                          <li key={i} className="text-slate-300 text-sm flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {reward}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Registration Details */}
                <div className="bg-slate-800/40 rounded-lg p-6 border border-cyan-500/20">
                  <h5 className="text-xl font-bold text-cyan-200 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Registration Details
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                      <p className="text-cyan-300 text-sm font-medium mb-1">Expected Teams</p>
                      <p className="text-slate-200 text-lg font-bold">{event.detailedInfo.registration.expectedTeams}</p>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                      <p className="text-cyan-300 text-sm font-medium mb-1">Team Size</p>
                      <p className="text-slate-200 text-lg font-bold">{event.detailedInfo.registration.teamSize}</p>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                      <p className="text-cyan-300 text-sm font-medium mb-1">Registration Fee</p>
                      <p className="text-slate-200 text-lg font-bold">{event.detailedInfo.registration.fee}</p>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/30">
                      <p className="text-cyan-300 text-sm font-medium mb-1">Mode</p>
                      <p className="text-slate-200 text-lg font-bold">{event.detailedInfo.registration.mode}</p>
                    </div>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="bg-slate-800/40 rounded-lg p-6 border border-cyan-500/20">
                  <h5 className="text-xl font-bold text-cyan-200 mb-4">Eligibility</h5>
                  <ul className="space-y-2">
                    {event.detailedInfo.eligibility.map((item, i) => (
                      <li key={i} className="text-slate-300 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Simple event details */}
            {!hasDetailedInfo && event.details && (
              <div>
                <p className="text-cyan-200/80 text-sm font-medium mb-2">Includes:</p>
                <div className="flex flex-wrap gap-2">
                  {event.details.map((detail, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-200 text-xs rounded-full border border-cyan-500/30"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="sticky bottom-0 bg-gradient-to-t from-gray-900 to-gray-900/95 p-6 border-t border-cyan-500/30">
          {event.hasRegister && (
            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg font-semibold text-base bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Register Now
              <ExternalLink className="w-5 h-5" />
            </a>
          )}

          {!event.hasRegister && (
            <button
              onClick={onClose}
              className="w-full py-4 px-6 rounded-lg font-semibold text-base bg-gray-700/50 hover:bg-gray-700/70 text-gray-300 border border-gray-600/50 transition-all duration-300"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Small Event Card
const SmallEventCard = ({ event, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer hover:scale-105"
    >
      {event.image && (
        <div className="relative w-full h-32 border-b-2 border-cyan-500/30">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h5 className="text-base font-bold text-cyan-100 flex-1">{event.title}</h5>
          {event.time && (
            <div className="flex items-center text-cyan-300/80 text-xs ml-2 flex-shrink-0">
              <Clock className="w-3 h-3 mr-1" />
              <span className="text-xs">{event.time.split(' - ')[0]}</span>
            </div>
          )}
        </div>
        
        {event.description && (
          <p className="text-slate-400 text-xs mb-2 line-clamp-2">{event.description}</p>
        )}
        
        {event.details && (
          <div className="flex flex-wrap gap-1 mb-2">
            {event.details.slice(0, 2).map((detail, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-cyan-500/20 text-cyan-200 text-xs rounded-full"
              >
                {detail}
              </span>
            ))}
            {event.details.length > 2 && (
              <span className="px-2 py-0.5 text-cyan-300/60 text-xs">
                +{event.details.length - 2} more
              </span>
            )}
          </div>
        )}

        <div className="text-cyan-400/60 text-xs mt-2">Click for details →</div>
      </div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, day }) => {
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  if (!isOpen || !day) return null;

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setDetailModalOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <div className="relative bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-cyan-500/40 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
          <div className="sticky top-0 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-sm border-b border-cyan-500/30 p-6 flex items-center justify-between z-10">
            <div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {day.day}
              </h2>
              <div className="flex items-center text-cyan-300/80 mt-1">
                <Calendar className="w-4 h-4 mr-2" />
                {day.date}
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="overflow-y-auto max-h-[calc(90vh-140px)] custom-scrollbar">
            {/* Top Segment - Inauguration (Day 1 only) */}
            {day.inauguration && (
              <div className="p-6 border-b border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-cyan-500/40 rounded-xl overflow-hidden">
                  {day.inauguration.image && (
                    <div className="relative w-full h-48 border-b-2 border-cyan-500/40">
                      <img 
                        src={day.inauguration.image} 
                        alt={day.inauguration.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-2xl font-bold text-cyan-100">{day.inauguration.title}</h4>
                      <div className="flex items-center text-cyan-300/80 text-sm ml-4">
                        <Clock className="w-4 h-4 mr-1" />
                        {day.inauguration.time}
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-3 leading-relaxed">{day.inauguration.description}</p>
                    
                    <div className="flex items-center text-cyan-400/80 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {day.inauguration.venue}
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Bottom Segment - Events */}
            <div className="p-6">
              <h4 className="text-xl font-bold text-cyan-200 mb-4">
                {day.inauguration ? 'Other Events' : 'Events'}
              </h4>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {day.events.map((event, idx) => (
                  <SmallEventCard
                    key={idx}
                    event={event}
                    onClick={() => handleEventClick(event)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      <EventDetailModal
        isOpen={detailModalOpen}
        onClose={() => {
          setDetailModalOpen(false);
          setSelectedEvent(null);
        }}
        event={selectedEvent}
      />
    </>
  );
};

const ScheduleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isModalOpen) {
        setCurrentIndex((prev) => (prev + 1) % scheduleData.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isModalOpen]);

  const handleCardClick = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDay(null);
  };

  return (
    <>
      <section className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-15 animate-pulse"
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

        <div className="text-center mb-16 z-10">
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            EVENTS
          </h2>
          <p className="text-cyan-200/60 mt-4 text-lg">Click on any day to explore events</p>
        </div>

        <div className="container mx-auto px-4 w-full max-w-5xl">
          <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
            {scheduleData.map((day, index) => {
              const offset = index - currentIndex;
              const isActive = offset === 0;

              return (
                <div
                  key={index}
                  className={`absolute w-full max-w-[90%] sm:max-w-[70%] md:max-w-[60%] transition-all duration-1000 ease-in-out transform cursor-pointer ${
                    isActive
                      ? "translate-x-0 scale-100 opacity-100 z-10"
                      : offset > 0
                      ? "translate-x-[110%] scale-75 opacity-50"
                      : "-translate-x-[110%] scale-75 opacity-50"
                  }`}
                  onClick={() => handleCardClick(day)}
                >
                  <div className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-xl border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl hover:shadow-cyan-500/50 group min-h-[450px] sm:min-h-[500px] md:min-h-[600px] overflow-y-auto transition-all duration-300 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                    <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-200 mb-2 drop-shadow-lg group-hover:text-cyan-100 transition-colors duration-300">
                        {day.day}
                      </h3>
                      <div className="flex items-center text-cyan-200/80 mb-6">
                        <Calendar className="w-5 h-5 mr-2" />
                        <p className="text-base sm:text-lg">{day.date}</p>
                      </div>
                      
                      <div className="space-y-4">
                        {day.events.slice(0, 3).map((event, idx) => (
                          <div
                            key={idx}
                            className="bg-white/10 p-4 rounded-lg hover:bg-white/15 transition-all duration-300"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-semibold text-cyan-100 text-sm sm:text-base">
                                {event.title}
                              </p>
                              {event.time && (
                                <div className="flex items-center text-cyan-300/80 text-xs">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {event.time.split(' - ')[0]}
                                </div>
                              )}
                            </div>
                            {event.description && (
                              <p className="text-cyan-100/60 text-xs sm:text-sm line-clamp-2">{event.description}</p>
                            )}
                          </div>
                        ))}
                        
                        {day.events.length > 3 && (
                          <div className="text-center pt-4">
                            <span className="text-cyan-300/60 text-sm">
                              +{day.events.length - 3} more events
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="absolute bottom-4 right-4 text-cyan-400/60 text-sm">
                        Click to explore →
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {scheduleData.map((_, idx) => (
              <button
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-cyan-400 scale-125"
                    : "bg-blue-500/50 hover:bg-blue-500/80"
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={closeModal} day={selectedDay} />
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(71, 85, 105, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.7);
        }
      `}</style>
    </>
  );
};

export default ScheduleCarousel;