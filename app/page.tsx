import { useMemo } from 'react';
import { FixedNav } from "@/components/common/navBar/index";
import { StaticNav } from "@/components/common/navBar/index";
import HeroContainer from "@/components/home/heroContainer";
import MarqueContainer from "@/components/home/marqueContainer";
import AvatarContainer from "@/components/home/avatarContainer";
import { RenderBox } from "@/components/home/renderBox";
import { dmSans } from "@/utils/font";
import { responsiveBoxClass } from "@/utils/styles";
import TestimonialContainer from "@/components/home/testimonialContainer";

/**
 * React component for the homepage.
 * Sets up the main structure of the homepage with various sub-components.
 * Manages state changes for language selection using Redux.
 */
export default function Home() {
  const memoizedFixedNav = useMemo(() => <FixedNav />, []);
  const memoizedStaticNav = useMemo(() => <StaticNav />, []);
  const memoizedHeroContainer = useMemo(() => <HeroContainer />, []);
  const memoizedAvatarContainer = useMemo(() => <AvatarContainer />, []);
  const memoizedMarqueContainer = useMemo(() => <MarqueContainer />, []);
  const memoizedTestimonialContainer = useMemo(() => <TestimonialContainer index={0} />, []);

  return (
    <div className={`${dmSans.className} w-full h-[300vh] overflow-x-hidden bg-homeBg relative`}>
      <div className="bg-transparent relative flex flex-col justify-center items-center w-full px-[30px]">
        {memoizedFixedNav}
        <RenderBox className={`relative bg-primary ${responsiveBoxClass} h-[800px] mt-[30px] flex flex-col justify-start items-center h-[100vh]`}>
          {memoizedStaticNav}
          <div className={`w-[80%] max-w-[1280px] flex justify-between items-center mt-4 text-[47px] font-bold`}>
            {memoizedHeroContainer}
            {memoizedAvatarContainer}
          </div>
          {memoizedMarqueContainer}
          {memoizedTestimonialContainer}
        </RenderBox>
      </div>
    </div>
  );
}
