'use client';
import {
  IconSeo,
  IconBrandGithub,
  IconBrandVite,
  IconBrandRedux,
} from '@tabler/icons-react';
import { SiReactquery } from 'react-icons/si';
import { Figma, JavaScript, Html5, Designtools } from 'iconsax-react';
import {
  LogoReact,
  LogoCss3,
  LogoSass,
  ExpandOutline,
  CogOutline,
} from 'react-ionicons';

const SkillsCardLandingTwo = [
  'HTML',
  'CSS',
  'SCSS',
  'JavaScript',
  'React',
  'Redux',
  'Parcel',
  'Vite',
  'Responsive Design',
  'Optimization Tools',
  'Art Direction and Density Switching',
  'Continous Integration',
  'SEO',
];

export const sliderTwo = [
  {
    icon: <Html5 size='32' />,
    name: 'Html5',
  },
  {
    icon: (
      <LogoCss3 style={{ width: '32px', height: '32px' }} color='#b3b6b9' />
    ),
    name: 'CSS',
  },
  {
    icon: (
      <LogoSass style={{ width: '32px', height: '32px' }} color='#b3b6b9' />
    ),
    name: 'SCSS',
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
        rotate
      />
    ),
    name: 'React',
  },
  {
    icon: <IconBrandRedux size='32' />,
    name: 'Redux',
  },
  {
    icon: <SiReactquery size='32'></SiReactquery>,
    name: 'React Query',
  },
  {
    icon: <IconBrandVite size='32' />,
    name: 'Vite',
  },
  {
    icon: (
      <ExpandOutline
        style={{ width: '32px', height: '32px' }}
        color='#b3b6b9'
      />
    ),
    name: 'Responsive',
  },
  {
    icon: (
      <CogOutline style={{ width: '32px', height: '32px' }} color='#b3b6b9' />
    ),
    name: 'Optimization',
  },
  {
    icon: <Designtools size='32' />,
    name: 'Art Direction',
  },
  {
    icon: <IconBrandGithub size='32' />,
    name: 'Github',
  },
  {
    icon: <IconSeo size='32' />,
    name: 'SEO',
  },

  {
    icon: <Html5 size='32' />,
    name: 'Html5',
  },
  {
    icon: (
      <LogoCss3 style={{ width: '32px', height: '32px' }} color='#b3b6b9' />
    ),
    name: 'CSS',
  },
  {
    icon: (
      <LogoSass style={{ width: '32px', height: '32px' }} color='#b3b6b9' />
    ),
    name: 'SCSS',
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
        rotate
      />
    ),
    name: 'React',
  },
  {
    icon: <IconBrandRedux size='32' />,
    name: 'Redux',
  },
  {
    icon: <IconBrandVite size='32' />,
    name: 'Vite',
  },
  {
    icon: (
      <ExpandOutline
        style={{ width: '32px', height: '32px' }}
        color='#b3b6b9'
      />
    ),
    name: 'Responsive',
  },
  {
    icon: (
      <CogOutline style={{ width: '32px', height: '32px' }} color='#b3b6b9' />
    ),
    name: 'Optimization',
  },
  {
    icon: <Designtools size='32' />,
    name: 'Art Direction',
  },
  {
    icon: <IconBrandGithub size='32' />,
    name: 'Github',
  },
  {
    icon: <IconSeo size='32' />,
    name: 'SEO',
  },
];

const SkillsCardTwo = () => {
  return (
    <div className='card-style skills-card-landing-two overflow-hidden'>
      <span className='heading-4 skills-card-landing-two__title'>
        Skills & Tools
      </span>
      <div className='skills-card-landing-two__slider-aria '>
        <div className='marquee-wrapper text-slider'>
          <div className='marquee-inner to-left'>
            <ul className='marqee-list d-flex'>
              <li className='marquee-item'>
                {SkillsCardLandingTwo.map((item) => (
                  <span key={item} className='skills-card__slider-text'>
                    {item}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className='marquee-wrapper-icon-slider'>
          <div className='marquee-inner to-right'>
            <ul className='marqee-list d-flex'>
              <li className='marquee-item'>
                {sliderTwo.map(({ icon, name }, index) => (
                  <>
                    <span
                      key={`skill-slider-two${index}`}
                      className='skills-card__slider-two__box position-relative'
                    >
                      {icon}
                      <span className='skills-card__description'>{name}</span>
                    </span>
                  </>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCardTwo;

// {
//   icon: <Figma size='32' />,
// },
// {
//   icon: <Photoshop size='32' />,
// },
// {
//   icon: <Illustrator size='32' />,
// },
// {
//   icon: <Xd size='32' />,
// },
// {
//   icon: <Framer size='32' />,
// },
// {
//   icon: <IconBrandWebflow size='32' />,
// },
// {
//   icon: <Figma size='32' />,
// },
// {
//   icon: <Photoshop size='32' />,
// },
// {
//   icon: <Illustrator size='32' />,
// },
// {
//   icon: <Xd size='32' />,
// },
// {
//   icon: <Framer size='32' />,
// },
// {
//   icon: <IconBrandWebflow size='32' />,
// },
// {
//   icon: <Figma size='32' />,
// },
// {
//   icon: <Photoshop size='32' />,
// },
// {
//   icon: <Illustrator size='32' />,
// },
// {
//   icon: <Xd size='32' />,
// },
// {
//   icon: <Framer size='32' />,
// },
// {
//   icon: <IconBrandWebflow size='32' />,
// },
