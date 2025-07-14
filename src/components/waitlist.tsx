import { motion } from "framer-motion";

const WaitList = () => {
  return (
    <section
      className="relative w-full py-16 md:py-20 lg:py-24 flex justify-center items-center h-auto sm:h-[530px]"
      style={{
        backgroundImage: "url('/wishlist_bg.png')",
        backgroundPosition: "left",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto max-w-7xl flex flex-col items-center px-4 sm:px-6">
        <motion.div
          className="max-w-3xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-['BankGothic']"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            JOIN THE Wishlist
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-200 mb-6 sm:mb-10 font-['Franie']"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            I'm In! Keep me informed about the project.
          </motion.p>

          <motion.div
            className="mb-6 md:mb-8 w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 md:p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              whileFocus={{
                scale: 1.02,
                borderColor: "rgba(59, 130, 246, 0.5)",
              }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          <motion.button
            className="px-8 py-4 md:px-10 md:py-5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity font-['Franie'] text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Elevate My Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitList;
