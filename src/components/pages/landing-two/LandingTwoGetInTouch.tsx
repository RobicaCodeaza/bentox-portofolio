'use client';
import image from '@/../public/image/landing-two-get-in-touch-shape.png';
import LinkPrimaryTwo from '@/components/shared/LinkPrimaryTwo';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LandingTwoGetInTouch = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className='get-in-touch card-style-two p-32px'
    >
      <p className='heading-4'>Let’s get in touch soon </p>
      <LinkPrimaryTwo link='/contact' linkText='Get In Touch' />
      <Image
        src={image}
        width={46}
        height={46}
        alt='Get in touch Shape'
        className='shape-get-touch light-mood-image-shape'
      />
    </motion.div>
  );
};

export default LandingTwoGetInTouch;
