import React from "react";

const DaoSection = () => {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[60px] py-12 md:py-20 lg:py-28 px-4 sm:px-6">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-[45px] w-full">
        <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
          <h2 className="w-full max-w-4xl lg:max-w-[1002px]text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-['BankGothic']">
            A Foundation and a DAO Fund focused on Artificial Intelligence
          </h2>

          <p className="w-full max-w-2xl lg:max-w-[744px] text-center text-xs md:text-sm font-['Franie']">
            The majority of the Mint revenues will be redistributed to
            participants in the form of:
            <br />
            • The limited edition connected metal Fidget* complementary to the
            Pass For Life NFT.
            <br />
            • Numerous short-term (weekly) and Final Reveal rewards.
            <br />
            <br />
            But that's not all: Should the Series be successful enough (i.e.
            cross a predefined threshold,) the team aims to seed a Swiss based
            Foundation and a DAO Fund focused on Artificial Intelligence, and
            settle a bonus airdrop in the form of some AI Fund token rewarding
            the best participants.
          </p>
        </div>

        <div className="bg-transparent border-0 w-full max-w-2xl lg:max-w-[744px]">
          <article className="flex flex-col items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2.5">
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-center font-['BankGothic']">
                1. TheXP Foundation
              </h3>
            </div>

            <p className="w-full text-center font-['Franie'] text-xs md:text-sm">
              Missions: - Support the evangelization of Artificial Intelligence
              and the concept of the Singularity toward the public, and provide
              them with the necessary knowledge to think critically and make the
              right decision. Structure an AI Ethical label, like the one
              developed to frame Research and Development in the field of Human
              Genome.
            </p>
          </article>
        </div>

        <div className="bg-transparent border-0 w-full max-w-2xl lg:max-w-[744px]">
          <article className="flex flex-col items-center gap-3 md:gap-4">
            <h3 className="w-full max-w-2xl lg:max-w-[744px] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['BankGothic'] text-center">
              2. TheXP Fund
            </h3>

            <p className="w-full text-center text-xs md:text-sm font-['Franie']">
              A DAO Fund investing in AI based startups which are following the
              AI Ethical label.
            </p>
          </article>
        </div>
      </div>

      {/* Chart visualization */}
      <div className="w-full max-w-4xl lg:max-w-[790px] h-auto aspect-[790/552]">
        <img
          src="/chart.png"
          className="w-full h-full object-contain"
          alt="DAO Fund Structure Chart"
        />
      </div>
    </section>
  );
};

export default DaoSection;
