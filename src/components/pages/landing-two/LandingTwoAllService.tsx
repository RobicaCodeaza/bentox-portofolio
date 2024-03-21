"use client";
import image from "@/../public/image/landing-two-all-service-shape.png";
import LinkPrimaryTwo from "@/components/shared/LinkPrimaryTwo";
import { motion } from "framer-motion";
import Image from "next/image";
const LandingTwoAllService = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="all-service card-style-two "
    >
      <p className="heading-4">Services</p>
      <LinkPrimaryTwo link="/services" linkText="All Services" />
      <Image
        src={image}
        width={58}
        height={58}
        alt="All Service Shape"
        className="shape-service light-mood-image-shape"
      />
    </motion.div>
  );
};

export default LandingTwoAllService;
