'use client';
import { motion } from 'framer-motion';
import { Be, Dribbble, Facebook, Instagram, Twitch } from 'iconsax-react';
import { LogoLinkedin, LogoGithub } from 'react-ionicons';

import Link from 'next/link';

const SocialIcons = () => {
  return (
    <div className='m-t-120px social-icon-section'>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href='https://www.linkedin.com/in/robert-cristian-stoica-32510b251/'
          className='social-icon'
          target='_blank'
        >
          <span className='icon'>
            <LogoLinkedin style={{ width: '24px', height: '24px' }} />
          </span>
          <span className='textLead icon-name'>Linkedn</span>
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href='https://github.com/RobicaCodeaza'
          className='social-icon'
          target='_blank'
        >
          <span className='icon'>
            <LogoGithub style={{ width: '24px', height: '24px' }} />
          </span>
          <p className='textLead icon-name'>Github</p>
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href='https://www.instagram.com/_robeert.t/'
          target='_blank'
          className='social-icon'
        >
          <span className='icon'>
            <Instagram size={24} />
          </span>
          <p className='textLead icon-name'>Instagram</p>
        </Link>
      </motion.div>
      {/* <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href='https://www.instagram.com/' className='social-icon'>
          <span className='icon'>
            <Instagram size={24} />
          </span>
          <p className='textLead icon-name'>Instagram</p>
        </Link>
      </motion.div>
      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Link href='https://www.behance.net/' className='social-icon'>
          <span className='icon'>
            <Be size={24} />
          </span>
          <p className='textLead icon-name'>Behance</p>
        </Link>
      </motion.div> */}
    </div>
  );
};

export default SocialIcons;
