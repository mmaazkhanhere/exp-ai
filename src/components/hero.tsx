import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-8 md:py-12 lg:py-16 px-4 -mt-8 sm:-mt-10 md:-mt-14">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="font-['Franie'] font-light text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="font-['BankGothic']">THEXP.AI</span> presents
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['BankGothic'] text-center mt-2 sm:mt-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          World Of The Machines
        </motion.h1>
      </motion.div>
      <motion.p
        className="text-center p-6 md:p-8 lg:p-10 max-w-[744px] mx-auto font-['Franie'] text-sm sm:text-base"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        At the cross of AI, Gaming, NFT and ASMR Fidgets, get a sneak preview of
        World of the Machines, a fascinating artistic and sociological
        experiment built around the concept of the singularity.
      </motion.p>
      <motion.div
        className="w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[611px] bg-[#010116] flex items-center justify-center mt-6 md:mt-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
      >
        <img
          className="w-full h-full object-cover"
          alt="AI Technology Hero"
          src="/hero.png"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
