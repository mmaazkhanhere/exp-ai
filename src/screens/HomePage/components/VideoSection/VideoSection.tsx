import React from "react";
import { Button } from "../../../../components/ui/button";

export const VideoSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#010116]">
      <div className="flex flex-col items-center justify-center gap-8 pb-[120px] px-[120px]">
        <div className="relative w-full">
          <img
            className="w-full h-[624px] object-cover rounded-lg"
            alt="AI Technology Video Preview"
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[133px] h-[153px] bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <div className="w-0 h-0 border-l-[40px] border-l-white border-t-[25px] border-t-transparent border-b-[25px] border-b-transparent ml-2"></div>
            </div>
          </div>
        </div>

        <Button className="flex-1 px-10 py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)]">
          <span className="font-CTA-text-18px-bold font-[number:var(--CTA-text-18px-bold-font-weight)] text-white text-[length:var(--CTA-text-18px-bold-font-size)] tracking-[var(--CTA-text-18px-bold-letter-spacing)] leading-[var(--CTA-text-18px-bold-line-height)] whitespace-nowrap [font-style:var(--CTA-text-18px-bold-font-style)]">
            Trailer
          </span>
        </Button>
      </div>

      <div className="relative">
        <div className="w-1 h-[1314px] absolute right-[156px] bg-gradient-to-b from-blue-500 to-cyan-400"></div>
        <div className="w-[33px] h-[1240px] absolute right-[166px] top-9 bg-gradient-to-b from-blue-600 to-cyan-500 opacity-50"></div>
      </div>
    </section>
  );
};