import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Define roadmap data for easier mapping
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

export const RoadmapSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#010116]">
      <div className="relative w-full">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img
            className="absolute w-[420px] h-[1987px] top-0 left-0 object-cover"
            alt="Technology Background"
            src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="absolute w-[735px] h-[2116px] top-[2773px] left-[705px] object-cover"
            alt="Digital Background"
            src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>

        {/* Header content */}
        <div className="flex flex-col items-center justify-center gap-10 relative z-10 mx-auto max-w-[1002px] pt-[1074px]">
          <h2 className="font-desktop-h2-title font-[number:var(--desktop-h2-title-font-weight)] text-white text-[length:var(--desktop-h2-title-font-size)] text-center tracking-[var(--desktop-h2-title-letter-spacing)] leading-[var(--desktop-h2-title-line-height)] [font-style:var(--desktop-h2-title-font-style)]">
            137 days to save Humanity and create a peaceful bond with the
            incoming Singularity
          </h2>

          <p className="max-w-[744px] font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-grey-100 text-[length:var(--paragraph-regular-font-size)] text-center tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
            Enter this fascinating adventure, and commit yourself to the
            reflection about how the human species should prepare itself to the
            exponential growth of Artificial Intelligence in its society and the
            potential power takeover of the impeding Singularity.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-[1200px] mt-16 pb-20">
          <div className="relative">
            {/* Timeline center line */}
            <Separator
              orientation="vertical"
              className="absolute h-[1966px] w-1.5 top-[60px] left-1/2 transform -translate-x-1/2 bg-[#ede7ff]"
            />

            {/* Timeline items */}
            <div className="relative">
              {roadmapItems.slice(0, 7).map((item, index) => (
                <div
                  key={index}
                  className={`flex w-full items-center gap-[100px] ${index > 0 ? "mt-[120px]" : ""}`}
                >
                  {item.position === "left" ? (
                    <>
                      <Card className="flex-1 border-2 border-solid border-[#9898a0] backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] bg-[rgba(255,255,255,0.1)] rounded-lg">
                        <CardContent className="flex flex-col items-start gap-4 p-10">
                          <h3 className="font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-white text-[length:var(--desktop-h3-title-font-size)] tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] [font-style:var(--desktop-h3-title-font-style)]">
                            {item.title}
                          </h3>
                          <p className="font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-grey-100 text-[length:var(--paragraph-regular-font-size)] tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>

                      <div className="relative w-9 h-9 bg-secondary-400 rounded-[18px] border-[6px] border-solid border-[#ede7ff]" />

                      <div className="flex flex-col items-start gap-2.5 flex-1">
                        <Badge className="px-10 py-5 bg-[#0305f1] text-white rounded-lg">
                          <span className="font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-white text-[length:var(--desktop-h3-title-font-size)] text-center tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] whitespace-nowrap [font-style:var(--desktop-h3-title-font-style)]">
                            {item.date}
                          </span>
                        </Badge>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col items-end gap-2.5 flex-1">
                        <Badge
                          className={`px-10 py-5 ${item.dateStyle === "gradient" ? "bg-[#c11bfb]" : "bg-[#0305f1]"} text-white rounded-lg`}
                        >
                          <span className="font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-white text-[length:var(--desktop-h3-title-font-size)] text-center tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] whitespace-nowrap [font-style:var(--desktop-h3-title-font-style)]">
                            {item.date}
                          </span>
                        </Badge>
                      </div>

                      <div className="relative w-9 h-9 bg-secondary-400 rounded-[18px] border-[6px] border-solid border-[#ede7ff]" />

                      <Card className="flex-1 border-2 border-solid border-[#9898a0] backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] bg-[rgba(255,255,255,0.1)] rounded-lg">
                        <CardContent className="flex flex-col items-start gap-4 p-10">
                          <h3 className="font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-white text-[length:var(--desktop-h3-title-font-size)] tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] [font-style:var(--desktop-h3-title-font-style)]">
                            {item.title}
                          </h3>
                          <p className="font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-grey-100 text-[length:var(--paragraph-regular-font-size)] tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </>
                  )}
                </div>
              ))}

              {/* Final milestone (centered) */}
              <div className="flex flex-col items-center gap-10 mt-[120px]">
                <div className="relative bg-[#0305f1] border-[#ede7ff] w-9 h-9 rounded-[18px] border-[6px] border-solid" />

                <Card className="w-[519px] bg-[#0305f1] shadow-[0px_4px_150px_#0305f180] rounded-lg">
                  <CardContent className="flex flex-col items-start gap-4 p-10">
                    <h3 className="font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-white text-[length:var(--desktop-h3-title-font-size)] tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] [font-style:var(--desktop-h3-title-font-style)]">
                      29 February 2024
                    </h3>
                    <p className="font-medium text-grey-100 text-[15px] leading-[22.5px]">
                      Rewards announcement (Winners Leaderboard), and final
                      distribution
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};