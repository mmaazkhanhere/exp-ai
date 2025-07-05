import React from "react";

const WaitList = () => {
  return (
    <section
      className="relative w-full py-16 md:py-20 lg:py-24 flex justify-center items-center h-auto sm:h-[530px]"
      style={{
        backgroundImage: "url('/wishlist_bg.png')",
        backgroundPosition: "left",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto max-w-7xl flex flex-col items-center px-4 sm:px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-['BankGothic']">
            JOIN THE Wishlist
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6 sm:mb-10 font-['Franie']">
            I'm In! Keep me informed about the project.
          </p>

          <div className="mb-6 md:mb-8 w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 md:p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            />
          </div>

          <button className="px-8 py-4 md:px-10 md:py-5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity font-['Franie'] text-sm ">
            Elevate My Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default WaitList;
