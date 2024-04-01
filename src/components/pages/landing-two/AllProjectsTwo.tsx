import allProjectStars from '@/../public/image/all-project-stars.png';
// import allProjectImage from '@/../public/image/allProjectImage.jpg';
import allProjectImage from '@/../public/image/workspace.png';
import allProjectImageBlur from '@/../public/image/workspaceBlur.png';
import LinkPrimaryTwo from '@/components/shared/LinkPrimaryTwo';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const AllProjectsTwo = () => {
  const ref = useRef(null);
  useEffect(
    function () {
      function loadImg(entries: any, observer: any) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.srcset = allProjectImage.src;
        entry.target.addEventListener('load', function () {
          entry.target.classList.remove('lazy-img');
        });
        observer.unobserve(entry.target);
      }

      const imgObserver = new IntersectionObserver(loadImg, {
        root: null,
        threshold: 0,
        rootMargin: '+100px',
      });
      if (ref.current) imgObserver.observe(ref?.current);

      return () => {
        if (ref.current) imgObserver.unobserve(ref.current);
      };
    },

    [ref]
  );

  return (
    <div className='card-style-two all-projects-card-two p-32px'>
      <div className='all-projects-card-two__title-text'>
        <p className='heading-4'>See My Latest Works</p>
      </div>

      <Image
        ref={ref}
        src={allProjectImageBlur}
        width={350}
        height={220}
        style={{ objectFit: 'contain' }}
        alt='All Project Image'
        className='all-projects-card-two__image lazy-img'
      />
      <LinkPrimaryTwo
        linkText='All Projects'
        link='/all-projects'
        className='all-projects-card-two__link'
      />
      <Image
        src={allProjectStars}
        width={68}
        height={60}
        alt='All Project Stars'
        className='all-projects-card-two__image-star scale-up-down light-mood-image-shape'
      />
    </div>
  );
};

export default AllProjectsTwo;
