import FAQCardContainer from "./FAQCard";
import FAQDesc from "./FAQDesc"

const FAQContainer = () => {
    return (
        <div className="w-[100%] max-w-[800px] mt-[150px]">
          <FAQDesc />
        <div className="mt-[80px]">
            <FAQCardContainer />
        </div>
        </div>
        
    )
}

export default FAQContainer;