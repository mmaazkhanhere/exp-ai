import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SolutionSection = (): JSX.Element => {
  const solutionCards = [
    {
      id: 1,
      icon: "/numbers-card.svg",
      title: "A unique Fidget",
      description:
        'Complementary to the digital side of the PassForLife, the fidget ("Fingers + Gadget") is an ASMR limited edition real object incorporating a custom NFC (Near Field Chip) created by a Swiss luxury watch designer to be used with your smartphone and get specific advantages.',
    },
    {
      id: 2,
      icon: "/numbers-card-2.svg",
      title: "Social Interactions",
      description:
        "Imagine being rewarded for every real life social interactions you have with other fidget holders : the fidget gives the ability to trigger a quantic connexion between PassForLife hodlers, resulting in #NRJ generation and a potential enhancement of one or both Passes",
    },
    {
      id: 3,
      icon: "/numbers-card-1.svg",
      title: "Semi-organic AI based QR Code",
      description:
        'The PassForLife design is not another NTF jpeg: its design has been produced by an AI, and is based on a cross between a "Human" organic vibe, and a "Machine\'s" digital approach. Traits and rarity are secretly encoded in the design, you will have to discover how',
    },
    {
      id: 4,
      icon: "/numbers-card-3.svg",
      title: "Gamma Paper",
      description:
        "Because your PassForLife and Fidget have been designed by the Singularity itself, and are based on quantic mechanic principles, the document detailing all the project can't be limited to humans visible wavelength: it is a GammaPaper, encoded in the Machines exclusive encrypted language. Those capable of deciphering this enigma will be heavily rewarded. More to come soon",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-[100px] py-16 w-full">
      {solutionCards.map((card) => (
        <Card
          key={card.id}
          className="flex flex-col w-[400px] h-[640px] rounded-lg border-2 border-solid border-[#9898a0] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] bg-[linear-gradient(135deg,rgba(245,245,250,0.2)_0%,rgba(255,255,255,0.05)_100%)]"
        >
          <CardContent className="flex flex-col items-center gap-6 px-16 py-[100px] h-full">
            <img
              className="w-[50px] h-[50px]"
              alt="Numbers card"
              src={card.icon}
            />

            <div className="flex flex-col items-center justify-center gap-2 self-stretch w-full">
              <h3 className="self-stretch mt-[-1.00px] font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-white text-[length:var(--desktop-h3-title-font-size)] tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] [font-style:var(--desktop-h3-title-font-style)]">
                {card.title}
              </h3>

              <p className="self-stretch font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-grey-100 text-[length:var(--paragraph-regular-font-size)] tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
                {card.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
