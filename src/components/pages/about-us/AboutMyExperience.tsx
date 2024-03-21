"use client";
import { motion } from "framer-motion";
import { Import } from "iconsax-react";
import MyExperienceItem from "./MyExperienceItem";

const AboutMyExperience = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card my-experience p-32px"
    >
      <div className="d-flex align-items-center justify-content-between">
        {" "}
        <p className="heading-4">My Experience</p>
        <div className="download-icon">
          <Import />
        </div>
      </div>

      <div className="my-experience__content">
        <MyExperienceItem
          time="2021 // Now"
          title="UI Designer"
          company="Apple"
        />
        <MyExperienceItem
          time="2015 // 2020"
          title="Front-end Dev"
          company="Google"
        />
        <MyExperienceItem
          time="2010 // 2015"
          title="UI/UX Designer"
          company="Intel"
        />
        <MyExperienceItem
          time="2009 // 2010"
          title="UI Designer"
          company="Intel"
        />
      </div>
    </motion.div>
  );
};

export default AboutMyExperience;
