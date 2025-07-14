import { motion } from "framer-motion";

const TextSection = () => {
  return (
    <section className="flex flex-col w-full max-w-[1062px] items-center justify-center gap-6 md:gap-8 lg:gap-10 mx-auto pt-8 md:pt-12 lg:pt-16 px-4 text-center">
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-['BankGothic'] leading-tight"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        A NFT series like you've never seen before
      </motion.h2>

      <motion.p
        className="w-full max-w-[744px] mx-auto font-['Franie'] text-xs md:text-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        World Of The Machines is based on exclusive innovations, including the
        worlwide first ASMR connected Fidget using a unique magnetic bezel and a
        set of crypto coins officially stamped by "La Monnaie de Paris".
      </motion.p>

      <motion.button
        className="px-6 py-3 md:px-10 md:py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] font-['Franie'] hover:opacity-90 transition-opacity text-sm sm:text-base"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        The lore
      </motion.button>
    </section>
  );
};

export default TextSection;
