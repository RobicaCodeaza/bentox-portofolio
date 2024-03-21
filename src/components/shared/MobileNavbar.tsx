'use client';
import {
  ArrowDown2,
  Blogger,
  Briefcase,
  CallAdd,
  Home2,
  UserSquare,
} from 'iconsax-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { PlanetOutline } from 'react-ionicons';

const navbarData = [
  {
    id: 'menu1',
    icon: <Home2 />,
    menuTitle: 'Home',
    path: '/',
  },
  {
    id: 'menu2',
    menuTitle: 'Blog',
    icon: <Blogger />,
    path: '/blogs',
  },
  {
    id: 'project',
    menuTitle: 'Projects',
    icon: <Briefcase />,
    path: '/all-projects',
  },
  {
    id: 'services-section',
    menuTitle: 'Services',
    icon: <Briefcase />,
    path: '/services',
  },

  {
    id: 'about-page',
    icon: <UserSquare />,
    menuTitle: 'About',
    path: '/about-us',
  },
  {
    id: 'contact-page',
    icon: <CallAdd />,
    menuTitle: 'Contact',
    path: '/contact',
  },
];

type Props = {
  sidebarToggle: boolean;
  handleToggle: () => void;
  setSidebarToggle: Dispatch<SetStateAction<boolean>>;
};
const MobileNavbar = ({
  sidebarToggle,
  handleToggle,
  setSidebarToggle,
}: Props) => {
  const [dropDown, setDropDown] = useState('');

  const handleDropDown = (id: string) => {
    if (dropDown === id) {
      setDropDown('');
    } else {
      setDropDown(id);
    }
  };

  const pathName = usePathname();

  return (
    <div className='mobile-sidebar'>
      <div
        className={`mobile-sidebar-overlay ${
          sidebarToggle
            ? 'mobile-sidebar-overlay-show'
            : 'mobile-sidebar-overlay-hide'
        }`}
        onClick={handleToggle}
      ></div>
      <div
        className={`mobile-sidebar-containe ${
          sidebarToggle ? 'mobile-sidebar-show' : 'mobile-sidebar-hide'
        }`}
      >
        <div className='sidebar-menu-container'>
          <ul className='mobile-sidebar-menus'>
            {navbarData.map(({ id, menuTitle, path, icon }) => {
              return (
                <li
                  key={id}
                  className={`mobile-menu-item  ${
                    pathName === path && 'text-secondary'
                  }`}
                >
                  <Link
                    onClick={() => setSidebarToggle(false)}
                    href={`${path}`}
                    className='d-flex align-items-center justify-content-between mobile-single-menu'
                  >
                    {' '}
                    <span className='textXL mobile-menu-link'>
                      {icon} <span>{menuTitle}</span>{' '}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
