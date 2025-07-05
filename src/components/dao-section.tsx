import React from "react";

const DaoSection = () => {
  return (
    <section className="flex flex-col items-center gap-[60px] py-28">
      <div className="flex flex-col items-center gap-[45px]">
        <div className="flex flex-col items-center gap-6">
          <h2 className="max-w-[1002px] text-6xl text-center font-['BankGothic']">
            A Foundation and a DAO Fund focused on Artificial Intelligence
          </h2>

          <p className="max-w-[744px] text-center text-sm font-['Franie']">
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

        <div className="bg-transparent border-0">
          <article className="flex flex-col items-center gap-4 p-0">
            <div className="flex items-center gap-2.5">
              <h3 className="text-4xl text-center font-['BankGothic']">
                1. TheXP Foundation
              </h3>
            </div>

            <p className="max-w-[744px] text-center font-['Franie'] text-sm">
              Missions: - Support the evangelization of Artificial Intelligence
              and the concept of the Singularity toward the public, and provide
              them with the necessary knowledge to think critically and make the
              right decision. Structure an AI Ethical label, like the one
              developed to frame Research and Development in the field of Human
              Genome.
            </p>
          </article>
        </div>

        <div className="bg-transparent border-0">
          <article className="flex flex-col items-center gap-4 p-0">
            <h3 className="max-w-[744px] text-4xl font-['BankGothic'] text-center">
              2. TheXP Fund
            </h3>

            <p className="max-w-[744px] text-center text-sm font-['Franie']">
              A DAO Fund investing in AI based startups which are following the
              AI Ethical label.
            </p>
          </article>
        </div>
      </div>

      {/* Chart visualization */}
      <div className="w-[790px] h-[552px]">
        <img src="/chart.png" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default DaoSection;
