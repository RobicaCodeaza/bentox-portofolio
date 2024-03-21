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
  {
    id: 'menu2',
    menuTitle: 'Blog',
    path: '/blogs',
  },
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
          <PlanetOutline
            color={'#5a279f'}
            rotate
            height='32px'
            width='32px'
            onHover={() => {
              color: '#0000';
            }}
          />
        </Link>
      </div>
      <ul className='desktop-menu-items' id='primary'>
        {navbarData.map(({ id, menuTitle, path, menuItems }) => {
          let isActive = menuItems?.some(
            (path) => pathName == path.menuItemPath
          );
          return menuItems ? (
            <li
              key={`${id}`}
              className={` position-relative menu-item-with-dropdown`}
            >
              <p
                className={`d-flex gap-1 align-items-center justify-content-between navbar-hover-text ${
                  isActive && 'text-secondary'
                }`}
              >
                {' '}
                <span
                  className={` textL font-medium  ${
                    isActive ? 'text-secondary' : 'menu-item-text-white'
                  }`}
                >
                  {menuTitle}
                </span>
                <IconChevronDown stroke='3' className={`menu-arrow-icon`} />
              </p>

              <ul className='list-unstyled main-menu-dropdown'>
                {menuItems.map(({ id, title, menuItemPath }) => (
                  <li key={id} className={``}>
                    <Link
                      href={`${menuItemPath}`}
                      className={`textL desktop-menu-item desktop-menu-dropdown-item menu-item-text-white  ${
                        pathName === menuItemPath && 'menu-active'
                      }`}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
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
