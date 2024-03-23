'use client';
import { IconChevronDown } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ArrowButton from '../pages/blog-details/ArrowButton';

import { PlanetOutline } from 'react-ionicons';

export const navbarData = [
  {
    id: 'menu1',
    menuTitle: 'Home',
    path: '/',
    // menuItems: [
    //   {
    //     id: 'homeONe',
    //     title: 'Home One',
    //     menuItemPath: '/',
    //   },
    // {
    //   id: "homeTwo",
    //   title: "Home Two",
    //   menuItemPath: "/landing-page-two",
    // },
    // ],
  },
  {
    id: 'about-page',
    menuTitle: 'About',
    path: '/about-us',
  },
  // {
  //   id: 'menu2',
  //   menuTitle: 'Blog',
  //   path: '/blogs',
  // },
  {
    id: 'work',
    menuTitle: 'Projects',
    path: '/all-projects',
  },
];

const DesktopNavbar = () => {
  const pathName = usePathname();
  return (
    <div className='desktop-navbar-container'>
      <div>
        <Link href={`/`} className='logo-main'>
          <PlanetOutline color={'#e8d3c6'} rotate height='32px' width='32px' />
        </Link>
      </div>
      <ul className='desktop-menu-items' id='primary'>
        {navbarData.map(({ id, menuTitle, path }) => {
          return (
            <li key={id} className={`menu-item `}>
              <Link
                href={`${path}`}
                className={`textL font-medium navbar-hover-text  ${
                  pathName === path ? 'text-secondary' : 'menu-item-text-white'
                }`}
              >
                {' '}
                {menuTitle}
              </Link>
            </li>
          );
        })}
      </ul>
      <ArrowButton link='/contact' />
    </div>
  );
};

export default DesktopNavbar;
