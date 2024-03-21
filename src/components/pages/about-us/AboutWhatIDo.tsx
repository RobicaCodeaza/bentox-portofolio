"use client";
import groupShape from "@/../public/image/group-4.png";
import bottomShape from "@/../public/image/shape-14.png";
import { IconArrowBadgeRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutWhatIDo = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="about-card what-i-do p-32px"
    >
      <p className="heading-4">What I Do</p>
      <div className="what-i-do__content">
        <div className="what-i-do__content-item">
          <IconArrowBadgeRight /> <p className="textL">Branding</p>
        </div>
        <div className="what-i-do__content-item">
          <IconArrowBadgeRight /> <p className="textL">Illustration</p>
        </div>
        <div className="what-i-do__content-item">
          <IconArrowBadgeRight /> <p className="textL">Logo Design</p>
        </div>
        <div className="what-i-do__content-item">
          <IconArrowBadgeRight /> <p className="textL">Typography</p>
        </div>
        <div className="what-i-do__content-item">
          <IconArrowBadgeRight /> <p className="textL">Card Design</p>
        </div>
      </div>
      <Image
        src={bottomShape}
        width={95}
        height={95}
        alt="Bottom Shape"
        className="bottom-shape light-mood-image-shape"
      />
      <Image
        src={groupShape}
        width={47}
        height={71}
        alt="Bottom Shape"
        className="group-shape light-mood-image-shape"
      />
    </motion.div>
  );
};

export default AboutWhatIDo;
