'use client';
// import image11 from '@/../public/image/all-project-11.png';
import image11 from '@/../public/image/all-project-1.png';
// import image12 from '@/../public/image/all-project-12.png';
import image12 from '@/../public/image/all-project-2.png';
import image13 from '@/../public/image/all-project-3.png';
import image21 from '@/../public/image/all-project-21.png';
import image31 from '@/../public/image/all-project-31.png';
import image32 from '@/../public/image/all-project-32.png';
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
              width={636}
              hight={425}
              objectPosition=''
              projectNumber={1}
            />
            <AllProjectImage
              image={image12}
              width={636}
              hight={330}
              objectPosition=''
              projectNumber={2}
            />
          </div>
          <div className='all-project__1st-row-2nd-column'>
            <AllProjectImage
              image={image13}
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
              width={636}
              hight={393}
              objectPosition=''
              projectNumber={5}
            />
          </div>
          <div className='all-project__3rd-row-2nd-column'>
            <AllProjectImage
              image={image32}
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
