import React from "react";

const VideoSection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 pb-12 sm:pb-16 md:pb-20 lg:pb-[120px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[120px]">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="relative aspect-video w-full">
            <img
              className="w-full h-full object-cover rounded-lg"
              alt="AI Technology Video Preview"
              src="/videoCover.png"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 flex items-center justify-center rounded-full cursor-pointer bg-black/30 backdrop-blur-sm">
                <svg
                  viewBox="0 0 153 133"
                  className="w-14 h-14 md:w-18 md:h-18 lg:w-24 lg:h-24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="0,0 153,66.5 0,133" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <button className="font-['Franie'] px-8 py-4 md:px-10 md:py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] w-full max-w-md text-sm sm:text-base font-bold cursor-pointer hover:scale-[1.03] transition-transform duration-300">
          Trailer
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
