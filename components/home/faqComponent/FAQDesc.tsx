import { RenderTranslatedText } from "@/components/common/translateText";

const FAQDesc = () => {
    return (
        <div className="w-[100%] max-w-[800px] text-center">
          <div className="text-mainTitle text-riverSide font-bold leading-[50px] mb-8">
            <RenderTranslatedText componentArray={["home", "faq","title"]}/>
          </div>
          <div className="text-regular font-regular text-white">
            <RenderTranslatedText componentArray={["home", "faq", "subTitle"]}/>
          </div>
        </div>
    )
}

export default FAQDesc;