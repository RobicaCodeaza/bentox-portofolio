import EllipseShapeLandingtwoBottomRight from '@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight';
import EllipseShapeLandingTwoTopLeft from '@/components/pages/landing-two/EllipseShapeLandingTwoTopLeft';
// import Footer from '@/components/pages/landing-one/Footer';
import LandingTwoBody from '@/components/pages/landing-two/LandingTwoBody';
import Navbar from '@/components/shared/Navbar';
// import Snowfall from '@/components/shared/Snowfall';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Home One - Grid System Unique Portfolio NextJs Template',
//   description: 'NextJs Template',
// };

const page = () => {
  return (
    <div className='position-relative overflow-hidden height-vh'>
      <EllipseShapeLandingTwoTopLeft />
      <EllipseShapeLandingtwoBottomRight />
      <div className='position-relative height-vh exact-position'>
        <Navbar />
        <div className='container'>
          <LandingTwoBody />
          {/* <Footer /> */}
          {/* <Snowfall /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
