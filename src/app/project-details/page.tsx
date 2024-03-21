import AboutTopLeftElement from '@/components/pages/about-us/AboutTopLeftElement';
import EllipseShapeLandingTwoBottomRight from '@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight';
import ProjectDetailsBody from '@/components/pages/project-details/ProjectDetailsBody';
import LinkBackHome from '@/components/shared/LinkBackHome';
import Navbar from '@/components/shared/Navbar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Details - Grid System Unique Portfolio NextJs Template',
  description: 'NextJs Template',
};

const ProjectDetails = () => {
  return (
    <div className='position-relative overflow-hidden height-vh'>
      <div className='position-relative height-vh exact-position'>
        <Navbar />
        <div className='container'>
          {/* <LinkBackHome /> */}
          <ProjectDetailsBody />
        </div>
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default ProjectDetails;
