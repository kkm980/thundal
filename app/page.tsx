import { useMemo } from 'react';
import { FixedNav } from "@/components/common/navBar/index";
import { StaticNav } from "@/components/common/navBar/index";
import HeroContainer from "@/components/home/heroContainer";
import MarqueContainer from "@/components/home/marqueContainer";
import AvatarContainer from "@/components/home/avatarContainer";
import { RenderBox } from "@/components/home/renderBox";
import { dmSans } from "@/utils/font";
import { col, responsiveBoxClass, xBetween, xStart } from "@/utils/styles";
import TestimonialContainer from "@/components/home/testimonialContainer";
import FeaturesContainer from '@/components/home/featuresContainer';
import PlayerContainer from '@/components/home/playerContainer';
import FAQContainer from '@/components/home/faqComponent';
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
  const memoizedFirstTestimonialContainer = useMemo(() => <TestimonialContainer index={0} />, []);
  const memoizedSecondTestimonialContainer = useMemo(() => <TestimonialContainer index={0} />, []);
  const memoizedThirdTestimonialContainer = useMemo(() => <TestimonialContainer index={0} />, []);
  const memoizedFeaturesContainer = useMemo(() => <FeaturesContainer />, []);
  const memoizedPlayerContainer = useMemo(() => <PlayerContainer />, []);
  const memoisedFAQContainer = useMemo(() => <FAQContainer />, []);
  return (
    <div className={`${dmSans.className} w-full h-[800vh] overflow-x-hidden bg-homeBg relative`}>
      <div className={`bg-transparent relative ${xStart} ${col} w-full px-[30px]`}>
        {memoizedFixedNav}
        <RenderBox className={`relative bg-primary ${responsiveBoxClass} mt-[30px] ${xStart} ${col}`}>
          {memoizedStaticNav}
          <div className={`w-[80%] max-w-[1280px] ${xBetween} mt-4`}>
            {memoizedHeroContainer}
            {memoizedAvatarContainer}
          </div>
          {memoizedMarqueContainer}
          {memoizedFirstTestimonialContainer}
          {memoizedPlayerContainer}
          {memoizedSecondTestimonialContainer}
          {memoizedFeaturesContainer}
          {memoizedThirdTestimonialContainer}
          {memoisedFAQContainer}
        </RenderBox>
      </div>
    </div>
  );
}
