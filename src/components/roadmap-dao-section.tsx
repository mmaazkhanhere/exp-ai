import { motion } from "framer-motion";
import RoadMapSection from "./roadmap-section";
import DaoSection from "./dao-section";

const RoadMapDaoSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <RoadMapSection />
      </motion.div>

      <motion.img
        src="/dao_separator.png"
        className="pt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <DaoSection />
      </motion.div>
    </section>
  );
};

export default RoadMapDaoSection;
