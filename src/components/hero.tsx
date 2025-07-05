import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-16 px-4 -mt-14">
      <div className="flex flex-col items-center ">
        <p className="font-['Franie'] font-light">
          {" "}
          {/* Apply Franie to this paragraph */}
          <span className="font-['BankGothic']">THEXP.AI</span> presents
        </p>
        {/* Apply BankGothic to the h1. Tailwind's font-bold will try to use the boldest variant defined for 'BankGothic'. */}
        <h1 className="text-7xl font-bold font-['BankGothic']">
          World Of The Machines
        </h1>
      </div>
      <p className="text-center p-10 max-w-[744px] mx-auto font-['Franie']">
        {" "}
        {/* Apply Franie to this paragraph */}
        At the cross of AI, Gaming, NFT and ASMR Fidgets, get a sneak preview of
        World of the Machines, a fascinating artistic and sociological
        experiment built around the concept of the singularity.
      </p>
      <div className="w-full h-[611px] bg-[#010116] flex items-center justify-center mt-8">
        <img
          className="w-full h-full object-cover"
          alt="AI Technology Hero"
          src="/hero.png"
        />
      </div>
    </section>
  );
};

export default Hero;
