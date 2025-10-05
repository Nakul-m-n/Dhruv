import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../sections/Home";
import Info from "../sections/Info";
import Carousel from "../sections/Carousel";
import Guests from "../sections/GuestSpeakersPage"; // Add this import
import Sponsors from "../sections/Sponsors";
import About from "../sections/About";
import Footer from "../components/Footer";
import ContactSection from "../sections/Contacts";
import StarAppearancesSection from "../sections/StarAppearances";

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setScrollProgress(scrollPercent);
      setIsScrolling(true);

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => setIsScrolling(false), 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="relative text-white overflow-x-hidden min-h-screen">
      <Navbar />

      <div className="fixed right-4 top-0 h-full w-12 z-50 pointer-events-none">
        <div className="relative h-full w-2 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-blue-500/30 to-cyan-500/20 rounded-full"></div>
          <div className="absolute bottom-0 w-2 h-4 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-b-full"></div>
        </div>

        <div
          className={`absolute w-10 h-10 transition-all duration-300 ease-out ${
            isScrolling ? "scale-110" : "scale-100"
          } ${scrollProgress >= 99 ? "opacity-0" : "opacity-100"}`}
          style={{
            top: `calc(${Math.min(scrollProgress, 99)}% - 20px)`,
            left: "-8px",
          }}
        >
          <img src={"/images/eva.png"} alt="EVA" className="w-10 h-10 object-contain" />
          {isScrolling && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full animate-pulse"></div>
          )}
          {scrollProgress < 5 && (
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-xs text-cyan-300 font-mono bg-black/50 px-2 py-1 rounded-full border border-cyan-500/30 animate-pulse">
              Down to View
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-cyan-300 font-mono bg-black/50 px-2 py-1 rounded-full border border-cyan-500/30">
          {Math.round(scrollProgress)}%
        </div>
      </div>

      <main className="relative z-10">
        <section id="home">
          <HomeSection />
        </section>
        <section id="events">
          <Carousel />
        </section>
         <section id="stars">
          <StarAppearancesSection/>
        </section>
        <section id="guests">
          <Guests />
        </section>
        {/* <section id="info">
          <Info />
        </section> */}
        <section id="sponsors">
          <Sponsors />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <ContactSection/>
        </section>
       
      </main>

      <Footer />
    </div>
  );
};

export default Home;