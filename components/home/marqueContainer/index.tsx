import { FC } from 'react';
import React from "react";
import Image from 'next/image';
import Marquee from "react-fast-marquee";

/**
 * Creates a marquee component that scrolls horizontally at a speed of 120.
 * Displays seven images in a loop, each spaced evenly apart.
 */
/**
 * Renders a horizontally scrolling marquee displaying 7 images in a loop.
 */
const MarqueContainer: FC = (): JSX.Element => (
    <Marquee className={`absolute -bottom-[40px] flex justify-between items-center h-[100px]`} speed={120}>
        {[...Array(7)].map((_, index) => (
            <div key={index} className={`flex justify-between items-center mr-[150px]`}>
                <Image width={150} height={50} alt="marquee" src={`/home/marque/mar${index + 1}.svg`} />
            </div>
        ))}
    </Marquee>
);

export default MarqueContainer;

