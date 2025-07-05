import React from "react";

const SolutionSection = () => {
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
    <section className="w-full py-12 md:py-16 px-6">
      {/* Responsive container */}
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-[1000px] mx-auto p-6 md:p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {solutionCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col items-center justify-start text-center w-full h-auto rounded-lg border-2 border-solid border-[#9898a0] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] bg-[linear-gradient(135deg,rgba(245,245,250,0.2)_0%,rgba(255,255,255,0.05)_100%)] p-6"
            >
              <div className="text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                {card.id}
              </div>
              <div className="flex flex-col gap-4 md:gap-6 w-full h-full">
                <h3 className="text-2xl md:text-3xl font-bold font-['BankGothic']">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm font-['Franie'] text-left flex-grow">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
