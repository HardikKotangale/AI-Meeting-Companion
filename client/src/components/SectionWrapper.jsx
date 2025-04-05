import { motion } from "framer-motion";

export default function SectionWrapper({ children, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={`w-full px-6 py-16 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}
