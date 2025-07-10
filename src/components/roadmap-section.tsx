import React from "react";
import { motion } from "framer-motion";

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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const timelineItemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative w-full bg-[#010116] pt-10 md:pt-20">
      <motion.div 
        className="absolute w-full -top-[500px] md:-top-[1000px]"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <img src="/lava_roadmap.png" alt="Gradient" />
      </motion.div>

      {/* Header content */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10 relative z-10 mx-auto max-w-4xl xl:max-w-[1002px]">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl text-center font-['BankGothic']"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          137 days to save Humanity and create a peaceful bond with the incoming
          Singularity
        </motion.h2>

        <motion.p 
          className="max-w-2xl text-gray-200 text-center font-['Franie'] text-xs md:text-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Enter this fascinating adventure, and commit yourself to the
          reflection about how the human species should prepare itself to the
          exponential growth of Artificial Intelligence in its society and the
          potential power takeover of the impeding Singularity.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-4xl xl:max-w-[1200px] mt-10 md:mt-16 pb-10 md:pb-20 px-2 md:px-0">
        {/* Vertical timeline line - Mobile */}
        <motion.div 
          className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 transform -translate-x-1/2 z-0 md:hidden"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{ transformOrigin: "top" }}
        ></motion.div>

        {/* Vertical timeline line - Desktop */}
        <motion.div
          className="absolute left-1/2 top-[1040px] transform -translate-x-1/2 -translate-y-1/2 w-2 z-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to bottom , #9ca3af 18px, #9ca3af calc(100% - 18px), #0305f1 calc(100% - 18px), #0305f1 100%)",
            height: "calc(100% - 340px)",
            transformOrigin: "top",
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>

        <motion.div 
          className="relative z-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {roadmapItems.slice(0, 7).map((item, index) => {
            // Determine dot color
            let dotColor = "bg-gray-500";
            if (index === 0) dotColor = "bg-[#c11bfb]";
            else if (index === roadmapItems.length - 2)
              dotColor = "bg-[#0305f1]";

            return (
              <React.Fragment key={index}>
                {/* Mobile layout */}
                <motion.div 
                  className="md:hidden flex flex-col items-center mb-12"
                  variants={timelineItemVariants}
                >
                  {/* Date */}
                  <motion.div
                    className={`px-6 py-3 w-full max-w-xs ${
                      item.dateStyle === "gradient"
                        ? "bg-[#c11bfb]"
                        : "bg-[#0305f1]"
                    } text-white rounded-lg text-center`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-['BankGothic'] text-base sm:text-lg">
                      {item.date}
                    </span>
                  </motion.div>

                  {/* Dot */}
                  <motion.div
                    className={`relative w-7 h-7 rounded-full mt-4 mb-4 border-4 border-solid border-[#ede7ff] ${dotColor} z-10`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 260, 
                      damping: 20,
                      delay: 0.2 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2 }}
                  />

                  {/* Content box */}
                  <motion.div 
                    className="border-2 border-solid border-[#9898a0] backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] bg-[rgba(255,255,255,0.1)] rounded-lg text-white w-full max-w-md"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <article className="flex flex-col items-start gap-3 p-4 sm:p-6">
                      <h3 className="text-white font-['BankGothic'] text-lg sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="font-['Franie'] text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </article>
                  </motion.div>
                </motion.div>

                {/* Desktop layout */}
                <motion.div
                  className={`hidden md:flex w-full items-center gap-6 lg:gap-[100px] ${
                    index > 0 ? "mt-[80px] lg:mt-[120px]" : ""
                  }`}
                  variants={timelineItemVariants}
                >
                  {item.position === "left" ? (
                    <>
                      <motion.div 
                        className="flex-1 border-2 border-solid border-[#9898a0] backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] bg-[rgba(255,255,255,0.1)] rounded-lg text-white z-20"
                        whileHover={{ scale: 1.02, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <article className="flex flex-col items-start gap-4 p-6 lg:p-10">
                          <h3 className="text-white font-['BankGothic'] text-xl lg:text-2xl">
                            {item.title}
                          </h3>
                          <p className="font-['Franie'] text-sm">
                            {item.description}
                          </p>
                        </article>
                      </motion.div>

                      <motion.div
                        className={`relative w-7 h-7 lg:w-9 lg:h-9 rounded-full lg:rounded-[18px] border-4 lg:border-[6px] border-solid border-[#ede7ff] ${dotColor}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 260, 
                          damping: 20,
                          delay: 0.3 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.3 }}
                      />

                      <motion.div 
                        className="flex flex-col items-start gap-2.5 flex-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 py-3 lg:px-10 lg:py-5 bg-[#0305f1] text-white rounded-lg">
                          <span className="font-['BankGothic'] text-base lg:text-xl">
                            {item.date}
                          </span>
                        </div>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div 
                        className="flex flex-col items-end gap-2.5 flex-1"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div
                          className={`px-6 py-3 lg:px-10 lg:py-5 ${
                            item.dateStyle === "gradient"
                              ? "bg-[#c11bfb]"
                              : "bg-[#0305f1]"
                          } text-white rounded-lg`}
                        >
                          <span className="font-['BankGothic'] text-base lg:text-xl">
                            {item.date}
                          </span>
                        </div>
                      </motion.div>

                      <motion.div
                        className={`relative w-7 h-7 lg:w-9 lg:h-9 rounded-full lg:rounded-[18px] border-4 lg:border-[6px] border-solid border-[#ede7ff] ${dotColor}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 260, 
                          damping: 20,
                          delay: 0.3 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.3 }}
                      />

                      <motion.div 
                        className="flex-1 border-2 border-solid border-[#9898a0] backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] bg-[rgba(255,255,255,0.1)] rounded-lg"
                        whileHover={{ scale: 1.02, x: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <article className="flex flex-col items-start gap-4 p-6 lg:p-10">
                          <h3 className="font-['BankGothic'] text-xl lg:text-2xl">
                            {item.title}
                          </h3>
                          <p className="font-['Franie'] text-sm">
                            {item.description}
                          </p>
                        </article>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </React.Fragment>
            );
          })}

          {/* Final milestone (centered) */}
          <motion.div 
            className="flex flex-col items-center gap-6 md:gap-10 mt-10 md:mt-[80px] lg:mt-[120px] relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Background image for final milestone */}
            <motion.div 
              className="absolute w-full h-full top-0 flex justify-center items-center -z-10 md:-right-[200px] lg:-right-[345px]"
              initial={{ opacity: 0, scale: 1.2 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="/lava_dao.png"
                alt="Gradient"
                className="object-contain w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-none opacity-70 scale-110 md:scale-125"
              />
            </motion.div>

            <motion.div 
              className="relative bg-[#0305f1] border-[#ede7ff] w-7 h-7 md:w-9 md:h-9 rounded-full md:rounded-[18px] border-4 md:border-[6px] border-solid z-20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.3 
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.3 }}
            />
            <motion.div 
              className="w-full max-w-md md:w-[400px] lg:w-[519px] bg-[#0305f1] shadow-[0px_4px_150px_#0305f180] rounded-lg z-20"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <article className="flex flex-col items-start gap-3 md:gap-4 p-4 sm:p-6 md:p-10">
                <h3 className="text-lg md:text-xl lg:text-2xl font-['BankGothic']">
                  29 February 2024
                </h3>
                <p className="font-medium font-['Franie'] text-grey-100 text-sm md:text-[15px] leading-relaxed">
                  Rewards announcement (Winners Leaderboard), and final
                  distribution
                </p>
              </article>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadMapSection;
