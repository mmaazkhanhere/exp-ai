import React from "react";
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
  return (
    <div className="bg-[#010116] text-white max-w-[1440px] mx-auto">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
