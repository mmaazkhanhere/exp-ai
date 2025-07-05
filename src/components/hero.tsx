import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-8 md:py-12 lg:py-16 px-4 -mt-8 sm:-mt-10 md:-mt-14">
      <div className="flex flex-col items-center">
        <p className="font-['Franie'] font-light text-sm md:text-base">
          <span className="font-['BankGothic']">THEXP.AI</span> presents
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['BankGothic'] text-center mt-2 sm:mt-3">
          World Of The Machines
        </h1>
      </div>
      <p className="text-center p-6 md:p-8 lg:p-10 max-w-[744px] mx-auto font-['Franie'] text-sm sm:text-base">
        At the cross of AI, Gaming, NFT and ASMR Fidgets, get a sneak preview of
        World of the Machines, a fascinating artistic and sociological
        experiment built around the concept of the singularity.
      </p>
      <div className="w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[611px] bg-[#010116] flex items-center justify-center mt-6 md:mt-4 ">
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
