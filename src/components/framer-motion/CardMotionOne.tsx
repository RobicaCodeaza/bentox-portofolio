"use client";
import { motion } from "framer-motion";
import React from "react";

const CardMotionOne = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default CardMotionOne;
