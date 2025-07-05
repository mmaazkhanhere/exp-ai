import React from "react";

const WaitList = () => {
  return (
    <section
      className="relative w-full py-24 flex justify-center items-center h-[530px]"
      style={{
        backgroundImage: "url('/wishlist_bg.png')",
        backgroundPosition: "left",
      }}
    >
      <div className="container mx-auto max-w-7xl flex flex-col items-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['BankGothic']">
            JOIN THE Wishlist
          </h1>
          <p className="text-lg text-gray-200 mb-10 font-['Franie']">
            I'm In! Keep me informed about the project.
          </p>

          <div className="mb-8 w-full max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button className="px-10 py-5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity font-['Franie']">
            Elevate My Experience
          </button>
        </div>
      </div>
    </section>
  );
};

export default WaitList;
