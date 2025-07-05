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
    <section className="w-full py-16">
      {/* Centered 1000px container */}
      <div className="max-w-[1000px] mx-auto border border-white p-8 rounded-lg">
        <div className="grid grid-cols-2 gap-8 justify-items-center">
          {solutionCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col items-center justify-center text-center w-full max-w-[400px] h-[640px] rounded-lg border-2 border-solid border-[#9898a0] backdrop-blur-[2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(2px)_brightness(100%)] bg-[linear-gradient(135deg,rgba(245,245,250,0.2)_0%,rgba(255,255,255,0.05)_100%)] p-6"
            >
              <div className="text-4xl font-bold mb-6">{card.id}</div>
              <div className="flex flex-col gap-6 w-full">
                <h3 className="text-3xl font-bold font-['BankGothic']">
                  {card.title}
                </h3>
                <p className="text-sm font-['Franie'] text-left">
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
