"use client";
import LinkPrimaryTwo from "@/components/shared/LinkPrimaryTwo";
import { motion } from "framer-motion";

const AboutLetsWorks = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-get-in-touch about-card p-32px"
    >
      <p className="heading-4 about-get-in-touch__title">
        Let’s Works Together...!
      </p>
      <LinkPrimaryTwo link="/contact" linkText="Get In Touch" />
    </motion.div>
  );
};

export default AboutLetsWorks;
