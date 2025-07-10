import { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/header";
import Hero from "./components/hero";
import TextSection from "./components/text-section";
import BlueCardSection from "./components/blue-card-section";
import MintSection from "./components/mint-section";
import VideoSection from "./components/video-section";
import SolutionSection from "./components/solution-section";
import RoadMapDaoSection from "./components/roadmap-dao-section";
import JoinCommunity from "./components/join-community";
import MeetTeam from "./components/meet-team";
import WaitList from "./components/waitlist";
import Footer from "./components/footer";

import "./assets/fonts.css";

function App() {
  // Add smooth scrolling behavior
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelectorAll('.parallax');
      const speed = 0.5;

      parallax.forEach((element) => {
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.8,
  };

  return (
    <motion.div 
      className="bg-[#010116] text-white max-w-[1440px] mx-auto overflow-x-hidden"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Hero />
        <TextSection />
        <BlueCardSection />
        <MintSection />
        <VideoSection />
        <SolutionSection />
        <RoadMapDaoSection />
        <JoinCommunity />
        <MeetTeam />
        <WaitList />
      </motion.main>
      <Footer />
      
      {/* Scroll indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 z-50"
        style={{
          transformOrigin: "0%",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

export default App;
