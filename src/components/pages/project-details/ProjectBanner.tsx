import bannerImage from '@/../public/image/project-details-banner.png';
import Image from 'next/image';

const ProjectBanner = () => {
  return (
    <div className='project-details__banner'>
      <Image
        src={bannerImage}
        width={1232}
        height={500}
        alt='Banner Image'
        className='img-fluid'
      />
      <h2 className='heading-2'>Aroha agency website</h2>
      <p className='textL'>
        At Aroha Agency, we craft digital experiences that resonate. From web
        design to marketing strategy, we fuse creativity with technology to
        elevate your brand. Explore our portfolio, discover innovative
        solutions, and let us shape a digital presence that captivates and
        converts.
      </p>
    </div>
  );
};

export default ProjectBanner;
