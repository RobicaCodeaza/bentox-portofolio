import AboutTopLeftElement from '@/components/pages/about-us/AboutTopLeftElement';
import BlogBody from '@/components/pages/blog/BlogBody';
import EllipseShapeLandingTwoBottomRight from '@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight';
import Navbar from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs - Grid System Unique Portfolio NextJs Template',
  description: 'NextJs Template',
};

const Blog = () => {
  return (
    <div className='position-relative overflow-hidden height-vh'>
      <div className='position-relative height-vh exact-position'>
        <Navbar />
        <div className='container '>
          {/* <LinkBackHome /> */}
          <BlogBody />
        </div>
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default Blog;
