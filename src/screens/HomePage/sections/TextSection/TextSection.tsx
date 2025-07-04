import React from "react";
import { Button } from "../../../../components/ui/button";

export const TextSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1062px] items-center justify-center gap-10 mx-auto py-16">
      <h2 className="font-desktop-h2-title font-[number:var(--desktop-h2-title-font-weight)] text-white text-[length:var(--desktop-h2-title-font-size)] text-center tracking-[var(--desktop-h2-title-letter-spacing)] leading-[var(--desktop-h2-title-line-height)] [font-style:var(--desktop-h2-title-font-style)]">
        A NFT series like you&#39;ve never seen before
      </h2>

      <p className="max-w-[744px] font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-[length:var(--paragraph-regular-font-size)] text-center leading-[var(--paragraph-regular-line-height)] text-grey-100 tracking-[var(--paragraph-regular-letter-spacing)] [font-style:var(--paragraph-regular-font-style)]">
        World Of The Machines is based on exclusive innovations, including the
        worlwide first ASMR connected Fidget using a unique magnetic bezel and a
        set of crypto coins officially stamped by &#34;La Monnaie de Paris&#34;.
      </p>

      <Button className="px-10 py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] hover:opacity-90 transition-opacity">
        <span className="font-CTA-text-18px-bold font-[number:var(--CTA-text-18px-bold-font-weight)] text-white text-[length:var(--CTA-text-18px-bold-font-size)] tracking-[var(--CTA-text-18px-bold-letter-spacing)] leading-[var(--CTA-text-18px-bold-line-height)] whitespace-nowrap [font-style:var(--CTA-text-18px-bold-font-style)]">
          The lore
        </span>
      </Button>
    </section>
  );
};
