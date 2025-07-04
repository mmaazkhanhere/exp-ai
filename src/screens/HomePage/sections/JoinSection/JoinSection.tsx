import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const JoinSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 bg-[#010116] relative">
      <div className="absolute inset-0 opacity-30">
        <img
          className="w-full h-full object-cover"
          alt="Community Background"
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="container mx-auto relative z-10">
        <Card className="bg-transparent border-0 shadow-none">
          <CardContent className="flex flex-col items-center justify-center gap-8 py-8">
            <h2 className="font-desktop-h2-title font-[number:var(--desktop-h2-title-font-weight)] text-genericwhite text-[length:var(--desktop-h2-title-font-size)] text-center tracking-[var(--desktop-h2-title-letter-spacing)] leading-[var(--desktop-h2-title-line-height)] [font-style:var(--desktop-h2-title-font-style)]">
              Join the Wishlist
            </h2>

            <p className="max-w-[744px] font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-grey-100 text-[length:var(--paragraph-regular-font-size)] text-center tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
              I&apos;m In ! Keep me informed about the project.
            </p>

            <div className="w-[486px] h-[70px] bg-[#ffffff0d] rounded-lg backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] flex items-center px-10 py-5">
              <Input
                className="border-0 bg-transparent text-white [font-family:'Franie-Bold',Helvetica] font-bold text-[15px] tracking-[0] leading-[15px] focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white"
                placeholder="Enter your e-mail"
              />
            </div>

            <Button className="px-10 py-5 h-auto rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] hover:bg-[linear-gradient(270deg,rgba(3,5,241,0.9)_0%,rgba(1,241,242,0.9)_100%)]">
              <span className="font-CTA-text-18px-bold font-[number:var(--CTA-text-18px-bold-font-weight)] text-genericwhite text-[length:var(--CTA-text-18px-bold-font-size)] tracking-[var(--CTA-text-18px-bold-letter-spacing)] leading-[var(--CTA-text-18px-bold-line-height)] whitespace-nowrap [font-style:var(--CTA-text-18px-bold-font-style)]">
                Elevate My Experience
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};