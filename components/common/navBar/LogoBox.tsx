"use client";
import Logo from "./Logo";
import "./style.css";
import { useEffect, useState } from "react";
import ResponsiveLogo from "./ResponsiveLogo";

const LogoBox = ({time}:{time:number}) => {
    const [nLogoBoxVisible, setNLogoVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setNLogoVisible(true);
        }, time); // 5.5 seconds delay

        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, []);

    return (
        <>
            <Logo className="logo-box__logo shrinkup" />
            <ResponsiveLogo nLogoBoxVisible={nLogoBoxVisible}/>
        </>
        
    )
}

export default LogoBox