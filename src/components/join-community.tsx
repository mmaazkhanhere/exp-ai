import React from "react";

const JoinCommunity = () => {
  return (
    <section className="relative w-full py-16 md:py-28 lg:py-40 px-4 md:px-6 flex flex-col gap-10 md:gap-16 lg:gap-20 max-w-4xl lg:max-w-[1115px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-10 text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['BankGothic']">
            JOIN THE WISHLIST
          </h2>
          <p className="text-gray-200 text-sm md:text-base font-['Franie']">
            I'm In ! Keep me informed about the project.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/waitlist.png"
            className="w-40 sm:w-48 md:w-56 lg:w-64 object-contain"
            alt="WaitList"
          />
        </div>
      </div>

      <button className="self-center w-full max-w-xs sm:max-w-[332px] h-14 sm:h-16 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] hover:opacity-90 transition-opacity font-['Franie'] text-sm ">
        Elevate My Experience
      </button>
    </section>
  );
};

export default JoinCommunity;
