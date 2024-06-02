import {FixedNav} from "@/components/common/navBar";
import {StaticNav} from "@/components/common/navBar";
import HeroContainer from "@/components/home/heroContainer";
import MarqueContainer from "@/components/home/marqueContainer";
import AvatarContainer from "@/components/home/avatarContainer";
import { RenderBox } from "@/components/home/renderBox";
import { dmSans } from "@/utils/font";
import {responsiveBoxClass} from "@/utils/styles";

export default function Home() {
  return (
    <div className="w-full h-[300vh] overflow-x-hidden bg-homeBg relative">
      
      <div className="relative flex justify-center items-start w-full">
        <FixedNav/>
        <RenderBox className={`bg-primary ${responsiveBoxClass} h-[800px] mt-[60px] flex flex-col justify-start items-center h-[100vh]`}>
          <StaticNav/>
          <div className={`w-[80%] max-w-[1280px] ${dmSans.className} flex justify-between items-center mt-4 text-[47px] font-bold`}>
            <HeroContainer />
            <AvatarContainer />
          </div>
          
          <MarqueContainer/>
        </RenderBox>
      </div>

    </div>
  );
}
