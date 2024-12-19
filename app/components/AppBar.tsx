'use client'
import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import DesktopNav from './DesktopNav';
import SideDrawer from './SideDrawer';
import Image from 'next/image';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [coloredHeader, setColordHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (currentScrollY > viewportHeight) {
        console.log('User has scrolled past the first screen.');
        setColordHeader(true)
      } 
      else{
        setColordHeader(false)

      }

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down, hide header
        setIsVisible(false);
      } else {
        // Scrolling up, show header
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-transform duration-500 z-40 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${coloredHeader?'bg-primary':'bg-transparent'}`}
    >
      <div className="flex justify-between items-center px-2 md:px-8 py-2 md:py-6 h-16">
        <div className="flex items-center justify-center h-full">
          <Link href={'/'}>
            <div className="relative flex justify-center items-center gap-1 transition-all  duration-300 ">
              <Image alt='video' width={4} height={4} className='w-3 h-3' src={'/giphy.gif'}></Image><h1>Youssef Mansour</h1>
              {/* <Image fill src="/logoPetroli.png" alt="logo" /> */}
            </div>
          </Link>
        </div>
        <SideDrawer />

        <DesktopNav />
      </div>
    </div>
  );
};

export default Header;
