'use client';
import titleShape from '@/../public/image/landing-two-title-shape.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProductDesign = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className='card-style-two product-design p-32px no-hover'
    >
      <span className='product-design__sub-title heading-5'>
        Just a little too curious
      </span>
      <h2 className='heading-2 product-design__title'>Web Developer</h2>
      <Image
        src={titleShape}
        width={60}
        height={60}
        alt='Title shape'
        className='product-design__shape scale-up-down light-mood-image-shape'
      />
    </motion.div>
  );
};

export default ProductDesign;
