import React from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BlueCardSection } from "./components/BlueCardSection";
import { VideoSection } from "./components/VideoSection";
import { RoadmapDaoSection } from "./components/RoadmapDaoSection";
import { TextContentSection } from "./sections/TextContentSection";
import { TextSection } from "./sections/TextSection";
import { MintSection } from "./sections/MintSection";
import { SolutionSection } from "./sections/SolutionSection";
import { JoinTheCommunitySection } from "./sections/JoinTheCommunitySection";
import { TeamSection } from "./sections/TeamSection";
import { JoinSection } from "./sections/JoinSection";
import { FooterSection } from "./sections/FooterSection";

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-[#010116] flex flex-row justify-center w-full">
      <div className="bg-app-background w-full max-w-[1440px] relative">
        {/* Header/Navigation */}
        <Header />

        {/* TextContentSection */}
        <TextContentSection />

        {/* Hero Background Image */}
        <HeroSection />

        {/* TextSection */}
        <TextSection />

        {/* Blue Card Section */}
        <BlueCardSection />

        {/* MintSection */}
        <MintSection />

        {/* Video Section */}
        <VideoSection />

        {/* SolutionSection */}
        <SolutionSection />

        {/* Roadmap and DAO Sections */}
        <RoadmapDaoSection />

        {/* Final Sections */}
        <JoinTheCommunitySection />
        <TeamSection />
        <JoinSection />
        <FooterSection />
      </div>
    </div>
  );
};