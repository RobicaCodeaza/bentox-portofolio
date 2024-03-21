'use client';
import profileImage from '@/../public/image/landing-bio-image.png';
// import profileShape from '@/../public/image/landing-two-profile-shapepng.png';
import LinkPrimaryTwo from '@/components/shared/LinkPrimaryTwo';
import { motion } from 'framer-motion';
import { Send2 } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';

const LandingTwoBio = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className='card-style-two biography-style '
    >
      <div className='position-relative mb-15'>
        <Image
          src={profileImage}
          width={260}
          height={260}
          alt='Profile Bio'
          className='biography-style__bio-image'
        />
        {/* <Image
          src={profileShape}
          width={272}
          height={272}
          alt='Profile shape'
          className='biography-style__bio-shape '
        /> */}
      </div>

      <div className='biography-style__button-text'>
        <Link href={`/about-us`} className={`biography-style__button textXL`}>
          I’m Stoica Robert
        </Link>
        <p className='biography-style__text textL'>
          A Passionate Designer and Creative Thinker
        </p>
      </div>
      <LinkPrimaryTwo
        linkText='Biography'
        link='/about-us'
        className='biography-style__link'
      />
    </motion.div>
  );
};

export default LandingTwoBio;
