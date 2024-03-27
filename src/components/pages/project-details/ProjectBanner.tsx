import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import linkImage from '@/../public/image/all-project-link.png';

import {
  IconSeo,
  IconBrandGithub,
  IconBrandVite,
  IconBrandRedux,
} from '@tabler/icons-react';
import { Figma, JavaScript, Html5, Designtools } from 'iconsax-react';
import {
  LogoReact,
  LogoCss3,
  LogoSass,
  ExpandOutline,
  CogOutline,
} from 'react-ionicons';

const ProjectBanner = ({
  sliderTwo,
  bannerImage,
  projectNumber,
  bannerTitle,
  bannerText,
  websiteLink,
}: {
  sliderTwo: any;
  bannerImage: StaticImageData;
  projectNumber: number;
  bannerTitle: string;
  bannerText: string;
  websiteLink: string;
}) => {
  return (
    <div className='project-details__banner'>
      {/* <Image
        src={bannerImage}
        width={1232}
        height={500}
        alt='Banner Image'
        className='img-fluid'
      /> */}

      <motion.div
        initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='image-body'
      >
        <Image
          src={bannerImage}
          style={{
            objectFit: 'cover',
            // objectPosition: objectPosition || 'center',
            display: 'block',
            height: `${500}px`,
            width: `${960}px`,
          }}
          alt={`Photo 1 of project ${projectNumber}`}
          className='image-body__image img-fluid'
        />
        <Link
          href={websiteLink}
          className='all-project-link active'
          target='_blank'
        >
          <span className='all-project-link__text-area__details'>
            <span className='link-title heading-3'>Visit Website</span>
            <span className='all-project-link__image'>
              <Image
                src={linkImage}
                width={175}
                height={100}
                alt='All Project Link image'
                className='img-fluid'
              />
            </span>
          </span>
        </Link>
      </motion.div>
      <span className='skills-card__slider-two mb-5'>
        {sliderTwo.map(({ icon, name }, index) => (
          <>
            <span
              key={`skill-slider-two${index}`}
              className='skills-card__slider-two__flex  skills-card__slider-two__box skills-card__slider-two__box--active position-relative'
            >
              {icon}
              <span className='skills-card__description'>{name}</span>
            </span>
          </>
        ))}
      </span>
      <h2 className='heading-2'>{bannerTitle}</h2>
      <p className='textL'>{bannerText}</p>
    </div>
  );
};

export default ProjectBanner;
