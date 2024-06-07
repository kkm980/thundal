
"use client"
import React, { useState, useEffect } from 'react';

type RenderBoxProps = {
  children: React.ReactNode;
  className?: string;
}

export const RenderBox: React.FC<RenderBoxProps> = ({ children, className }): JSX.Element => {
  const [outerHeight, setOuterHeight] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setOuterHeight(document.getElementById('outer')?.offsetHeight || null);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {

  }, [outerHeight]);

  return (
    <div id="outer" className={`relative bg-black ${className}`}>
      {(outerHeight !== null) && (outerHeight > 900) && (
        <div className="absolute w-[455px] h-[455px] left-[0px] top-[550px] blur-[280px]" style={{ backgroundImage: `url("/images/common/bg/layer1.svg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        </div>
      )}

{(outerHeight !== null) && (outerHeight > 900) && (
        <div className="absolute w-[455px] h-[455px] right-[0px] top-[1200px] blur-[230px]" style={{ backgroundImage: `url("/images/common/bg/layer1.svg")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        </div>
      )}
      {children}
    </div>
  );
};
