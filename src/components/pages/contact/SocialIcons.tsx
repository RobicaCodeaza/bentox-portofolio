"use client";
import { motion } from "framer-motion";
import { Be, Dribbble, Facebook, Instagram, Twitch } from "iconsax-react";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <div className="m-t-120px social-icon-section">
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="https://www.facebook.com" className="social-icon">
          <span className="icon">
            <Facebook size={24} />
          </span>
          <span className="textLead icon-name">Facebook</span>
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="https://twitter.com/" className="social-icon">
          <span className="icon">
            <Twitch size={24} />
          </span>
          <p className="textLead icon-name">Twitter</p>
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="https://dribbble.com/" className="social-icon">
          <span className="icon">
            <Dribbble size={24} />
          </span>
          <p className="textLead icon-name">Dribbble</p>
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="https://www.instagram.com/" className="social-icon">
          <span className="icon">
            <Instagram size={24} />
          </span>
          <p className="textLead icon-name">Instagram</p>
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href="https://www.behance.net/" className="social-icon">
          <span className="icon">
            <Be size={24} />
          </span>
          <p className="textLead icon-name">Behance</p>
        </Link>
      </motion.div>
    </div>
  );
};

export default SocialIcons;
