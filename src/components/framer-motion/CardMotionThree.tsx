"use client";
import { motion } from "framer-motion";
import React from "react";

const CardMotionThree = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.4 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, type: "spring", stiffness: 120 }}
    >
      {children}
    </motion.div>
  );
};

export default CardMotionThree;
