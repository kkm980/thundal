"use client";

import React, { useState, useEffect } from 'react';
import LinkBox from './LinkBox';
import RoundedBtn from '../button/RoundedBtn';
import ResponsiveLogo from './ResponsiveLogo';
import { xBetween } from '@/utils/styles';
import LanguageSelector from '../languageSelector';

/**
 * FixedNav Component
 * 
 * This component renders a fixed navigation bar that appears when the user scrolls up 
 * by a certain threshold and hides when the user scrolls down.
 * 
 * @returns {JSX.Element} The FixedNav component.
 */
const FixedNav: React.FC = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollThreshold = 15; // Define a threshold for the scroll up distance

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if ((lastScrollY - currentScrollY > scrollThreshold) && (window.scrollY > 100)) {
        // User has scrolled up by more than the threshold
        setShowNavBar(true);
      } else if ((currentScrollY > lastScrollY) || (window.scrollY <= 100)) {
        // User is scrolling down HERE
        setShowNavBar(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    showNavBar && (
      
      <div className={`w-[50%] h-[60px] pl-2 pr-[0.5px] bg-black shadow-[#034441] shadow-lg rounded-[60px] fixed top-[10px] z-[999] ${xBetween}`}>
        {/* <Logo className="ml-2" /> */}
        <div className='ml-4'>
        <ResponsiveLogo nLogoBoxVisible={true} logoClass="w-[100px] top-[10px]" />
        </div>
        
        <LinkBox className="ml-16 w-[200px]" />
        <div className='absolute right-[120px]'>
          <LanguageSelector showAutoScroll={false}/>
        </div>
        
        <RoundedBtn text={"Get Started"} className="" />
      </div>
    )
  );
};

export default FixedNav;

