import React from "react";

const Footer = () => {
  const sectionLinks = [
    "TheXP",
    "World Of The Machine",
    "Innovation & World First",
    "Roadmap",
    "Team & partners",
    "Mint Revenues Breakdown",
  ];

  const contactLinks = [
    {
      text: "contact@thexp.ai",
      href: "mailto:contact@thexp.ai",
      isExternal: true,
    },
    { text: "Twitter", href: "#", isExternal: false },
  ];

  const helpfulLinks = ["Terms & Conditions", "Privacy Policy"];

  return (
    <footer className="bg-[#010116] pt-10 md:pt-16 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 md:pb-10 border-b border-gray-700">
          {/* Logo and description - full width on mobile */}
          <div className="md:col-span-4">
            <div className="mb-4 flex justify-center md:justify-start">
              <img
                src="/logo.png"
                alt="TheXP Logo"
                className="w-20 md:w-24"
                width={78}
                height={31}
              />
            </div>
            <p className="text-gray-300 text-xs sm:text-sm text-center md:text-left max-w-md mx-auto md:mx-0">
              TheExperience is a collective of AI, Web3, marketing and retail
              veterans who aim to craft exclusive projects supporting the coming
              4th Industrial Revolution.
            </p>
          </div>

          {/* Section links - 2 columns on mobile */}
          <div className="md:col-span-2">
            <h3 className="text-white font-medium mb-3 md:mb-4 font-['BankGothic'] text-xl md:text-2xl text-center md:text-left">
              Section
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:gap-y-3 md:block md:space-y-3">
              {sectionLinks.map((link, index) => (
                <li key={index} className="text-center md:text-left">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-3">
            <h3 className="text-white font-medium mb-3 md:mb-4 font-['BankGothic'] text-xl md:text-2xl text-center md:text-left">
              Contact Us
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {contactLinks.map((link, index) => (
                <li key={index} className="text-center md:text-left">
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    target={link.isExternal ? "_blank" : undefined}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div className="md:col-span-3">
            <h3 className="text-white font-medium mb-3 md:mb-4 font-['BankGothic'] text-xl md:text-2xl text-center md:text-left">
              Helpful Links
            </h3>
            <ul className="flex flex-col items-center md:items-start space-y-2 sm:space-y-3">
              {helpfulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 md:pt-6 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            ©2023 Theexperience. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
