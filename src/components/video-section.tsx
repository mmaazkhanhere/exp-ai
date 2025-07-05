import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center gap-8 pb-[120px] px-[120px]">
        <div className="relative w-full">
          <img
            className="w-full h-[624px] object-cover rounded-lg"
            alt="AI Technology Video Preview"
            src="/videoCover.png"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-32 h-32  flex items-center justify-center rounded-full cursor-pointer">
              <svg
                viewBox="0 0 153 133"
                className="w-24 h-24" // Increased size
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="0,0 153,66.5 0,133" fill="white" />
              </svg>
            </button>
          </div>
        </div>

        <button className="flex-1 font-['Franie'] px-10 py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] w-full text-lg font-bold cursor-pointer hover:scale-105">
          Trailer
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
