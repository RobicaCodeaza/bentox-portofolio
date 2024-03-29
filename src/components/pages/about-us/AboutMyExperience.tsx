'use client';
import { motion } from 'framer-motion';
import { Import } from 'iconsax-react';
import MyExperienceItem from './MyExperienceItem';

const AboutMyExperience = () => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className='about-card my-experience p-32px'
    >
      <div className='d-flex align-items-center justify-content-between'>
        {' '}
        <p className='heading-4'>My Experience</p>
        <div className='download-icon'>
          <Import />
        </div>
      </div>

      <div className='my-experience__content'>
        <MyExperienceItem
          time='2024 -- Now'
          title='Student and freelancing'
          company='ASE'
        />
        <MyExperienceItem
          time='2020 -- 2024'
          title='HR'
          company='Microsoft Learning Students Ambassador'
        />
        <MyExperienceItem
          time='04.2023 -- 05.2023'
          title='Apprenticeship(Web Development)'
          company='Conttax'
        />
        <MyExperienceItem
          time='04.2022 -- 07.2022 '
          title='Substitute Teacher'
          company="CodeSchool's Club"
        />
      </div>
    </motion.div>
  );
};

export default AboutMyExperience;
