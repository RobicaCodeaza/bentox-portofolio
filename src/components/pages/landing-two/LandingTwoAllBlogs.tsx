'use client';
import image from '@/../public/image/all-blog-card-star.png';
import LinkPrimaryTwo from '@/components/shared/LinkPrimaryTwo';
import { motion } from 'framer-motion';
import Image from 'next/image';
import vsCode from '@/../public/image/visual-studio-code.png';

const LandingTwoAllBlogs = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className='blogs card-style-two p-32px'
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <p className="heading-4">Blog</p>
      <LinkPrimaryTwo link="/blogs" linkText="All Blog" />
      <Image
        src={image}
        width={47}
        height={71}
        alt="All Blog"
        className="shape-blog light-mood-image-shape"
      /> */}
      <Image src={vsCode} width={80} height={80} alt='Vs Code'></Image>
    </motion.div>
  );
};

export default LandingTwoAllBlogs;
