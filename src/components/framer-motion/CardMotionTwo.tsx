"use client";
import { motion } from "framer-motion";

const CardMotionTwo = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, rotate: 5, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
      transition={{ duration: 0.9, type: "spring", stiffness: 120 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

export default CardMotionTwo;
