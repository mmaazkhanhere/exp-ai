import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Section links data
  const sectionLinks = [
    "TheXP",
    "World Of The Machine",
    "Innovation & World First",
    "Roadmap",
    "Team & partners",
    "Mint Revenues Breakdown",
  ];

  // Contact links data
  const contactLinks = [
    {
      text: "contact@thexp.ai",
      href: "mailto:contact@thexp.ai",
      isExternal: true,
    },
    { text: "Twitter", href: "#", isExternal: false },
  ];

  // Helpful links data
  const helpfulLinks = ["Terms & Conditions", "Privacy Policy"];

  return (
    <footer className="flex flex-col w-full items-start gap-6 pt-16 pb-0 px-[120px] bg-[#010116]">
      <div className="flex items-start justify-center gap-20 relative self-stretch w-full">
        {/* Logo and description */}
        <div className="flex flex-col items-start gap-6 relative flex-1 grow">
          <div className="relative w-[78px] h-[31px] overflow-hidden">
            <img
              className="w-full h-full object-contain"
              alt="TheXP Logo"
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>

          <p className="font-desktop-paragraph-10px font-[number:var(--desktop-paragraph-10px-font-weight)] text-grey-100 text-[length:var(--desktop-paragraph-10px-font-size)] tracking-[var(--desktop-paragraph-10px-letter-spacing)] leading-[var(--desktop-paragraph-10px-line-height)] [font-style:var(--desktop-paragraph-10px-font-style)]">
            TheExperience is a collective of AI, Web3, marketing and retail
            veterans who aim to craft exclusive projects supporting the coming
            4th Industrial Revolution.
          </p>
        </div>

        <Separator orientation="vertical" className="h-auto bg-grey-100" />

        {/* Section links */}
        <div className="flex flex-col w-[134px] items-start gap-6">
          <h3 className="font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-genericwhite text-[length:var(--desktop-h3-title-font-size)] text-center tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] whitespace-nowrap [font-style:var(--desktop-h3-title-font-style)]">
            Section
          </h3>

          <div className="flex flex-col items-start gap-4">
            {sectionLinks.map((link, index) => (
              <div key={index} className="relative w-[131px] h-[15px]">
                <a
                  href="#"
                  className="font-h4-link-footer font-[number:var(--h4-link-footer-font-weight)] text-grey-100 text-[length:var(--h4-link-footer-font-size)] leading-[var(--h4-link-footer-line-height)] underline whitespace-nowrap absolute left-0 -top-px tracking-[var(--h4-link-footer-letter-spacing)] [font-style:var(--h4-link-footer-font-style)]"
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>

        <Separator orientation="vertical" className="h-auto bg-grey-100" />

        {/* Contact Us */}
        <div className="flex flex-col w-[197px] items-start gap-6">
          <h3 className="font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-genericwhite text-[length:var(--desktop-h3-title-font-size)] text-center tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] whitespace-nowrap [font-style:var(--desktop-h3-title-font-style)]">
            Contact Us
          </h3>

          <div className="flex flex-col items-start gap-4 self-stretch w-full">
            {contactLinks.map((link, index) => (
              <div
                key={index}
                className="relative self-stretch w-full h-[15px]"
              >
                <a
                  className="absolute -top-px left-0 font-h4-link-footer font-[number:var(--h4-link-footer-font-weight)] text-[length:var(--h4-link-footer-font-size)] leading-[var(--h4-link-footer-line-height)] underline whitespace-nowrap text-grey-100 tracking-[var(--h4-link-footer-letter-spacing)] [font-style:var(--h4-link-footer-font-style)]"
                  href={link.href}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  target={link.isExternal ? "_blank" : undefined}
                >
                  {link.text}
                </a>
              </div>
            ))}
          </div>
        </div>

        <Separator orientation="vertical" className="h-auto bg-grey-100" />

        {/* Helpful Links */}
        <div className="flex flex-col w-[229px] items-start gap-6">
          <h3 className="font-desktop-h3-title font-[number:var(--desktop-h3-title-font-weight)] text-genericwhite text-[length:var(--desktop-h3-title-font-size)] text-center tracking-[var(--desktop-h3-title-letter-spacing)] leading-[var(--desktop-h3-title-line-height)] whitespace-nowrap [font-style:var(--desktop-h3-title-font-style)]">
            Helpful-Links
          </h3>

          <div className="flex flex-col items-start gap-4 self-stretch w-full">
            {helpfulLinks.map((link, index) => (
              <div
                key={index}
                className="relative self-stretch w-full h-[15px]"
              >
                <a
                  href="#"
                  className="absolute -top-px left-0 font-h4-link-footer font-[number:var(--h4-link-footer-font-weight)] text-grey-100 text-[length:var(--h4-link-footer-font-size)] leading-[var(--h4-link-footer-line-height)] underline whitespace-nowrap tracking-[var(--h4-link-footer-letter-spacing)] [font-style:var(--h4-link-footer-font-style)]"
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center gap-6 px-0 py-[15px] self-stretch w-full">
        <p className="opacity-30 font-desktop-paragraph-10px font-[number:var(--desktop-paragraph-10px-font-weight)] text-genericwhite text-[length:var(--desktop-paragraph-10px-font-size)] text-center tracking-[var(--desktop-paragraph-10px-letter-spacing)] leading-[var(--desktop-paragraph-10px-line-height)] whitespace-nowrap [font-style:var(--desktop-paragraph-10px-font-style)]">
          ©2023 Theexperience. All rights reserved.
        </p>
      </div>
    </footer>
  );
};