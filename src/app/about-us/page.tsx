import AboutTopLeftElement from '@/components/pages/about-us/AboutTopLeftElement';
import AboutUsBody from '@/components/pages/about-us/AboutUsBody';
import EllipseShapeLandingTwoBottomRight from '@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight';
import Navbar from '@/components/shared/Navbar';
import { Metadata } from 'next';
import aboutOne from '@/../public/image/contact-pic.jpg';

export const metadata: Metadata = {
  title: 'About Us - Grid System Unique Portfolio NextJs Template',
  description: 'NextJs Template',
};

const AboutUs = () => {
  return (
    <div className='position-relative overflow-hidden height-vh'>
      <div className='position-relative height-vh exact-position'>
        <Navbar />
        {/* <LinkBackHome /> */}
        <div className='container '>
          <AboutUsBody image={aboutOne} />
        </div>
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default AboutUs;
