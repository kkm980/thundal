import { RenderTranslatedText } from "@/components/common/translateText"

const TitleContainer = () => {
    return (
        <div className="text-riverSide">
        <div className="text-mainTitle font-bold leading-[50px] mb-8">
          <RenderTranslatedText componentArray={["home","descriptionTitle"]}/>
        </div>

        <div className="text-punchTitle font-normal">
          <span className="text-darkCyan mr-1 text-[20px]">
            <RenderTranslatedText componentArray={["home","descriptionSubText"]} splitIndex={[0,1]}/>
          </span>
          <span className="mr-1 text-white">
            <RenderTranslatedText componentArray={["home","descriptionSubText"]} splitIndex={[1,14]}/>
          </span>

          <span className="text-darkCyan text-[20px] mr-1">
            <RenderTranslatedText componentArray={["home","descriptionSubText"]} splitIndex={[14,16]}/>
          </span>

          <span className="mr-1 text-white">
            <RenderTranslatedText componentArray={["home","descriptionSubText"]} splitIndex={[16,17]}/>
          </span>

          <span className="text-darkCyan text-[20px] mr-1">
            <RenderTranslatedText componentArray={["home","descriptionSubText"]} splitIndex={[17,18]}/>
          </span>

          <span className="mr-1">
            <RenderTranslatedText componentArray={["home","descriptionSubText"]} splitIndex={[18]}/>
          </span>
        </div>
        </div>
    )
}

export default TitleContainer;