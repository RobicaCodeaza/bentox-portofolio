'use client';
import { useState } from 'react';
import ArrowButton from '../pages/blog-details/ArrowButton';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    // <div className='navbar-container position-relative z-3'>
    <div className='navbar-container '>
      {/* desktop navbar */}

      <DesktopNavbar />
      {/* mobile navbar */}
      <div className='mobile-navbar-container bg-light-white'>
        {' '}
        <div
          className={`hamburger ${sidebarToggle ? 'is-active' : ''}`}
          onClick={handleToggle}
        >
          <div className='hamburger__container'>
            <div className='hamburger__inner'></div>
            <div className='hamburger__hidden'></div>
          </div>
        </div>
        <ArrowButton link='/contact' />
      </div>
      <MobileNavbar
        sidebarToggle={sidebarToggle}
        handleToggle={handleToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
};

export default Navbar;
