'use client';
// import image11 from '@/../public/image/all-project-11.png';
import image11 from '@/../public/image/all-project-1.jpg';
import image11Blur from '@/../public/image/all-project-1-blur.jpg';
// import image12 from '@/../public/image/all-project-12.png';
import image12 from '@/../public/image/all-project-2.png';
import image12Blur from '@/../public/image/all-project-2-blur.jpg';
import image13 from '@/../public/image/all-project-3.jpg';
import image13Blur from '@/../public/image/all-project-3-blur.jpg';
import image21 from '@/../public/image/all-project-4.jpg';
import image21Blur from '@/../public/image/all-project-4-blur.jpg';
import image31 from '@/../public/image/all-project-5.png';
import image31Blur from '@/../public/image/all-project-5-blur.jpg';
import image32 from '@/../public/image/all-project-6.png';
import image32Blur from '@/../public/image/all-project-6-blur.png';
// import image3 from '@/../public/image/project-details-image-3.png';

import AllProjectImage from './AllProjectImage';

const AllProjectBody = () => {
  return (
    <div className='mt-xxl-10 mt-xl-8 mt-6 mb-6 mb-xxl-10 mb-xl-8'>
      <div className='all-project-body mb-40-optional'>
        <div className='all-project__1st-row'>
          <div className='all-project__1st-row-1st-column'>
            <AllProjectImage
              image={image11}
              imageBlurSrc={image11Blur}
              width={636}
              hight={425}
              objectPosition=''
              projectNumber={1}
            />
            <AllProjectImage
              image={image12}
              imageBlurSrc={image12Blur}
              width={636}
              hight={330}
              objectPosition=''
              projectNumber={2}
            />
          </div>
          <div className='all-project__1st-row-2nd-column'>
            <AllProjectImage
              image={image13}
              imageBlurSrc={image13Blur}
              width={636}
              hight={780}
              objectPosition=''
              projectNumber={3}
            />
          </div>
        </div>
        <div className='all-project__2nd-row'>
          <AllProjectImage
            image={image21}
            imageBlurSrc={image21Blur}
            width={1296}
            hight={400}
            objectPosition=''
            projectNumber={4}
          />
        </div>
        <div className='all-project__3rd-row'>
          <div className='all-project__3rd-row-1st-column'>
            <AllProjectImage
              image={image31}
              imageBlurSrc={image31Blur}
              width={636}
              hight={393}
              objectPosition=''
              projectNumber={5}
            />
          </div>
          <div className='all-project__3rd-row-2nd-column'>
            <AllProjectImage
              image={image32}
              imageBlurSrc={image32Blur}
              width={636}
              hight={393}
              objectPosition=''
              projectNumber={6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjectBody;
