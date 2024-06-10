"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { RenderTranslatedText } from "../common/translateText";

type Card = {
    id: number;
    
};

export const CardStack = ({
    items,
    offset,
    scaleFactor,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const CARD_OFFSET = offset || 10;
    const SCALE_FACTOR = scaleFactor || 0.06;
    const [cards, setCards] = useState<Card[]>(items);
    const [currCardNum, setCurrCardNum] = useState(0);
    const intervalRef = useRef<any>(null);
    useEffect(() => {
        startFlipping();
        return () => clearInterval(intervalRef.current!);
    }, []);

    const handleMouseEnter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };
    const startFlipping = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCards((prevCards: Card[]) => {
                const newArray = [...prevCards]; // create a copy of the array
                newArray.unshift(newArray.pop()!);
                // move the last element to the front
                return newArray;
            });
            setCurrCardNum((prev) => { return prev + 1 });

        }, 500);
    };

    return (
        <div className="absolute" onMouseEnter={() => { handleMouseEnter() }} onMouseLeave={() => { startFlipping() }}>

            {cards.map((card, index) => {
                return (
                    <motion.div
                        key={card.id}
                        className="absolute top-0 -left-[153px] bg-black rounded-3xl p-4 shadow-md border border-neutral-200 dark:border-white/[0.1] shadow-darkCyan dark:shadow-darkCyan flex flex-col justify-between"
                        style={{
                            transformOrigin: "top center",
                        }}
                        animate={{
                            top: index * -CARD_OFFSET,
                            scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                            zIndex: cards.length - index, //  decrease z-index for the cards that are behind
                        }}
                    >
                        <div className="w-[270px] min-h-[350px] p-[16px] pt-[16px] rounded-[12px] cursor-pointer">
                            <div className="z-[99] absolute top-2 left-[15px] bg-black w-[270px] min-h-[350px] p-[16px] pt-[16px] rounded-[12px] half-border cursor-pointer">
                                <div className="mb-[16px]">
                                    <Image src={`/home/featureSection/${currCardNum % 4}.svg`} width={32} height={32} alt="icon" />
                                </div>

                                <div className="mb-[16px] text-[20px] text-sky">
                                    <RenderTranslatedText componentArray={["home", "descriptionCards", `${currCardNum % 4}`, "title"]} />
                                </div>

                                <div className="mb-[16px] text-punchText">
                                    <RenderTranslatedText componentArray={["home", "descriptionCards", `${currCardNum % 4}`, "subText"]} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};
