"use client";
import React, { useState } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { col, xBetween, xCenter } from "@/utils/styles";

export function AnimatedPinDemo() {
    const pinCards = [
        {
            title: "ABC",
            subTitle: "DEF",
            nextText: "GHI",
            renderMedia: "JKL"
        },
        {
            title: "123",
            subTitle: "456",
            nextText: "789",
            renderMedia: "1011"
        },
        {
            title: "abc",
            subTitle: "def",
            nextText: "ghi",
            renderMedia: "jkl"
        },
        {
            title: "---",
            subTitle: "///",
            nextText: "===",
            renderMedia: "..."
        },
    ]
    const [currInd, setCurrInd] = useState(0);
    return (
        <div className={`mt-[20px] h-[440px] relative w-auto ${xCenter}`}>
            <PinContainer
                title={pinCards[currInd].nextText}
                onClick={() => {
                    setCurrInd((prev) => (prev + 1) % pinCards.length);
                }}
                className={`${xBetween}`}
            >
                <div className={`basis-full ${col} p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]`}>
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        {pinCards[currInd].title}
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">
                            {pinCards[currInd].subTitle}
                        </span>
                    </div>
                    <div className="flex flex-1 w-[300px] h-[300px] rounded-lg mt-4 bg-gradient-to-br from-sky via-darkCyan to-blue-500" />
                </div>
                <iframe
                    // height={"auto"}
                    // width={300}
                    src={`https://player.vimeo.com/video/954740611?share=copy`}
                    
                    title="description"
                    className="bg-sky border border-darkCyan"
                    style={{ padding: "8px", borderRadius:"8px"}}
                />
            </PinContainer>
        </div>
    );
}
