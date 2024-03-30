'use client';
import linkImage from '@/../public/image/all-project-link.png';
import { useProjectContext } from '@/components/shared/ProjectProvider';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type Props = {
  image: StaticImageData;
  width: number;
  hight: number;
  title?: string;
  text?: string;
  projectNumber?: number;
  objectPosition: string;
  imageBlurSrc: StaticImageData;
};

const allProjects: any = {
  project1: {
    title: 'RealProperty',
    description: 'An inspiring landing page for a real estate agency.',
  },
  project2: {
    title: 'DailyMeals',
    description:
      'An overall app that provides analytics to your daily meals and activities.',
  },
  project3: {
    title: 'Omnifood',
    description:
      'The importance of healthy delivered meals on one landing page.',
  },
  project4: {
    title: 'WellspringLife',
    description:
      'An app that serves its purpose in facilitating a good management of current properties(hotel chain).',
  },
  project5: {
    title: 'Active&Healthy',
    description:
      'An app that helps you log your current cardio activities related to different places you visit.',
  },
  project6: {
    title: 'GymRat',
    description:
      'A complete app,serves with simplicity, being an all-in-one gym log that helps you track your records and daily needs.',
  },
};

const AllProjectImage = ({
  image,
  hight,
  width,
  title,
  text,
  projectNumber = 0,
  objectPosition,
  imageBlurSrc,
}: Props) => {
  const { setCurrentProject } = useProjectContext();

  const ref = useRef();
  useEffect(
    function () {
      function loadImg(entries: any, observer: any) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.srcset = image.src;
        entry.target.addEventListener('load', function () {
          entry.target.classList.remove('lazy-img');
        });
        observer.unobserve(entry.target);
      }

      const imgObserver = new IntersectionObserver(loadImg, {
        root: null,
        threshold: 0,
        rootMargin: '-250px',
      });
      imgObserver.observe(ref?.current);

      return () => {
        if (ref.current) imgObserver.unobserve(ref.current);
      };
    },

    [ref]
  );

  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='image-body'
    >
      <Image
        ref={ref}
        src={imageBlurSrc}
        style={{
          objectFit: 'cover',
          objectPosition: objectPosition || 'center',
          display: 'block',
          height: `${hight}px`,
          width: `${width}px`,
        }}
        alt='All Projects image 11'
        className='image-body__image img-fluid lazy-img'
      />
      <Link
        href={`/project-details`}
        className='all-project-link'
        onClick={() => {
          setCurrentProject(projectNumber);
        }}
      >
        <span className='all-project-link__text-area'>
          <span className='link-title heading-2'>
            {allProjects[`project${projectNumber}`]?.title}
          </span>
          <span className='textL link-text'>
            {allProjects[`project${projectNumber}`]?.description}
          </span>
        </span>
        <span className='all-project-link__image'>
          <Image
            src={linkImage}
            width={175}
            height={100}
            alt='All Project Link image'
            className='img-fluid'
          />
        </span>
      </Link>
    </motion.div>
  );
};

export default AllProjectImage;
