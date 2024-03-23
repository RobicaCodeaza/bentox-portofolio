'use client';
import linkImage from '@/../public/image/all-project-link.png';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type Props = {
  image: StaticImageData;
  width: number;
  hight: number;
  title?: string;
  text?: string;
  projectNumber?: number;
  objectPosition: string;
};

const AllProjectImage = ({
  image,
  hight,
  width,
  title,
  text,
  projectNumber,
  objectPosition,
}: Props) => {
  return (
    <motion.div
      initial={{ borderRadius: 20, opacity: 0, y: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='image-body'
    >
      <Image
        src={image}
        style={{
          objectFit: 'cover',
          objectPosition: objectPosition || 'center',
          display: 'block',
          height: `${hight}px`,
          width: `${width}px`,
        }}
        alt='All Projects image 11'
        className='image-body__image img-fluid'
      />
      <Link
        href={`/project-details`}
        className='all-project-link'
        // onClick={handleClick}
      >
        <span className='all-project-link__text-area'>
          <span className='link-title heading-2'>Aroha agency website</span>
          <span className='textL link-text'>
            An 12 month long inquiry into italine design,history and culture.
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
