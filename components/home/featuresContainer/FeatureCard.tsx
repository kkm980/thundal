"use client";

import { RenderTranslatedText } from "@/components/common/translateText";
import airdropCardSetting from "@/constants/airdropCardSetting";
import { xBetween } from "@/utils/styles";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const FeatureCard = ({ index }: { index: number }) => {
    return (

        <div className="w-[270px] min-h-[350px] p-[16px] pt-[16px] rounded-[12px] half-border">
            <div className="mb-[16px]">
            
        <Image src={`/home/featureSection/${index}.svg`} width={32} height={32} alt="icon" />

                
            </div>

            <div className="mb-[16px] text-[20px] text-sky">
                <RenderTranslatedText componentArray={["home", "descriptionCards", `${index}`, "title"]} />
            </div>

            <div className="mb-[16px] text-punchText">
                <RenderTranslatedText componentArray={["home", "descriptionCards", `${index}`, "subText"]} />
            </div>
        </div>
    );
};

const FeatureCardContainer = () => {
    const airdropCardData = Array.from({ length: 4 }).map((_, i) => (
        <FeatureCard key={i} index={i} />
    ));

    return (
      <div className="w-[100%] max-w-[1000px] h-auto mt-[60px]">
        <Carousel
            responsive={airdropCardSetting}
            swipeable={true}
  draggable={true}
  showDots={true}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style hidden"
  itemClass=""
        >
            {airdropCardData}
        </Carousel>
      </div>
        
    );
};

export default FeatureCardContainer;
