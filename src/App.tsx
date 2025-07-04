import React from "react";
import Header from "./components/Header";
import Hero from "./components/hero";
import TextSection from "./components/text-section";
import BlueCardSection from "./components/blue-card-section";
import MintSection from "./components/mint-section";
import VideoSection from "./components/video-section";
import SolutionSection from "./components/solution-section";

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
    </div>
  );
}

export default App;
