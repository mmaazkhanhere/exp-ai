import { motion } from "framer-motion";

const JoinCommunity = () => {
  return (
    <section className="relative w-full py-16 md:py-28 lg:py-40 px-4 md:px-6 flex flex-col gap-10 md:gap-16 lg:gap-20 max-w-4xl lg:max-w-[1115px] mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        <motion.div
          className="flex flex-col items-center md:items-start gap-6 md:gap-10 text-center md:text-left max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-['BankGothic']"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            JOIN THE WISHLIST
          </motion.h2>
          <motion.p
            className="text-gray-200 text-sm md:text-base font-['Franie']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm In ! Keep me informed about the project.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/waitlist.png"
            className="w-40 sm:w-48 md:w-56 lg:w-64 object-contain"
            alt="WaitList"
          />
        </motion.div>
      </div>

      <motion.button
        className="self-center w-full max-w-xs sm:max-w-[332px] h-14 sm:h-16 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] hover:opacity-90 transition-opacity font-['Franie'] text-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(3,5,241,0.3)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Elevate My Experience
      </motion.button>
    </section>
  );
};

export default JoinCommunity;
