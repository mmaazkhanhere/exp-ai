import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DaoSection = (): JSX.Element => {
  // Data for fund allocation percentages
  const leftSideItems = [
    { label: "A.I. Fund", percentage: "17 %", top: "-top-px" },
    { label: "Reward", percentage: "20%", top: "top-[222px]" },
    { label: "Fidget", percentage: "18%", top: "top-[475px]" },
  ];

  const rightSideItems = [
    { label: "Inception", percentage: "1%", top: "top-0" },
    { label: "Design", percentage: "1%", top: "top-[57px]" },
    {
      label: "Intellectual property",
      percentage: "5%",
      top: "top-[125px]",
      multiline: true,
    },
    { label: "Advisors", percentage: "6%", top: "top-[182px]" },
    { label: "Founders", percentage: "12 %", top: "top-[297px]" },
    { label: "Investors", percentage: "5%", top: "top-[421px]" },
    { label: "Marketing", percentage: "14%", top: "top-[529px]" },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] py-40">
      <div className="flex flex-col items-center gap-[45px]">
        <div className="flex flex-col items-center gap-6">
          <h2 className="max-w-[1002px] font-desktop-h2-title font-[number:var(--desktop-h2-title-font-weight)] text-white text-[length:var(--desktop-h2-title-font-size)] text-center tracking-[var(--desktop-h2-title-letter-spacing)] leading-[var(--desktop-h2-title-line-height)] [font-style:var(--desktop-h2-title-font-style)]">
            A Foundation and a DAO Fund focused on Artificial Intelligence
          </h2>

          <p className="max-w-[744px] font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-grey-100 text-[length:var(--paragraph-regular-font-size)] text-center tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
            The majority of the Mint revenues will be redistributed to
            participants in the form of : <br />• The limited edition connected
            metal Fidget* complementary to the Pass For Life NFT.
            <br />• Numerous short-term (weekly) and Final Reveal rewards.
            <br />
            <br />
            But that&#39;s not all: Should the Series be successful enough (i.e.
            cross a predefined threshold,) the team aims to seed a Swiss based
            Foundation and a DAO Fund focused on Artificial Intelligence, and
            settle a bonus airdrop in the form of some AI Fund token rewarding
            the best participants.
          </p>
        </div>

        <Card className="bg-transparent border-0">
          <CardContent className="flex flex-col items-center gap-4 p-0">
            <div className="flex items-center gap-2.5">
              <h3 className="max-w-[744px] font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-genericwhite text-[length:var(--desktop-h3-title-font-size)] text-center tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] [font-style:var(--desktop-h3-title-font-style)]">
                1. TheXP Foundation
              </h3>
            </div>

            <p className="max-w-[744px] font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-grey-100 text-[length:var(--paragraph-regular-font-size)] text-center tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
              Missions: - Support the evangelization of Artificial Intelligence
              and the concept of the Singularity toward the public, and provide
              them with the necessary knowledge to think critically and make the
              right decision. Structure an AI Ethical label, like the one
              developed to frame Research and Development in the field of Human
              Genome.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-transparent border-0">
          <CardContent className="flex flex-col items-center gap-4 p-0">
            <h3 className="max-w-[744px] font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-genericwhite text-[length:var(--desktop-h3-title-font-size)] text-center tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] [font-style:var(--desktop-h3-title-font-style)]">
              2. TheXP Fund
            </h3>

            <p className="max-w-[744px] font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-grey-100 text-[length:var(--paragraph-regular-font-size)] text-center tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
              A DAO Fund investing in AI based startups which are following the
              AI Ethical label.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="relative w-[790px] h-[552px]">
        {/* Right side items */}
        <div className="absolute w-[139px] h-[552px] top-0 left-[665px]">
          {rightSideItems.map((item, index) => (
            <div
              key={`right-item-${index}`}
              className={`absolute ${item.top} left-0 [font-family:'Franie-Regular',Helvetica] font-normal text-transparent text-[15px] tracking-[0] leading-[22.5px] ${!item.multiline ? "whitespace-nowrap" : ""}`}
            >
              <span className="text-white">
                {item.multiline ? (
                  <>
                    Intellectual <br />
                    property{" "}
                  </>
                ) : (
                  `${item.label} `
                )}
              </span>
              <span className="text-[#01f1f2]">{item.percentage}</span>
            </div>
          ))}
        </div>

        {/* Left side items */}
        <div className="absolute w-[111px] h-[469px] top-[59px] left-0">
          {leftSideItems.map((item, index) => (
            <div
              key={`left-item-${index}`}
              className={`absolute ${item.top} left-0 [font-family:'Franie-Regular',Helvetica] font-normal text-transparent text-[15px] text-center tracking-[0] leading-[22.5px] whitespace-nowrap`}
            >
              <span className="text-white">{item.label} </span>
              <span className="text-[#01f1f2]">{item.percentage}</span>
            </div>
          ))}
        </div>

        {/* Chart visualization */}
        <div className="absolute w-[512px] h-[536px] top-[11px] left-[134px]">
          <div className="relative h-[537px]">
            <div className="absolute w-[400px] h-[400px] top-[98px] left-[54px]">
              <div className="relative w-[434px] h-[434px] top-[-17px] left-[-17px] bg-[url(/schema-cam.png)] bg-[100%_100%]">
                <img
                  className="absolute w-[403px] h-[403px] top-4 left-4"
                  alt="Schema cam"
                  src="/schema-cam-1.png"
                />
              </div>
            </div>

            <img
              className="absolute w-[512px] h-[537px] top-0 left-0"
              alt="Vectors"
              src="/vectors.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
