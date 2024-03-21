"use client";
import { motion } from "framer-motion";
import React from "react";

const CardMotionFour = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, type: "spring", stiffness: 120 }}
    >
      {children}
    </motion.div>
  );
};

export default CardMotionFour;
