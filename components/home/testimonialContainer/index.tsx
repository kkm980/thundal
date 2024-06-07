"use client"

import Image from "next/image";
import {RenderTranslatedText} from "@/components/common/translateText";
import { xCenter } from "@/utils/styles";
import CenterBox from "@/components/common/centerBox";

const TestimonialContainer = ({index}:{index:number}): JSX.Element => {
    
    const RenderContent = <div className="">
        <div className={`text-secContent text-riverSide leading-[140%]`}>
            <RenderTranslatedText componentArray={["home","testimonials",`${index}`, "text"]}/>
        </div>
        <Image src="/home/testimonial/quote.svg" width={38} height={25} alt="quote" className="absolute -left-6 -top-4" />
        <div className={`mt-4 ${xCenter} text-punchText text-titleDesc`}>
            <div className="mr-[8px]">
                <RenderTranslatedText componentArray={["home","testimonials",`${index}`, "author"]}/>
            </div>
            <div className="ml-[8px]">
              <RenderTranslatedText componentArray={["home","testimonials",`${index}`, "designation"]}/>
            </div>
        </div>
    </div>
    return (
        <CenterBox children={RenderContent} />
    )
}

export default TestimonialContainer