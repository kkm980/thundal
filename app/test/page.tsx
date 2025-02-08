"use client";
import { FixedNav, StaticNav } from "@/components/common/navBar";
import AvatarContainer from "@/components/home/avatarContainer";
import HeroContainer from "@/components/home/heroContainer";
import MarqueContainer from "@/components/home/marqueContainer";
import { RenderBox } from "@/components/home/renderBox";
import TestimonialContainer from "@/components/home/testimonialContainer";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { dmSans } from "@/utils/font";
import { col, responsiveBoxClass, xBetween, xStart } from "@/utils/styles";
import React, { useMemo } from "react";

export default function () {
    const memoizedFixedNav = useMemo(() => <FixedNav />, []);
    const memoizedStaticNav = useMemo(() => <StaticNav />, []);
    const memoizedHeroContainer = useMemo(() => <HeroContainer />, []);
    const memoizedAvatarContainer = useMemo(() => <AvatarContainer />, []);
    const memoizedMarqueContainer = useMemo(() => <MarqueContainer />, []);
    const memoizedFirstTestimonialContainer = useMemo(() => <TestimonialContainer index={0} />, []);
    return (
        <>
            <div className={`${dmSans.className} w-full overflow-x-hidden bg-homeBg relative`}>
                <div className={`bg-transparent relative ${xStart} ${col} w-full px-[30px]`}>
                    {memoizedFixedNav}
                    <HeroParallax products={products} />
                    <RenderBox className={`relative bg-primary ${responsiveBoxClass} mt-[30px] ${xStart} ${col}`}>
                        {memoizedStaticNav}
                        <div className={`w-[80%] max-w-[1280px] ${xBetween} mt-4`}>
                            {memoizedHeroContainer}
                            {memoizedAvatarContainer}
                        </div>
                        {memoizedMarqueContainer}
                        {memoizedFirstTestimonialContainer}

                    </RenderBox>
                </div>
            </div>
        </>
    )

}
export const products = [
    {
        title: "Moonbeam",
        link: "https://gomoonbeam.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
        title: "Cursor",
        link: "https://cursor.so",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
        title: "Rogue",
        link: "https://userogue.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },

    {
        title: "Editorially",
        link: "https://editorially.org",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
        title: "Editrix AI",
        link: "https://editrix.ai",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
        title: "Pixel Perfect",
        link: "https://app.pixelperfect.quest",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },

    {
        title: "Algochurn",
        link: "https://algochurn.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
        title: "Aceternity UI",
        link: "https://ui.aceternity.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
        title: "Tailwind Master Kit",
        link: "https://tailwindmasterkit.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
        title: "SmartBridge",
        link: "https://smartbridgetech.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
        title: "Renderwork Studio",
        link: "https://renderwork.studio",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
        title: "Creme Digital",
        link: "https://cremedigital.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
        title: "Golden Bells Academy",
        link: "https://goldenbellsacademy.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
        title: "Invoker Labs",
        link: "https://invoker.lol",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
        title: "E Free Invoice",
        link: "https://efreeinvoice.com",
        thumbnail:
            "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
];
