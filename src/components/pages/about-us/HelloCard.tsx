'use client';
import image from '@/../public/image/shape-11.png';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HelloCard = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className='about-card card-hello'
    >
      <span className='heading-3'>Hello,</span>
      <h2 className='heading-3'>
        I’m Stoica Robert, a Master Student in Computer Science
      </h2>
      {/* <span className='heading-3'>FrontEnd Developer.</span> */}
      <p className='textL'>
        As a current student of a Master, I love to study and always stride to
        learn new things.Whether it is about Web Development domain or how our
        body functions, or just simple sports I like to 'split the thread in
        four like an old man'. Though sometimes it is not a perfect character
        trait, this is what keeps me interested in this pursuit of everyday
        improvement.
      </p>
      <Image
        src={image}
        width={99}
        height={99}
        alt='Shape'
        className='card-hello__shape light-mood-image-shape'
      />
    </motion.div>
  );
};

export default HelloCard;
