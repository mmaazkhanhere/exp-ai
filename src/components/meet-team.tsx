import React from "react";

const MeetTeam = () => {
  const teamMembers = [
    {
      name: "Frederic Bonelli",
      img: "/team/christopher.png",
    },
    {
      name: "Sarah De Lima",
      img: "/team/sarah.png",
    },
    {
      name: "Adrien Hubert",
      img: "/team/adrien.png",
    },
    {
      name: "Aaron Besnainou",
      img: "/team/aaron.png",
    },
    {
      name: "Gregoire Jouaneau",
      img: "/team/gregorie.png",
    },
    {
      name: "Nicolas-Henry Bozzi",
      img: "/team/nicolas.png",
    },
    {
      name: "Kerel Verwaerde",
      img: "/team/kerel.png",
    },
  ];

  // Partner data
  const partners = [
    {
      name: "Diego Bottger-Zevallos",
      img: "/partner/diego.png",
    },
    {
      name: "Jean-Baptiste Fraysse",
      img: "/partner/jean.png",
    },
    {
      name: "Christopher Fernandes",
      img: "/partner/christopher.png",
    },
    {
      name: "Remy Painchaut",
      img: "/partner/remy.png",
    },
    // Blank grid after Remy
    {},
    {
      name: "Antoine Bonelli",
      img: "/partner/antonie.png",
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
  return (
    <section className="w-full px-[120px] py-40 flex flex-col items-center gap-32">
      {/* Team Header */}
      <div className="flex flex-col items-center justify-center gap-8 max-w-[1002px] text-center">
        <h2 className="text-6xl font-['BankGothic']">Meet Our Dream Team</h2>

        <p className="max-w-[744px] text-sm font-['Franie']">
          World Of The Machines is a refined complex project, requesting
          expertise from numerous fields: AI, 3D, mechanical systems, product
          design, watchmaking expertise, Near Field Chips, Tokenomics, Gaming...
          We&#39;ve convinced the best to come and complete the Experience team:
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-3 justify-between gap-[128px] w-full max-w-[1142px]">
        {teamMembers.map((member, index) => (
          <div key={`team-member-${index}`} className="flex flex-col">
            <img src={member.img} alt={member.name} />
          </div>
        ))}
      </div>

      {/* Partners Section */}
      <div className="flex flex-col items-center gap-[72px] w-full">
        <h2 className="max-w-[1002px] text-5xl font-bold font-['BankGothic']">
          Partners
        </h2>

        {/* Partners Grid */}
        <div className="grid grid-cols-3 n gap-[128px] w-full">
          {partners.map((partner, index) => (
            <div key={`partner-${index}`} className="flex flex-col">
              {partner.img ? (
                <img src={partner.img} alt={partner.name} />
              ) : null}
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="w-full flex flex-col items-center gap-2.5">
          <div className="flex items-center justify-between w-full max-w-[1200px] h-[66.74px]">
            <img src="/logos.png" alt="Partner Logo" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center gap-8 max-w-[1002px]">
        <h2 className="font-bold text-5xl font-['BankGothic']">
          Let&#39;s Connect
        </h2>

        <p className="max-w-[744px] text-center font-['Franie']">
          We would love to hear from you. Whether you have questions,
          partnership opportunities, or simply want to learn more about
          TheExperience.
        </p>

        <a
          className="px-10 py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] [font-family:'Franie-Bold',Helvetica] font-bold text-genericwhite text-lg tracking-[0] leading-[27px] whitespace-nowrap font-['Franie'] inline-block"
          href="mailto:contact@thexp.ai"
          rel="noopener noreferrer"
          target="_blank"
        >
          contact@thexp.ai
        </a>
      </div>
    </section>
  );
};

export default MeetTeam;
