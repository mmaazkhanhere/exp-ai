import { motion } from "framer-motion";

const DaoSection = () => {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[60px] py-12 md:py-20 lg:py-28 px-4 sm:px-6">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-[45px] w-full">
        <motion.div
          className="flex flex-col items-center gap-4 md:gap-6 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="w-full max-w-4xl lg:max-w-[1002px] text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center font-['BankGothic']"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A Foundation and a DAO Fund focused on Artificial Intelligence
          </motion.h2>

          <motion.p
            className="w-full max-w-2xl lg:max-w-[744px] text-center text-xs md:text-sm font-['Franie']"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
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
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-transparent border-0 w-full max-w-2xl lg:max-w-[744px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <article className="flex flex-col items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2.5">
              <motion.h3
                className="text-2xl md:text-3xl lg:text-4xl text-center font-['BankGothic']"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                1. TheXP Foundation
              </motion.h3>
            </div>

            <motion.p
              className="w-full text-center font-['Franie'] text-xs md:text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Missions: - Support the evangelization of Artificial Intelligence
              and the concept of the Singularity toward the public, and provide
              them with the necessary knowledge to think critically and make the
              right decision. Structure an AI Ethical label, like the one
              developed to frame Research and Development in the field of Human
              Genome.
            </motion.p>
          </article>
        </motion.div>

        <motion.div
          className="bg-transparent border-0 w-full max-w-2xl lg:max-w-[744px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <article className="flex flex-col items-center gap-3 md:gap-4">
            <motion.h3
              className="w-full max-w-2xl lg:max-w-[744px] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['BankGothic'] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              2. TheXP Fund
            </motion.h3>

            <motion.p
              className="w-full text-center text-xs md:text-sm font-['Franie']"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
            >
              A DAO Fund investing in AI based startups which are following the
              AI Ethical label.
            </motion.p>
          </article>
        </motion.div>
      </div>

      {/* Chart visualization */}
      <motion.div
        className="w-full max-w-4xl lg:max-w-[790px] h-auto aspect-[790/552]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src="/chart.png"
          className="w-full h-full object-contain"
          alt="DAO Fund Structure Chart"
        />
      </motion.div>
    </section>
  );
};

export default DaoSection;
