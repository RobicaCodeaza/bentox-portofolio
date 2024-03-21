"use client";
import { motion } from "framer-motion";
const HeaderTitle = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="header-title position-relative z-2 heading-3 mt-xxl-7 mt-6 position-relative"
    >
      {title}
    </motion.div>
  );
};

export default HeaderTitle;
