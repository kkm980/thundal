"use client"

import React, { useState, useEffect } from 'react';

/**
 * BlinkAvatar Component
 * 
 * This component renders an avatar that blinks with different images.
 * 
 * @param {string} className - Additional CSS class for styling the BlinkAvatar.
 * @returns {JSX.Element} The BlinkAvatar component.
 */
const BlinkAvatar: React.FC<{ className?: string }> = ({ className }): JSX.Element => {
    const [imgIndex, setImgIndex] = useState<number | null>(null);
    const imgArr: string[] = [
        "/home/blinkIcons/aamir.jpg",
        "/home/blinkIcons/aayushman.jpg",
        "/home/blinkIcons/aishwarya.jpg",
        "/home/blinkIcons/ajith.jpg",
        "/home/blinkIcons/akshay.jpg",
        "/home/blinkIcons/amit.jpg",
        "/home/blinkIcons/anderson.jpg",
        "/home/blinkIcons/arjun.jpg",
        "/home/blinkIcons/deepika.jpg",
        "/home/blinkIcons/hrithik.jpg",
        "/home/blinkIcons/jack.jpg",
        "/home/blinkIcons/jahnvi.jpg",
        "/home/blinkIcons/john.jpg",
        "/home/blinkIcons/kangana.jpg",
        "/home/blinkIcons/kristen.jpg",
        "/home/blinkIcons/nawaj.jpg",
        "/home/blinkIcons/pankaj.jpg",
        "/home/blinkIcons/rajani.jpg",
        "/home/blinkIcons/ramcharan.jpg",
        "/home/blinkIcons/ranbeer.jpg",
        "/home/blinkIcons/ranbir.jpg",
        "/home/blinkIcons/salman.jpg",
        "/home/blinkIcons/shahid.jpg",
        "/home/blinkIcons/srk.jpg",
        "/home/blinkIcons/tamanna.jpg",
        "/home/blinkIcons/unknown.jpg",
        "/home/blinkIcons/varun.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex(prevIndex => {
                // Generate a random number between 0 and 25 (inclusive)
                const newIndex = Math.floor(Math.random() * 26);
                // Ensure the new index is different from the previous one
                return newIndex !== prevIndex ? newIndex : (newIndex + 1) % 26;
            });
        }, Math.random() * 500 + 400); // Random blinking interval between 400 and 900 milliseconds
        return () => clearInterval(interval); // Cleanup function to clear the interval
    }, []); // Run once on component mount to start the blinking effect

    return (
        <div className={`w-[80px] h-[80px] rounded-md ${className}`} style={{
            backgroundImage: `url(${imgIndex !== null ? imgArr[imgIndex] : ''})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }} />
    );
};

export default BlinkAvatar;
