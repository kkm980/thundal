import CenterBox from "@/components/common/centerBox"
import TitleContainer from "./TitleContainer"
import FeatureCardContainer from "./FeatureCard";

const FeaturesContainer = () => {
    return (
        <>
          <CenterBox children={<TitleContainer/>} />
          <FeatureCardContainer />
        </>
        
    )
}

export default FeaturesContainer;