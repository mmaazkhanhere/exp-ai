import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const JoinTheCommunitySection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-10 max-w-[615px]">
            <h2 className="font-desktop-h2-title font-[number:var(--desktop-h2-title-font-weight)] text-white text-[length:var(--desktop-h2-title-font-size)] tracking-[var(--desktop-h2-title-letter-spacing)] leading-[var(--desktop-h2-title-line-height)] [font-style:var(--desktop-h2-title-font-style)]">
              JOIN THE WISHLIST
            </h2>
            <p className="font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-grey-100 text-[length:var(--paragraph-regular-font-size)] tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
              I&#39;m In ! Keep me informed about the project.
            </p>
          </div>

          <Card className="w-[340px] h-[340px] relative blur-[2px] bg-transparent border-0">
            <CardContent className="p-0">
              <div className="relative w-[219px] h-[210px] top-[65px] left-[61px] bg-[url(/group.png)] bg-[100%_100%]">
                <div className="h-[210px] bg-[url(/group-1.png)] bg-[100%_100%]" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-16">
          <Button className="px-10 py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] hover:opacity-90 transition-opacity">
            <span className="font-CTA-text-18px-bold font-[number:var(--CTA-text-18px-bold-font-weight)] text-white text-[length:var(--CTA-text-18px-bold-font-size)] tracking-[var(--CTA-text-18px-bold-letter-spacing)] leading-[var(--CTA-text-18px-bold-line-height)] whitespace-nowrap [font-style:var(--CTA-text-18px-bold-font-style)]">
              Elevate My Experience
            </span>
          </Button>
        </div>

        <div className="flex items-center gap-20 mt-16">
          <img className="w-16 h-[68px]" alt="Group" src="/group-7-2.png" />
          <img className="w-[21px] h-[21px]" alt="X" src="/x-2.svg" />
        </div>
      </div>
    </section>
  );
};
