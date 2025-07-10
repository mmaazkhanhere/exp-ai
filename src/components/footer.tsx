import React from "react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-[#010116] pt-10 md:pt-16 pb-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 md:pb-10 border-b border-gray-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Logo and description - full width on mobile */}
          <motion.div 
            className="md:col-span-4"
            variants={itemVariants}
          >
            <motion.div 
              className="mb-4 flex justify-center md:justify-start"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/logo.png"
                alt="TheXP Logo"
                className="w-20 md:w-24"
                width={78}
                height={31}
              />
            </motion.div>
            <motion.p 
              className="text-gray-300 text-xs sm:text-sm text-center md:text-left max-w-md mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              TheExperience is a collective of AI, Web3, marketing and retail
              veterans who aim to craft exclusive projects supporting the coming
              4th Industrial Revolution.
            </motion.p>
          </motion.div>

          {/* Section links - 2 columns on mobile */}
          <motion.div 
            className="md:col-span-2"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-white font-medium mb-3 md:mb-4 font-['BankGothic'] text-xl md:text-2xl text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Section
            </motion.h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:gap-y-3 md:block md:space-y-3">
              {sectionLinks.map((link, index) => (
                <motion.li 
                  key={index} 
                  className="text-center md:text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div 
            className="md:col-span-3"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-white font-medium mb-3 md:mb-4 font-['BankGothic'] text-xl md:text-2xl text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.h3>
            <ul className="space-y-2 sm:space-y-3">
              {contactLinks.map((link, index) => (
                <motion.li 
                  key={index} 
                  className="text-center md:text-left"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    target={link.isExternal ? "_blank" : undefined}
                  >
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Helpful Links */}
          <motion.div 
            className="md:col-span-3"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-white font-medium mb-3 md:mb-4 font-['BankGothic'] text-xl md:text-2xl text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Helpful Links
            </motion.h3>
            <ul className="flex flex-col items-center md:items-start space-y-2 sm:space-y-3">
              {helpfulLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="pt-4 md:pt-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            ©2023 Theexperience. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
