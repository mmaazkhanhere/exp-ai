import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Team member data
const teamMembers = [
  {
    name: "Frederic Bonelli",
    role: "Founder\nProject Proponent",
    backgroundImage: "url(..//card-.png)",
    gradient:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(85,35,193,0.86)_100%)]",
  },
  {
    name: "Sarah De Lima",
    role: "Founder\nProject Owner",
    backgroundImage: "url(..//card-member-ui.png)",
    gradient:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(193,35,178,0.86)_100%)]",
  },
  {
    name: "Adrien Hubert",
    role: "Series Advisor\nTokenomics, Network & DAO",
    backgroundImage: "url(..//card-member-ui-1.png)",
    gradient:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(66,35,193,0.86)_100%)]",
  },
  {
    name: "Aaron Besnainou",
    role: "Series Advisor\nNetwork & Marketing",
    backgroundImage: "url(..//card-member-ui-2.png)",
    gradient:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(143,35,193,0.86)_100%)]",
  },
  {
    name: "Gregoire Jouaneau",
    role: "Series Advisor - Growth Hacking",
    backgroundImage: "url(..//card-member-ui-3.png)",
    gradient:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(75,51,171,0.86)_100%)]",
  },
  {
    name: "Nicolas-Henry Bozzi",
    role: "Series Advisor\nWhales & NFT OGs",
    backgroundImage: "url(..//card-member-ui-4.png)",
    gradient:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(51,135,171,0.86)_100%)]",
  },
];

// Partner data
const partners = [
  {
    name: "Diego Bottger-Zevallos",
    role: "Fidget Development",
    backgroundImage: "url(..//card-member-ui-5.png)",
    gradient:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(75,51,171,0.86)_100%)]",
  },
  {
    name: "Jean-Baptiste Fraysse",
    role: "Mechanical engineer\n3D modelist",
    backgroundImage: "url(..//card-member-ui-6.png)",
    gradient:
      "bg-[linear-gradient(180deg,rgba(148,122,203,0)_55%,rgba(151,22,99,0.86)_90%)]",
  },
  {
    name: "Christopher Fernandes",
    role: "3D Design & UI",
    backgroundImage: "url(..//card-member-ui-7.png)",
    gradient:
      "bg-[linear-gradient(180deg,rgba(0,0,0,0)_38%,rgba(78,24,147,0.86)_85%)]",
  },
  {
    name: "Remy Painchaut",
    role: "DGA Engineer - Cryptography",
    backgroundImage: "url(..//card-member-ui-8.png)",
    gradient:
      "bg-[linear-gradient(180deg,rgba(37,166,194,0)_49%,rgba(79,195,221,0.86)_86%)]",
  },
  {
    name: "Antoine Bonelli",
    role: "AI consultant & music producer",
    backgroundImage: "url(..//card-member-ui-9.png)",
    gradient:
      "bg-[linear-gradient(180deg,rgba(148,122,203,0)_55%,rgba(151,22,99,0.86)_90%)]",
  },
];

// Partner logos
const partnerLogos = [
  {
    alt: "Logo monnaie",
    src: "/logo-monnaie-3.png",
    className: "w-[87px] h-[75px]",
  },
  {
    alt: "Group",
    src: "/group-3.svg",
    className: "w-[251.13px] h-[66.74px]",
  },
  {
    alt: "Group",
    src: "/group-31.svg",
    className: "w-[297.8px] h-[54.05px]",
  },
  {
    alt: "Group",
    src: "/group-2.svg",
    className: "w-[206.72px] h-[50.83px]",
  },
  {
    alt: "Image",
    src: "/image-2.svg",
    className: "w-[265.81px] h-[38.46px]",
  },
];

export const TeamSection = (): JSX.Element => {
  return (
    <section className="w-full px-[120px] py-40 flex flex-col items-center gap-32">
      {/* Team Header */}
      <div className="flex flex-col items-center justify-center gap-8 max-w-[1002px]">
        <h2 className="font-desktop-h2-title font-[number:var(--desktop-h2-title-font-weight)] text-genericwhite text-[length:var(--desktop-h2-title-font-size)] text-center tracking-[var(--desktop-h2-title-letter-spacing)] leading-[var(--desktop-h2-title-line-height)] [font-style:var(--desktop-h2-title-font-style)]">
          Meet Our Dream Team
        </h2>

        <p className="max-w-[744px] font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-[length:var(--paragraph-regular-font-size)] text-center leading-[var(--paragraph-regular-line-height)] text-grey-100 tracking-[var(--paragraph-regular-letter-spacing)] [font-style:var(--paragraph-regular-font-style)]">
          World Of The Machines is a refined complex project, requesting
          expertise from numerous fields: AI, 3D, mechanical systems, product
          design, watchmaking expertise, Near Field Chips, Tokenomics, Gaming...
          We&#39;ve convinced the best to come and complete the Experience team:
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="flex flex-wrap justify-between gap-[128px] w-full max-w-[1142px]">
        {teamMembers.map((member, index) => (
          <div key={`team-member-${index}`} className="flex flex-col">
            <Card
              className={`w-[322px] h-[322px] rounded-lg overflow-hidden ${member.backgroundImage} bg-cover bg-center`}
            >
              <div className={`absolute inset-0 ${member.gradient}`} />
              <CardContent className="flex flex-col justify-end h-full p-5 relative z-10">
                <div className="flex flex-col gap-2">
                  <h3 className="mt-[-1px] font-bold text-genericwhite text-2xl leading-[28.8px] [font-family:'Inter',Helvetica]">
                    {member.name}
                  </h3>
                  <p className="font-medium text-principalelight text-lg leading-[27px] [font-family:'Inter',Helvetica] whitespace-pre-line">
                    {member.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}

        <img
          className="w-[325px] h-[325px] object-cover"
          alt="Image"
          src="/image-8.png"
        />
      </div>

      {/* Partners Section */}
      <div className="flex flex-col items-center gap-[72px] w-full">
        <h2 className="max-w-[1002px] font-desktop-h2-title font-[number:var(--desktop-h2-title-font-weight)] text-genericwhite text-[length:var(--desktop-h2-title-font-size)] text-center tracking-[var(--desktop-h2-title-letter-spacing)] leading-[var(--desktop-h2-title-line-height)] [font-style:var(--desktop-h2-title-font-style)]">
          Partners
        </h2>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-between gap-[128px] w-full">
          {partners.map((partner, index) => (
            <div key={`partner-${index}`} className="flex flex-col">
              <Card
                className={`w-[322px] h-[322px] rounded-lg overflow-hidden ${partner.backgroundImage} bg-cover bg-center`}
              >
                <div className={`absolute inset-0 ${partner.gradient}`} />
                <CardContent className="flex flex-col justify-end h-full p-5 relative z-10">
                  <div className="flex flex-col gap-2">
                    <h3 className="mt-[-1px] font-bold text-genericwhite text-2xl leading-[28.8px] [font-family:'Inter',Helvetica]">
                      {partner.name}
                    </h3>
                    <p className="font-medium text-principalelight text-lg leading-[27px] [font-family:'Inter',Helvetica] whitespace-pre-line">
                      {partner.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="w-full flex flex-col items-center gap-2.5">
          <div className="flex items-center justify-between w-full max-w-[1200px] h-[66.74px]">
            {partnerLogos.map((logo, index) => (
              <img
                key={`logo-${index}`}
                className={logo.className}
                alt={logo.alt}
                src={logo.src}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center gap-8 max-w-[1002px]">
        <h2 className="font-desktop-h2-title font-[number:var(--desktop-h2-title-font-weight)] text-genericwhite text-[length:var(--desktop-h2-title-font-size)] text-center tracking-[var(--desktop-h2-title-letter-spacing)] leading-[var(--desktop-h2-title-line-height)] [font-style:var(--desktop-h2-title-font-style)]">
          Let&#39;s Connect
        </h2>

        <p className="max-w-[744px] font-paragraph-regular font-[number:var(--paragraph-regular-font-weight)] text-grey-100 text-[length:var(--paragraph-regular-font-size)] text-center tracking-[var(--paragraph-regular-letter-spacing)] leading-[var(--paragraph-regular-line-height)] [font-style:var(--paragraph-regular-font-style)]">
          We would love to hear from you. Whether you have questions,
          partnership opportunities, or simply want to learn more about
          TheExperience.
        </p>

        <Button
          className="px-10 py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)]"
          asChild
        >
          <a
            className="[font-family:'Franie-Bold',Helvetica] font-bold text-genericwhite text-lg tracking-[0] leading-[27px] underline whitespace-nowrap"
            href="mailto:contact@thexp.ai"
            rel="noopener noreferrer"
            target="_blank"
          >
            contact@thexp.ai
          </a>
        </Button>
      </div>
    </section>
  );
};
