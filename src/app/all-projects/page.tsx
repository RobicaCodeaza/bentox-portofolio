import AboutTopLeftElement from '@/components/pages/about-us/AboutTopLeftElement';
import AllProjectBody from '@/components/pages/all-projects/AllProjectsbody';
import EllipseShapeLandingTwoBottomRight from '@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight';
import Navbar from '@/components/shared/Navbar';

const AllProjects = () => {
  return (
    <div className='position-relative overflow-hidden height-vh'>
      <div className='position-relative height-vh exact-position'>
        <Navbar />
        <div className='container'>
          {/* <LinkBackHome /> */}
          <AllProjectBody />
        </div>
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default AllProjects;
