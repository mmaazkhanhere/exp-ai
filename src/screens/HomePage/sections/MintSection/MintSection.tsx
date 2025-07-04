import React from "react";
import { Button } from "../../../../components/ui/button";

export const MintSection = (): JSX.Element => {
  return (
    <section className="w-full py-40 bg-[#010116] relative">
      <div className="absolute inset-0 opacity-20">
        <img
          className="w-full h-full object-cover"
          alt="Digital Currency Background"
          src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="container flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto relative z-10">
        <h2 className="font-desktop-h2-title font-[number:var(--desktop-h2-title-font-weight)] text-white text-[length:var(--desktop-h2-title-font-size)] text-center tracking-[var(--desktop-h2-title-letter-spacing)] leading-[var(--desktop-h2-title-line-height)] [font-style:var(--desktop-h2-title-font-style)]">
          Mint your limited OG Pass now
        </h2>

        <p className="max-w-[744px] font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-[#ededed] text-[length:var(--paragraph-regular-font-size)] text-center tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
          Embrace the future of digital currency with Mint. Discover a seamless
          and decentralized financial landscape that empowers your financial
          freedom. Own your digital assets and explore new possibilities. Join
          Mint now and unlock the limitless potential of cryptocurrency.
        </p>

        <Button className="px-10 py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] hover:opacity-90 transition-opacity">
          <span className="font-CTA-text-18px-bold font-[number:var(--CTA-text-18px-bold-font-weight)] text-white text-[length:var(--CTA-text-18px-bold-font-size)] tracking-[var(--CTA-text-18px-bold-letter-spacing)] leading-[var(--CTA-text-18px-bold-line-height)] [font-style:var(--CTA-text-18px-bold-font-style)]">
            Mint OG Pass now
          </span>
        </Button>
      </div>
    </section>
  );
};