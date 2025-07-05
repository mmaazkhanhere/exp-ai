import React from "react";

const roadmapItems = [
  {
    date: "19 July 2023",
    title: "Secret Dinner",
    description:
      "OGs and investors secret dinner on the last day of the ETH Conference - Paris",
    position: "right",
    dateStyle: "gradient",
  },
  {
    date: "20 August 2023",
    title: "Private Sale",
    description:
      "Top 5% Meteorite rarity PassForLife - Fidget x 137 super meteorit Limited Edition",
    position: "left",
    dateStyle: "blue",
  },
  {
    date: "25 August 2023",
    title: "Seed",
    description: "Seed Round closed",
    position: "right",
    dateStyle: "blue",
  },
  {
    date: "30 August 2023",
    title: "Fidget Production",
    description:
      "Prototypes, capitalisation final validation. Production suppliers final choice, negotiation and factory order",
    position: "left",
    dateStyle: "blue",
  },
  {
    date: "25 Septembre 2023",
    title: "PreSale",
    description:
      "Top10 to top 25% rarity PassForLife - Fidget x 3,500 904L Steel Limited Edition",
    position: "right",
    dateStyle: "blue",
  },
  {
    date: "10 October 2023",
    title: "Public Sale",
    description: "Start of the 137 days contes",
    position: "left",
    dateStyle: "blue",
  },
  {
    date: "End February 2024",
    title: "Delivery",
    description:
      "Participants accounts snapshot. Reveal leaderboard calculation",
    position: "right",
    dateStyle: "blue",
  },
  {
    date: "29 February 2024",
    title: "29 February 2024",
    description:
      "Rewards announcement (Winners Leaderboard), and final distribution",
    position: "center",
    dateStyle: "final",
  },
];

const RoadMapSection = () => {
  return (
    <section className="relative w-full bg-[#010116] pt-10 md:pt-20">
      <div className="absolute w-full -top-[500px] md:-top-[1000px]">
        <img src="/lava_roadmap.png" alt="Gradient" />
      </div>

      {/* Header content */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10 relative z-10 mx-auto max-w-4xl xl:max-w-[1002px]">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-['BankGothic']">
          137 days to save Humanity and create a peaceful bond with the incoming
          Singularity
        </h2>

        <p className="max-w-2xl text-gray-200 text-center font-['Franie'] text-xs md:text-sm">
          Enter this fascinating adventure, and commit yourself to the
          reflection about how the human species should prepare itself to the
          exponential growth of Artificial Intelligence in its society and the
          potential power takeover of the impeding Singularity.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-4xl xl:max-w-[1200px] mt-10 md:mt-16 pb-10 md:pb-20 px-2 md:px-0">
        {/* Vertical timeline line - Mobile */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 transform -translate-x-1/2 z-0 md:hidden"></div>

        {/* Vertical timeline line - Desktop */}
        <div
          className="absolute left-1/2 top-[1040px] transform -translate-x-1/2 -translate-y-1/2 w-2 z-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom , #9ca3af 18px, #9ca3af calc(100% - 18px), #0305f1 calc(100% - 18px), #0305f1 100%)",
            height: "calc(100% - 340px)",
          }}
        ></div>

        <div className="relative z-20">
          {roadmapItems.slice(0, 7).map((item, index) => {
            // Determine dot color
            let dotColor = "bg-gray-500";
            if (index === 0) dotColor = "bg-[#c11bfb]";
            else if (index === roadmapItems.length - 2)
              dotColor = "bg-[#0305f1]";

            return (
              <React.Fragment key={index}>
                {/* Mobile layout */}
                <div className="md:hidden flex flex-col items-center mb-12">
                  {/* Date */}
                  <div
                    className={`px-6 py-3 w-full max-w-xs ${
                      item.dateStyle === "gradient"
                        ? "bg-[#c11bfb]"
                        : "bg-[#0305f1]"
                    } text-white rounded-lg text-center`}
                  >
                    <span className="font-['BankGothic'] text-base sm:text-lg">
                      {item.date}
                    </span>
                  </div>

                  {/* Dot */}
                  <div
                    className={`relative w-7 h-7 rounded-full mt-4 mb-4 border-4 border-solid border-[#ede7ff] ${dotColor} z-10`}
                  />

                  {/* Content box */}
                  <div className="border-2 border-solid border-[#9898a0] backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] bg-[rgba(255,255,255,0.1)] rounded-lg text-white w-full max-w-md">
                    <article className="flex flex-col items-start gap-3 p-4 sm:p-6">
                      <h3 className="text-white font-['BankGothic'] text-lg sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="font-['Franie'] text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </article>
                  </div>
                </div>

                {/* Desktop layout */}
                <div
                  className={`hidden md:flex w-full items-center gap-6 lg:gap-[100px] ${
                    index > 0 ? "mt-[80px] lg:mt-[120px]" : ""
                  }`}
                >
                  {item.position === "left" ? (
                    <>
                      <div className="flex-1 border-2 border-solid border-[#9898a0] backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] bg-[rgba(255,255,255,0.1)] rounded-lg text-white z-20">
                        <article className="flex flex-col items-start gap-4 p-6 lg:p-10">
                          <h3 className="text-white font-['BankGothic'] text-xl lg:text-2xl">
                            {item.title}
                          </h3>
                          <p className="font-['Franie'] text-sm">
                            {item.description}
                          </p>
                        </article>
                      </div>

                      <div
                        className={`relative w-7 h-7 lg:w-9 lg:h-9 rounded-full lg:rounded-[18px] border-4 lg:border-[6px] border-solid border-[#ede7ff] ${dotColor}`}
                      />

                      <div className="flex flex-col items-start gap-2.5 flex-1">
                        <div className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0305f1] text-white rounded-lg">
                          <span className="font-['BankGothic'] text-base lg:text-xl">
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col items-end gap-2.5 flex-1">
                        <div
                          className={`px-6 py-3 lg:px-10 lg:py-5 ${
                            item.dateStyle === "gradient"
                              ? "bg-[#c11bfb]"
                              : "bg-[#0305f1]"
                          } text-white rounded-lg`}
                        >
                          <span className="font-['BankGothic'] text-base lg:text-xl">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`relative w-7 h-7 lg:w-9 lg:h-9 rounded-full lg:rounded-[18px] border-4 lg:border-[6px] border-solid border-[#ede7ff] ${dotColor}`}
                      />

                      <div className="flex-1 border-2 border-solid border-[#9898a0] backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] bg-[rgba(255,255,255,0.1)] rounded-lg">
                        <article className="flex flex-col items-start gap-4 p-6 lg:p-10">
                          <h3 className="font-['BankGothic'] text-xl lg:text-2xl">
                            {item.title}
                          </h3>
                          <p className="font-['Franie'] text-sm">
                            {item.description}
                          </p>
                        </article>
                      </div>
                    </>
                  )}
                </div>
              </React.Fragment>
            );
          })}

          {/* Final milestone (centered) */}
          <div className="flex flex-col items-center gap-6 md:gap-10 mt-10 md:mt-[80px] lg:mt-[120px] relative z-10">
            {/* Background image for final milestone */}
            <div className="absolute w-full h-full top-0 flex justify-center items-center -z-10 md:-right-[200px] lg:-right-[345px]">
              <img
                src="/lava_dao.png"
                alt="Gradient"
                className="object-contain w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-none opacity-70 scale-110 md:scale-125"
              />
            </div>

            <div className="relative bg-[#0305f1] border-[#ede7ff] w-7 h-7 md:w-9 md:h-9 rounded-full md:rounded-[18px] border-4 md:border-[6px] border-solid z-20" />
            <div className="w-full max-w-md md:w-[400px] lg:w-[519px] bg-[#0305f1] shadow-[0px_4px_150px_#0305f180] rounded-lg z-20">
              <article className="flex flex-col items-start gap-3 md:gap-4 p-4 sm:p-6 md:p-10">
                <h3 className="text-lg md:text-xl lg:text-2xl font-['BankGothic']">
                  29 February 2024
                </h3>
                <p className="font-medium font-['Franie'] text-grey-100 text-sm md:text-[15px] leading-relaxed">
                  Rewards announcement (Winners Leaderboard), and final
                  distribution
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMapSection;
