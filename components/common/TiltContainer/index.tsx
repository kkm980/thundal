"use client";

import React from 'react';
import Tilt from 'react-parallax-tilt';

/**
 * TiltContainer Component
 * 
 * This component wraps its children with a parallax tilt effect using the react-parallax-tilt library.
 * 
 * @param {React.ReactNode} children - The child components to be wrapped.
 * @returns {JSX.Element} The TiltContainer component.
 */
const TiltContainer: React.FC<{ children?: React.ReactNode, className?:string, ref?: any }> = ({ children, className="", ref }): JSX.Element => {
  return (
    <div ref={ref}>
      <Tilt className={`${className}`}>
      {children}
    </Tilt>
    </div>
    
  );
};

export default TiltContainer;

