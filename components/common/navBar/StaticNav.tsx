
import Image from "next/image";
import Button from "../button";
import LinkBox from "./LinkBox";
import LanguageSelector from "../languageSelector";
import LogoBox from "./LogoBox";
import { xBetween, xCenter, xStart } from "@/utils/styles";
const StaticNav = () => {


    return (
        <div className={`relative w-[100%] h-[80px] bg-black ${xCenter}`} style={{ borderBottom: "7px solid #034441" }}>
            <div className={`w-[90%] max-w-[1280px] h-[70px] px-4 bg-black ${xBetween} transition-all duration-500`}>
                <div className={`${xBetween} w-[530px]`}>
                    <div className={`w-[180px] h-[60px] ${xStart}`}>
                        <LogoBox time={5500} />
                    </div>

                    <LinkBox />
                </div>

                <div className={`${xStart}`}>
                    <LanguageSelector />
                    <Button text={"Get Started"} className="w-auto h-[55px] rounded-[8px]" >
                        <Image src="/home/signupArrow.svg" width="28" height="28" alt="sign up" className="ml-2" />
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default StaticNav;
