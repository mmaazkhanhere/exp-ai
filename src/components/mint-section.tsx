import { motion } from "framer-motion";

const MintSection = () => {
  return (
    <section className="w-full py-20 md:py-30 lg:py-40 relative overflow-hidden bg-black text-white font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/mintBg.jpg"
          alt="OG Pass Background"
          className="w-full h-full object-cover opacity-25 mix-blend-screen"
        />
        {/* Neon Blue Overlay */}
        <div className="absolute inset-0 bg-[#0305f1] opacity-40 mix-blend-color-dodge blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[872px] mx-auto text-center px-4 sm:px-6">
        <motion.h2
          className="text-4xl md:text-5xl mb-5 md:mb-6 font-['BankGothic']"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Mint your limited OG Pass now
        </motion.h2>

        <motion.p
          className="text-xs md:text-sm text-gray-200 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-[744px] mx-auto font-['Franie']"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Embrace the future of digital currency with Mint. Discover a seamless
          and decentralized financial landscape that empowers your financial
          freedom. Own your digital assets and explore new possibilities. Join
          Mint now and unlock the limitless potential of cryptocurrency.
        </motion.p>

        <motion.button
          className="px-8 py-4 md:px-10 md:py-5 rounded-lg bg-[linear-gradient(270deg,rgba(3,5,241,1)_0%,rgba(1,241,242,1)_100%)] hover:opacity-90 transition-opacity font-['Franie'] text-sm md:text-base"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(3,5,241,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Mint OG Pass now
        </motion.button>
      </div>
    </section>
  );
};

export default MintSection;
