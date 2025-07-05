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
    <section className="relative w-full bg-[#010116] pt-20">
      {/* Header content */}
      <div className="flex flex-col items-center justify-center gap-10 relative z-10 mx-auto max-w-[1002px] ">
        <h2 className="text-6xl text-center">
          137 days to save Humanity and create a peaceful bond with the incoming
          Singularity
        </h2>

        <p className="max-w-[744px] text-gray-200 text-center">
          Enter this fascinating adventure, and commit yourself to the
          reflection about how the human species should prepare itself to the
          exponential growth of Artificial Intelligence in its society and the
          potential power takeover of the impeding Singularity.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-[1200px] mt-16 pb-20">
        {/* Vertical timeline line - Fixed to start and end at dot centers */}
        <div
          className="absolute left-1/2 top-[1040px] transform -translate-x-1/2 -translate-y-1/2 w-2 z-0"
          style={{
            background:
              "linear-gradient(to bottom , #9ca3af 18px, #9ca3af calc(100% - 18px), #0305f1 calc(100% - 18px), #0305f1 100%)",
            height: "calc(100% - 340px)",
          }}
        ></div>

        <div className="relative z-10">
          {roadmapItems.slice(0, 7).map((item, index) => {
            // Determine dot color
            let dotColor = "bg-gray-500";
            if (index === 0) dotColor = "bg-[#c11bfb]";
            else if (index === roadmapItems.length - 2)
              dotColor = "bg-[#0305f1]";

            return (
              <div
                key={index}
                className={`flex w-full items-center gap-[100px] ${
                  index > 0 ? "mt-[120px]" : ""
                }`}
              >
                {item.position === "left" ? (
                  <>
                    <div className="flex-1 border-2 border-solid border-[#9898a0] backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] bg-[rgba(255,255,255,0.1)] rounded-lg text-white">
                      <article className="flex flex-col items-start gap-4 p-10">
                        <h3 className="font-desktop-h3-title text-white ">
                          {item.title}
                        </h3>
                        <p className="">{item.description}</p>
                      </article>
                    </div>

                    <div
                      className={`relative w-9 h-9 rounded-[18px] mr-1 border-[6px] border-solid border-[#ede7ff] ${dotColor}`}
                    />

                    <div className="flex flex-col items-start gap-2.5 flex-1">
                      <div className="px-10 py-5 bg-[#0305f1] text-white rounded-lg">
                        <span className="">{item.date}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-end gap-2.5 flex-1">
                      <div
                        className={`px-10 py-5 ${
                          item.dateStyle === "gradient"
                            ? "bg-[#c11bfb]"
                            : "bg-[#0305f1]"
                        } text-white rounded-lg`}
                      >
                        <span className="">{item.date}</span>
                      </div>
                    </div>

                    <div
                      className={`relative w-9 h-9 rounded-[18px] ml-1 border-[6px] border-solid border-[#ede7ff] ${dotColor}`}
                    />

                    <div className="flex-1 border-2 border-solid border-[#9898a0] backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] bg-[rgba(255,255,255,0.1)] rounded-lg">
                      <article className="flex flex-col items-start gap-4 p-10">
                        <h3 className="">{item.title}</h3>
                        <p className="">{item.description}</p>
                      </article>
                    </div>
                  </>
                )}
              </div>
            );
          })}

          {/* Final milestone (centered) */}
          <div className="flex flex-col items-center gap-10 mt-[120px] relative">
            <div className="relative bg-[#0305f1] border-[#ede7ff] w-9 h-9 rounded-[18px] border-[6px] border-solid" />
            <div className="w-[519px] bg-[#0305f1] shadow-[0px_4px_150px_#0305f180] rounded-lg">
              <article className="flex flex-col items-start gap-4 p-10">
                <h3 className="">29 February 2024</h3>
                <p className="font-medium text-grey-100 text-[15px] leading-[22.5px]">
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
