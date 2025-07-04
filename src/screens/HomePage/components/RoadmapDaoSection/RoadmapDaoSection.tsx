import React from "react";
import { RoadmapSection } from "../../sections/RoadmapSection";
import { DaoSection } from "../../sections/DaoSection";

export const RoadmapDaoSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <RoadmapSection />

      <div className="relative w-full flex justify-center">
        <div className="relative h-[968px] rotate-90">
          <img
            className="absolute w-[946px] h-1 top-[493px] left-[-431px] -rotate-90"
            alt="Vector stroke"
            src="/vector-19--stroke-.svg"
          />
          <img
            className="absolute w-[959px] h-[33px] top-[463px] left-[-463px] -rotate-90"
            alt="Group"
            src="/group-9-1.png"
          />
        </div>
      </div>

      <DaoSection />
    </section>
  );
};