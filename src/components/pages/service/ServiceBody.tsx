'use client';
import brandImage from '@/../public/image/brand-icon.png';
import marketingImage from '@/../public/image/marketing-icon.png';
import serviceShape from '@/../public/image/service-shape-14.png';
import shape11 from '@/../public/image/shape-11.png';
import shape29 from '@/../public/image/shape-29.png';
import shape53 from '@/../public/image/shape-53.png';
import uxDesignImage from '@/../public/image/ui-ux-icon.png';
import developmentImage from '@/../public/image/web-development-icon.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AboutEducation from '../about-us/AboutEducation';
import AboutLetsWorks from '../about-us/AboutLetsWorks';
import ProfileCardAbout from '../about-us/ProfileCardAbout';

const ServiceBody = () => {
  return (
    <div className='mt-xxl-10 mt-xl-8 mt-6 position-relative z-2 mb-6 mb-xxl-10 mb-xl-8  '>
      <div className='service-body '>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='service-body__design service-card'
        >
          <h3 className='heading-3 card-title'>
            <span className='title-top'>UI/UX</span>
            <span className='title-bottom'>Design</span>
          </h3>
          <Image
            src={uxDesignImage}
            width={100}
            height={100}
            alt='UI/UX design Image'
            className='m-t-40px img-fluid'
          />
          <p className='m-t-40px textL font-thin card-text-color'>
            Welcome to our UI/UX Design Showcase, where creativity meets
            functionality. Dive world where user experience is paramount, and
            portfolio and witness the art of user-centric design that elevates
            digital experiences to new heights.
          </p>
          <Image
            src={shape11}
            width={99}
            height={99}
            alt='Shape 11'
            className='img-fluid shape-image-service light-mood-image-shape'
          />
        </motion.div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='service-body__marketing service-card'
        >
          <h3 className='heading-3 card-title'>
            <span className='title-top'>Digital</span>
            <span className='title-bottom'> Marketing</span>
          </h3>
          <Image
            src={marketingImage}
            width={100}
            height={100}
            alt='UI/UX design Image'
            className='m-t-40px img-fluid'
          />
          <p className='m-t-40px textL font-thin card-text-color'>
            Unlock your brand&apos;s potential with Digital Marketing expertise.
            From strategic campaigns to engaging content, we navigate the
            digital landscape to elevate your online presence and drive
            meaningful connections.
          </p>
          <Image
            src={serviceShape}
            width={99}
            height={99}
            alt='Service Shape'
            className='img-fluid shape-image-marketing light-mood-image-shape'
          />
        </motion.div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='service-body__brand-identity service-card'
        >
          <h3 className='heading-3 card-title'>
            <span className='title-top'>Brand</span>
            <span className='title-bottom'>Identity</span>
          </h3>
          <Image
            src={brandImage}
            width={100}
            height={100}
            alt='UI/UX design Image'
            className='m-t-40px img-fluid'
          />
          <p className='m-t-40px textL font-thin card-text-color'>
            Crafting brand identities that resonate. Our Brand Identity
            portfolio showcases unique logos, color schemes, and style guides
            that leave a lasting impression, defining your brand with visual
            excellence.
          </p>
          <Image
            src={shape29}
            width={99}
            height={99}
            alt='Service Shape'
            className='img-fluid shape-image-brand light-mood-image-shape'
          />
        </motion.div>
        <motion.div
          initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='service-body__web-development service-card'
        >
          <h3 className='heading-3 card-title'>
            <span className='title-top'>Web</span>
            <span className='title-bottom'> Development</span>
          </h3>
          <Image
            src={developmentImage}
            width={100}
            height={100}
            alt='UI/UX design Image'
            className='m-t-40px img-fluid'
          />
          <p className='m-t-40px textL font-thin card-text-color'>
            Elevate your online presence with Web Development expertise.
            portfolio showcases visually stunning and functionally robust
            websites, meticulously crafted captivate audiences and drive digital
            success.
          </p>
          <Image
            src={shape53}
            width={99}
            height={99}
            alt='Service Shape'
            className='img-fluid shape-image-developer light-mood-image-shape'
          />
        </motion.div>
      </div>
      <div className='service-bottom mb-40-optional'>
        <ProfileCardAbout />
        <AboutEducation />
        <AboutLetsWorks />
      </div>
    </div>
  );
};

export default ServiceBody;
