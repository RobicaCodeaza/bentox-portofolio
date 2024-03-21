import image1 from '@/../public/image/project-details-image-1.png';
import image2 from '@/../public/image/project-details-image-2.png';
import image3 from '@/../public/image/project-details-image-3.png';
import Link from 'next/link';
import ProjectBanner from './ProjectBanner';
import ProjectDetailsItem from './ProjectDetailsItem';

const ProjectDetailsBody = () => {
  const listArrayOne = [
    'Expert advice and guidance to elevate your digital strategy.',
    'Crafting visually stunning  user-friendly websites your brand.',
    'Building and maintaining presence on social platforms.',
  ];

  const listArrayTwo = [
    'One who avoids a pain that produces no resultant pleasure.',
    'laborious physical exercise.',
    'One who avoids a pain that produces no resultant',
  ];

  const listArrayThree = [
    'Creating customized and user-friendly mobile applications.',
    "Enhancing your website's visibility and search engine ranking.",
    'online stores for seamless transactions.',
  ];

  return (
    <div className='position-relative z-2 mt-xxl-10 mt-xl-8 mt-6 mb-6 mb-xxl-10 mb-xl-8'>
      <div className='card-style-two project-details p-32px mb-40-optional'>
        <ProjectBanner />
        <ProjectDetailsItem
          image={image1}
          listContent={listArrayOne}
          title='The Challenge'
          text='Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,'
        />
        <ProjectDetailsItem
          image={image2}
          listContent={listArrayTwo}
          flexDirection='flex-row-reverse'
          title='The Solution'
          text='Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
        />
        <ProjectDetailsItem
          image={image3}
          listContent={listArrayThree}
          title='Project Result'
          text='Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, '
        />
      </div>
      <Link
        href={`/all-projects`}
        className='header-title next-project heading-4 m-t-60px z-2 position-relative'
      >
        Next Projects
      </Link>
    </div>
  );
};

export default ProjectDetailsBody;
