import AboutTopLeftElement from '@/components/pages/about-us/AboutTopLeftElement';
import BlogDetailsBody from '@/components/pages/blog-details/BlogDetailsBody';
import EllipseShapeLandingTwoBottomRight from '@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight';
import Navbar from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Details - Grid System Unique Portfolio NextJs Template',
  description: 'NextJs Template',
};

const Blog = () => {
  return (
    <div className='position-relative overflow-hidden '>
      <div className='position-relative height-vh exact-position'>
        <Navbar />
        <div className='container '>
          {/* <LinkBackHome /> */}
          <BlogDetailsBody />
        </div>
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default Blog;
