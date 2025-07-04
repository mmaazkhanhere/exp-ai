import React from "react";

const MintSection = () => {
  return (
    <section className="w-full py-40 relative overflow-hidden bg-black text-white font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/mintBg.jpg" // <-- Your original image
          alt="OG Pass Background"
          className="w-full h-full object-cover opacity-25 mix-blend-screen"
        />
        {/* Neon Blue Overlay */}
        <div className="absolute inset-0 bg-[#0305f1] opacity-40 mix-blend-color-dodge blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Mint your limited OG Pass now
        </h2>

        <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-10 max-w-[744px] mx-auto">
          Embrace the future of digital currency with Mint. Discover a seamless
          and decentralized financial landscape that empowers your financial
          freedom. Own your digital assets and explore new possibilities. Join
          Mint now and unlock the limitless potential of cryptocurrency.
        </p>

        <button className="px-10 py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] hover:opacity-90 transition-opacity">
          Mint OG Pass now
        </button>
      </div>
    </section>
  );
};

export default MintSection;
