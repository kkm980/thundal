import {RenderTranslatedText} from "@/components/common/translateText";

const HeroText = () =>{
    return (
    <>
      <div className={`w-[650px] text-mainTitle font-bold`} style={{ lineHeight: "102%" }}>
        <span style={{
          background: "linear-gradient(270deg, #AAD9D1, #017373)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        >
          <RenderTranslatedText componentArray={["home","heroTitle"]} splitIndex={[0,1]}/>
        </span>
        <span style={{
          color: "#AAD9D1",
          marginLeft: "10px"
        }}
        >
          <RenderTranslatedText componentArray={["home","heroTitle"]} splitIndex={[1,2]}/>
        </span>
        <span style={{
          color: "white",
          marginLeft: "10px"
        }}
        >
          <RenderTranslatedText componentArray={["home","heroTitle"]} splitIndex={[2,3]}/>
        </span>
      </div>
      <div className={`w-[650px] text-mainTitle font-bold`} style={{ lineHeight: "102%" }}>
        <span style={{
          color: "white",
        }}
        >
          <RenderTranslatedText componentArray={["home","heroTitle"]} splitIndex={[3,4]}/>
        </span>
        <span style={{
          background: "linear-gradient(270deg, #AAD9D1, #017373)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginLeft: "10px"
        }}
        >
          <RenderTranslatedText componentArray={["home","heroTitle"]} splitIndex={[4,5]}/>
        </span>
        <span style={{
          color: "#AAD9D1",
          marginLeft: "10px"
        }}
        >
          <RenderTranslatedText componentArray={["home","heroTitle"]} splitIndex={[5]}/>
        </span>
      </div>
      <div className={`w-[650px] text-mainTitle font-bold`} style={{ lineHeight: "102%" }}>
      <span style={{
          background: "linear-gradient(270deg, #AAD9D1, #017373)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        >
          <RenderTranslatedText componentArray={["home","heroSubText"]} splitIndex={[0,1]}/>
        </span>
        <span style={{
          color: "#AAD9D1",
          marginLeft: "10px"
        }}
        >
          <RenderTranslatedText componentArray={["home","heroSubText"]} splitIndex={[1,2]}/>
        </span>
        <span style={{
          color: "#AAD9D1",
          marginLeft: "10px"
        }}
        >
        <RenderTranslatedText componentArray={["home","heroSubText"]} splitIndex={[2,3]}/>
        </span>
      </div>
      <div className={`w-[650px] text-mainTitle font-bold`} style={{ lineHeight: "102%" }}>
        <span style={{
          background: "linear-gradient(0deg, #017373, #034441)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        >
          <RenderTranslatedText componentArray={["home","heroSubText"]} splitIndex={[3,4]}/>
        </span>
        <span style={{
          background: "linear-gradient(270deg, #AAD9D1, #017373)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginLeft: "10px",
        }}
        >
          {/* {heroSubText.slice(heroSubText.length-1)} */}
          <RenderTranslatedText componentArray={["home","heroSubText"]} splitIndex={[4]}/>
        </span>
      </div>
      <div className={`text-punchText text-titleDesc w-[480px] mt-4`}>
        <RenderTranslatedText componentArray={["home","heroPunch"]}/>
      </div>
    </>
    )
}

export default HeroText;