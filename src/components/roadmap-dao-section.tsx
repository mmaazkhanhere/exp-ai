import React from "react";
import RoadMapSection from "./roadmap-section";
import DaoSection from "./dao-section";

const RoadMapDaoSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-5">
      <RoadMapSection />
      <img src="/dao_separator.png" className="pt-10" />
      <DaoSection />
    </section>
  );
};

export default RoadMapDaoSection;
