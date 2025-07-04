import React from "react";

export const TextContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-16 px-4">
      <div className="max-w-[1264px] flex flex-col items-center gap-10">
        <h1 className="font-desktop-title-header font-[number:var(--desktop-title-header-font-weight)] text-white text-[length:var(--desktop-title-header-font-size)] text-center leading-[var(--desktop-title-header-line-height)] tracking-[var(--desktop-title-header-letter-spacing)] [font-style:var(--desktop-title-header-font-style)]">
          World Of The Machines
        </h1>

        <p className="max-w-[744px] font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-grey-100 text-[length:var(--paragraph-regular-font-size)] text-center tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
          At the cross of AI, Gaming, NFT and ASMR Fidgets, get a sneak preview
          of World of the Machines, a fascinating artistic and sociological
          experiment built around the concept of the singularity.
        </p>
      </div>
    </section>
  );
};
