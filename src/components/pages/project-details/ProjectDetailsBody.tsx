'use client';

import {
  IconSeo,
  IconBrandGithub,
  IconBrandVite,
  IconBrandRedux,
} from '@tabler/icons-react';
import { SiReactquery, SiSupabase, SiVite } from 'react-icons/si';

import { JavaScript, Html5, Designtools } from 'iconsax-react';
import {
  LogoReact,
  LogoCss3,
  LogoSass,
  ExpandOutline,
  CogOutline,
} from 'react-ionicons';
import { useProjectContext } from '@/components/shared/ProjectProvider';
import Link from 'next/link';

import ProjectBanner from './ProjectBanner';
import ProjectDetailsItem from './ProjectDetailsItem';

import defaultBannerImage from '@/../public/image/project-details-banner.png';
// import bannerImageDefault from '@/../public/image/project-details-banner.png';
import bannerImage1 from '@/../public/image/bannerImage1.png';
import bannerImage1Blur from '@/../public/image/bannerImage1blur.jpg';
import bannerImage2 from '@/../public/image/bannerImage2.png';
import bannerImage2Blur from '@/../public/image/bannerImage2blur.jpg';
import bannerImage3 from '@/../public/image/bannerImage3.png';
import bannerImage3Blur from '@/../public/image/bannerImage3blur.jpg';
import bannerImage4 from '@/../public/image/bannerImage4.png';
import bannerImage4Blur from '@/../public/image/bannerImage4blur.jpg';
import bannerImage5 from '@/../public/image/bannerImage5.png';
import bannerImage5Blur from '@/../public/image/bannerImage5Blur.jpg';
// import bannerImage6 from '@/../public/image/bannerImage1.png';
import image11 from '@/../public/image/image11.png';
import image12 from '@/../public/image/image12.png';
import image13 from '@/../public/image/image13.png';

const projectsContent = [
  {},
  {
    banner: {
      bannerImage: bannerImage1,
      bannerImageBlur: bannerImage1Blur,
      website: 'https://robicacodeaza-realproperty.netlify.app/',
      bannerTitle: 'RealProperty',
      bannerText: 'An inspiring landing page for a real estate agency.',
      techUsed: [
        {
          icon: <Html5 size='32' />,
          name: 'Html5',
        },

        {
          icon: (
            <LogoSass
              style={{ width: '32px', height: '32px' }}
              color='#b3b6b9'
            />
          ),
          name: 'SCSS',
        },
        {
          icon: <JavaScript size='32' />,
          name: 'JavaScript',
        },
        {
          icon: <Designtools size='32' />,
          name: 'Art Direction',
        },
        {
          icon: <CogOutline style={{ width: '32px', height: '32px' }} />,
          name: 'Optimization',
        },
        {
          icon: (
            <ExpandOutline
              style={{ width: '32px', height: '32px' }}
              color='#9747ff'
            />
          ),
          name: 'Responsive',
        },
      ],
    },
    content: [
      {
        image: image11,
        title: 'The Challenge(user story)',
        listContent: [
          'Listing the company main features.',
          'Hightlight the performance of the realtors.',
          'Capture the attention of the public and inspire confidence in the services offered.',
        ],
        text: 'Creating a minimalistic and professional landing page that attracts visitors and creates an aura of trust.',
      },
      {
        image: image12,
        title: 'The Solution',
        listContent: [
          'Features Section & Testimonials',
          'Contact Page & gallery',
          'Current Offer',
        ],
        text: 'Splitting the page into main ideas that convince the viewer/potential client.',
      },
      {
        image: image13,
        title: 'Project Result',
        text: 'A well optimized landing page that follows some of the principles/directions:',
        listContent: [
          'Art Direction,Density Switching & Image Optimization',
          'Personality: Serious & Simple',
          'Parcel bundling and optimizing',
        ],
      },
    ],
  },
  {
    banner: {
      bannerImage: bannerImage2,
      bannerImageBlur: bannerImage2Blur,
      website: 'https://robicacodeaza-dailymeals.netlify.app',
      bannerTitle: 'Mealsify',
      bannerText:
        'An overall app that provides analytics to your daily meals and activities.',
      techUsed: [
        {
          icon: <Html5 size='32' />,
          name: 'Html5',
        },

        {
          icon: (
            <LogoSass
              style={{ width: '32px', height: '32px' }}
              color='#b3b6b9'
            />
          ),
          name: 'SCSS',
        },
        {
          icon: <JavaScript size='32' />,
          name: 'JavaScript',
        },
        {
          icon: <Designtools size='32' />,
          name: 'Art Direction',
        },
        {
          icon: <CogOutline style={{ width: '32px', height: '32px' }} />,
          name: 'Optimization',
        },
        {
          icon: (
            <ExpandOutline
              style={{ width: '32px', height: '32px' }}
              color='#9747ff'
            />
          ),
          name: 'Responsive',
        },
      ],
    },

    content: [
      {
        image: image11,
        title: 'The Challenge(user story)',
        listContent: [
          'View in detail the nutrients',
          'View the body stats progression',
          'Track Calories,daily stats and compare',
          'The feature that permits to add your own recipes',
        ],
        text: 'Creating a responsive experience for users that want to track their daily activity and calories.',
      },
      {
        image: image12,
        title: 'The Solution',
        listContent: [
          'The ability to add meals to different part of day + edit servings and store everything for the calendar day',
          'Calculator of necessary calories based on activity',
          'The ability to view stats from other days of calendar in full details',
          'Progression chart and general statistics.',
        ],
        text: 'The possibility of having access to a large meals database(you can share the meals via url) connected with the dashboard for easier usage through one application.',
      },
      {
        image: image13,
        title: 'Project Result',
        listContent: [
          'MVC pattern',
          'Quickchart-js & Datedreamer used for charts and calendar',
          'Spoonacular Api for meals',
          'Parcel with Transpiling & Polifilling',
        ],
        text: 'A responsive application that integrates one large meals database and creates charts.',
      },
    ],
  },
  {
    banner: {
      bannerImage: bannerImage3,
      bannerImageBlur: bannerImage3Blur,
      website: 'https://dark-omnifood.netlify.app',
      bannerTitle: 'Omnifood',
      bannerText:
        'The importance of healthy delivered meals on one landing page.',
      techUsed: [
        {
          icon: <Html5 size='32' />,
          name: 'Html5',
        },

        {
          icon: (
            <LogoCss3
              style={{ width: '32px', height: '32px' }}
              color='#b3b6b9'
            />
          ),
          name: 'CSS',
        },
        {
          icon: <JavaScript size='32' />,
          name: 'JavaScript',
        },
        {
          icon: <Designtools size='32' />,
          name: 'Art Direction',
        },
        {
          icon: <CogOutline style={{ width: '32px', height: '32px' }} />,
          name: 'Optimization',
        },
        {
          icon: (
            <ExpandOutline
              style={{ width: '32px', height: '32px' }}
              color='#9747ff'
            />
          ),
          name: 'Responsive',
        },
      ],
    },

    content: [
      {
        image: image11,
        title: 'The Challenge(user story)',
        listContent: [
          'Show the audience how it works',
          'The broad range of meals',
          'The offer',
        ],
        text: 'Having a website that showcases the advantages of a healthy diet together with the advantages of home delivered meals.',
      },
      {
        image: image12,
        title: 'The Solution',
        listContent: [
          'Hero Section(to get the attention)',
          'How it works Section',
          'Testimonials and Prices',
          'Features section',
          'CTA section',
        ],
        text: 'A modern feel page that puts emphasis on the healthy aspect,having the final purpose to redirect users to the CTA(call to action) section.',
      },
      {
        image: image13,
        title: 'Project Result',
        text: 'A final page that shines on all devices and takes into consideration the art direction and resolution switching.',
      },
    ],
  },
  {
    banner: {
      bannerImage: bannerImage4,
      bannerImageBlur: bannerImage4Blur,
      website: 'https://robicacodeaza-wellspring-life.netlify.app',
      bannerTitle: 'WellspringLife',
      bannerText:
        'An app that serves its purpose in facilitating a good management of current properties(hotel chain).',
      techUsed: [
        {
          icon: <Html5 size='32' />,
          name: 'Html5',
        },
        {
          icon: <JavaScript size='32' />,
          name: 'JavaScript',
        },

        {
          icon: (
            <LogoReact
              style={{ width: '32px', height: '32px' }}
              color='#b3b6b9'
            />
          ),
          name: 'React',
        },
        {
          icon: <SiReactquery size='32'></SiReactquery>,
          name: 'React Query',
        },
        {
          icon: <SiSupabase size='32'></SiSupabase>,
          name: 'Supabase',
        },
        {
          icon: (
            <SiVite size='32' style={{ fill: 'transparent !important;' }} />
          ),
          name: 'Vite',
        },
        {
          icon: <Designtools size='32' />,
          name: 'Art Direction',
        },

        {
          icon: (
            <ExpandOutline
              style={{ width: '32px', height: '32px' }}
              color='#9747ff'
            />
          ),
          name: 'Responsive',
        },
      ],
    },

    content: [
      {
        image: image11,
        title: 'The Challenge(user story)',
        listContent: [
          'Add new cabins/bookings',
          'Manage users(only existing users can create another user',
          'View stats for sales and other relevant ones',
          "The ability to change the guests' status",
        ],
        text: 'A must have application that facilitates the guests and bookings management of a hotel chain.The application serves the business side, making it easier for existing users to manage check-ins/outs.',
      },
      {
        image: image12,
        title: 'The Solution',
        listContent: [
          'Dashboard to present evolution of data and curent to-dos.',
          'Possibility to upload cabins and to store them',
          'Security of users(can only be created inside the app).',
          'Ability to log in and out',
        ],
        text: 'A complete development for main features(booking,cabins,users,settings)',
      },
      {
        image: image13,

        title: 'Project Result',
        listContent: [
          'React Query',
          'Supabase',
          'React-Form',
          'Recharts',
          'React-Router',
        ],
        text: 'The application is based on secure authentication and storage ensured by Supabase, having fully fledged experience on desktop and mobile. ',
      },
    ],
  },
  {
    banner: {
      bannerImage: bannerImage5,
      bannerImageBlur: bannerImage5Blur,
      website: 'https://robicacodeaza-active-healthy.netlify.app',
      bannerTitle: 'Active&Healthy',
      bannerText:
        'An app that helps you log your current cardio activities related to different places you visit.',
      techUsed: [
        {
          icon: <Html5 size='32' />,
          name: 'Html5',
        },

        {
          icon: (
            <LogoCss3
              style={{ width: '32px', height: '32px' }}
              color='#b3b6b9'
            />
          ),
          name: 'CSS',
        },
        {
          icon: <JavaScript size='32' />,
          name: 'JavaScript',
        },
        {
          icon: <Designtools size='32' />,
          name: 'Art Direction',
        },
        {
          icon: <CogOutline style={{ width: '32px', height: '32px' }} />,
          name: 'Optimization',
        },
        {
          icon: (
            <ExpandOutline
              style={{ width: '32px', height: '32px' }}
              color='#9747ff'
            />
          ),
          name: 'Responsive',
        },
      ],
    },

    content: [
      {
        image: image11,
        title: 'The Challenge(user story)',
        listContent: [
          'Ability to store the data',
          'See informations of previous days(weather,activity)',
          'Search for different locations',
          'Pick locations on click',
        ],
        text: 'Create an application that keeps track of running/cycling depending on day/location/weather.',
      },
      {
        image: image12,
        title: 'The Solution',
        listContent: [
          'The possibility to Create,Delete,Edit workouts',
          'The option to expand a certain day weather details',
          'Interactions with the map',
          'Form Creation with error handling',
          'Storing Data',
        ],
        text: '',
      },
      {
        image: image13,
        title: 'Project Result',
        listContent: [
          'Object Oriented Build',
          'Parcel Optimised',
          'Leaflet Integration and Interaction',
          'Local Storage',
        ],
        text: 'A web app that simplifies the logs of persons that have an active life ',
      },
    ],
  },
  {
    banner: {
      bannerImage: bannerImage1,
      bannerTitle: 'Active&Healthy',
      bannerText:
        'An app that helps you log your current cardio activities related to different places you visit.',
      techUsed: [
        {
          icon: <Html5 size='32' />,
          name: 'Html5',
        },

        {
          icon: (
            <LogoSass
              style={{ width: '32px', height: '32px' }}
              color='#b3b6b9'
            />
          ),
          name: 'SCSS',
        },
        {
          icon: <JavaScript size='32' />,
          name: 'JavaScript',
        },
        {
          icon: <Designtools size='32' />,
          name: 'Art Direction',
        },
        {
          icon: <CogOutline style={{ width: '32px', height: '32px' }} />,
          name: 'Optimization',
        },
        {
          icon: (
            <ExpandOutline
              style={{ width: '32px', height: '32px' }}
              color='#9747ff'
            />
          ),
          name: 'Responsive',
        },
      ],
    },
    content: [
      {
        image: image11,
        title: 'The Challenge',
        text: 'Explore our portfolio projects and witness the artistry of Aroha Agency. Each endeavor a testament to our commitment, showcasing innovative design, strategic marketing,',
      },
      {
        image: image12,
        title: 'The Solution',
        text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
      },
      {
        image: image13,

        title: 'Project Result',
        text: 'Because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, ',
      },
    ],
  },
];

const ProjectDetailsBody = () => {
  const { currentProject } = useProjectContext();
  return (
    <div className='position-relative z-2 mt-xxl-10 mt-xl-8 mt-6 mb-6 mb-xxl-10 mb-xl-8'>
      <div className='card-style-two project-details p-32px mb-40-optional'>
        <ProjectBanner
          projectNumber={currentProject}
          sliderTwo={projectsContent[currentProject]?.banner?.techUsed}
          bannerImage={
            projectsContent[currentProject]?.banner?.bannerImage ||
            defaultBannerImage
          }
          bannerImageBlur={
            projectsContent[currentProject]?.banner?.bannerImageBlur ||
            defaultBannerImage
          }
          bannerTitle={
            projectsContent[currentProject]?.banner?.bannerTitle || 'Title'
          }
          bannerText={
            projectsContent[currentProject]?.banner?.bannerText || 'Text'
          }
          websiteLink={
            projectsContent[currentProject]?.banner?.website || 'Website'
          }
        />

        {projectsContent[currentProject]?.content?.map((el: any, index) => (
          <ProjectDetailsItem
            image={el.image}
            listContent={el.listContent}
            title={el.title}
            text={el.text}
            key={el.title}
            flexDirection={index % 2 === 0 ? '' : 'flex-row-reverse'}
          ></ProjectDetailsItem>
        ))}
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
