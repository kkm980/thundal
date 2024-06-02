
import Image from "next/image";
import TranslateText from "@/components/common/translateText";

const TestimonialContainer = ({index}:{index:number}): JSX.Element => {

    return (
        <div className="relative mt-[80px] w-[475px] text-center text-bold text-[24px] text-white leading-[140%]">
            <div>
                <TranslateText componentArray={["home","testimonials",`${index}`, "text"]}/>
            </div>
            <Image src="/home/testimonial/quote.svg" width={38} height={25} alt="quote" className="absolute -left-6 -top-4" />
            <div className="mt-4 flex justify-center items-center font-regular text-[16px]">
                <div className="mr-[8px]">
                    <TranslateText componentArray={["home","testimonials",`${index}`, "author"]}/>
                </div>
                <div className="ml-[8px]">
                  <TranslateText componentArray={["home","testimonials",`${index}`, "designation"]}/>
                </div>
            </div>
        </div>

    )
}

export default TestimonialContainer