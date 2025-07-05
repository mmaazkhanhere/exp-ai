import React from "react";

const TextSection = () => {
  return (
    <section className="flex flex-col w-full max-w-[1062px] items-center justify-center gap-6 md:gap-8 lg:gap-10 mx-auto pt-8 md:pt-12 lg:pt-16 px-4 text-center">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-['BankGothic'] leading-tight">
        A NFT series like you've never seen before
      </h2>

      <p className="w-full max-w-[744px] mx-auto font-['Franie'] text-xs md:text-sm">
        World Of The Machines is based on exclusive innovations, including the
        worlwide first ASMR connected Fidget using a unique magnetic bezel and a
        set of crypto coins officially stamped by "La Monnaie de Paris".
      </p>

      <button className="px-6 py-3 md:px-10 md:py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] font-['Franie'] hover:opacity-90 transition-opacity text-sm sm:text-base">
        The lore
      </button>
    </section>
  );
};

export default TextSection;
