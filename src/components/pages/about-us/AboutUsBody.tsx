import { StaticImageData } from 'next/image';
import AboutCardProfile from './AboutCardProfile';
import AboutEducation from './AboutEducation';
import AboutLetsWorks from './AboutLetsWorks';
import AboutMyExperience from './AboutMyExperience';
import AboutWhatIDo from './AboutWhatIDo';
import ExperienceInNumber from './ExperienceInNumber';
import HelloCard from './HelloCard';
import ProfileCardAbout from './ProfileCardAbout';

const AboutUsBody = ({ image }: { image: StaticImageData }) => {
  return (
    <div className='mt-xxl-10 mt-xl-8 mt-6 position-relative z-2 mb-6 mb-xxl-10 mb-xl-8'>
      <div className='about-body mb-40-optional'>
        <div className='about-body__1st-row'>
          <HelloCard />
          <AboutCardProfile image={image} />
        </div>
        <div className='about-body__2nd-row'>
          <AboutMyExperience />
          <AboutWhatIDo />
          <ExperienceInNumber />
        </div>
        <div className='about-body__3rd-row'>
          <ProfileCardAbout />
          <AboutEducation />
          <AboutLetsWorks />
        </div>
      </div>
    </div>
  );
};

export default AboutUsBody;
