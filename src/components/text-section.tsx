import React from "react";

const TextSection = () => {
  return (
    <section className="flex flex-col w-full max-w-[1062px] items-center justify-center gap-10 mx-auto pt-16 text-center">
      <h2 className="text-6xl ">
        A NFT series like you&#39;ve never seen before
      </h2>

      <p className="max-w-[744px] mx-auto">
        World Of The Machines is based on exclusive innovations, including the
        worlwide first ASMR connected Fidget using a unique magnetic bezel and a
        set of crypto coins officially stamped by &#34;La Monnaie de Paris&#34;.
      </p>

      <button className="px-10 py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] hover:opacity-90 transition-opacity font-bold text-lg">
        The lore
      </button>
    </section>
  );
};

export default TextSection;
