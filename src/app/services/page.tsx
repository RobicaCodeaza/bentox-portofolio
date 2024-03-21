import AboutTopLeftElement from '@/components/pages/about-us/AboutTopLeftElement';
import EllipseShapeLandingTwoTopLeft from '@/components/pages/landing-two/EllipseShapeLandingTwoTopLeft';
import EllipseShapeLandingTwoBottomRight from '@/components/pages/landing-two/EllipseShapeLandingtwoBottomRight';
import ServiceBottomRight from '@/components/pages/service/AboutTopLeftElement';
import ServiceBody from '@/components/pages/service/ServiceBody';
import LinkBackHome from '@/components/shared/LinkBackHome';
import Navbar from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service - Grid System Unique Portfolio NextJs Template',
  description: 'NextJs Template',
};

const Services = () => {
  return (
    <div className='position-relative overflow-hidden height-vh'>
      <div className='position-relative height-vh exact-position'>
        <Navbar />
        {/* <LinkBackHome /> */}
        <div className='container '>
          <ServiceBody />
        </div>
      </div>
      <AboutTopLeftElement />
      <ServiceBottomRight />
    </div>
  );
};

export default Services;
