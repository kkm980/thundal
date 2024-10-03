"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import "./style.css";

const FAQCard = ({ index, selectedFaqIndex, clickFun }: { index: number, selectedFaqIndex: null | number, clickFun: (num: number) => void }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (index === selectedFaqIndex) {
                contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
            } else {
                contentRef.current.style.maxHeight = '64px';
            }
        }
    }, [index, selectedFaqIndex]);

    return (
        <div 
            className={`w-[100%] max-w-[800px] min-h-[64px] ${selectedFaqIndex === index ? "py-[30px]" : "py-[16px]"} px-[30px] mt-[20px] ${selectedFaqIndex === index ? "bg-[#D8EFD3]" : "bg-transparent"} flex justify-between items-start rounded-[8px] border border-darkCyan cursor-pointer cardContent ${selectedFaqIndex === index ? "expanded" : ""}`}
            onClick={() => clickFun(index)}
            ref={contentRef}
        >
            <div className="w-[100%] max-w-[682px]">
                <div className={`text-[18px] font-semibold ${selectedFaqIndex === index ? "text-black" : "text-white"}`}>
                    What is Thundal?
                </div>
                <div 
                    className={`text-[16px] mt-[6px] text-[#737373] overflow-hidden ${selectedFaqIndex === index ? "block" : "hidden"}`}
                >
                    Getting started with Thundal is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process.
                </div>
            </div>
            <div className="h-[32px] w-[32px] rounded-[8px] border border-darkCyan">
                <Image src="/images/components/home/faq/faqArrRotated.svg" alt="arrow" width={32} height={32} className={`arrow ${selectedFaqIndex === index ? "rotated" : ""}`} />
            </div>
        </div>
    );
};

const FAQCardContainer = (): JSX.Element => {
    const [selectedFaqIndex, setSelectedFaqItem] = useState<null | number>(null);

    const clickFun = (num: number) => {
        setSelectedFaqItem(prevIndex => prevIndex === num ? null : num);
    };

    const AirdropCardData = Array.from({ length: 4 }).map((_, i) => (
        <FAQCard key={i} selectedFaqIndex={selectedFaqIndex} index={i} clickFun={clickFun} />
    ));

    return (
        <div className="faq-card-container">
            {AirdropCardData}
        </div>
    );
};

export default FAQCardContainer;
