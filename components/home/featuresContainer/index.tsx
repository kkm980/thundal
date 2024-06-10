import CenterBox from "@/components/common/centerBox"
import TitleContainer from "./TitleContainer"
import FeatureCardContainer from "./FeatureCard";
import { CardStackDemo } from "./StackCard";

const FeaturesContainer = () => {
  return (
    <>
      <CenterBox>
        <TitleContainer />
      </CenterBox>
      <FeatureCardContainer />
      < CardStackDemo />
    </>

  )
}

export default FeaturesContainer;
