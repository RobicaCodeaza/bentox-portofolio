"use client";
import { motion } from "framer-motion";
import ExperienceCardItemAbout from "./ExperienceCardItemAbout";

const ExperienceInNumber = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card experience-in-number"
    >
      <ExperienceCardItemAbout
        counterNumber={7}
        text="YEARS EXPERIENCE"
        counterElement="0"
        rightElement="+"
      />
      <ExperienceCardItemAbout
        counterNumber={125}
        text="TOTAL PROJECTS"
        counterElement="+"
      />

      <ExperienceCardItemAbout
        counterNumber={9}
        text="RECOGNITIONS"
        counterElement="0"
      />
      <ExperienceCardItemAbout
        counterNumber={0}
        text="UNHAPPY CLIENTS"
        counterElement="0"
      />
    </motion.div>
  );
};

export default ExperienceInNumber;
