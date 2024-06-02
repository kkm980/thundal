import Image from "next/image";
import Button from "../button";
import LinkBox from "./LinkBox";
import Logo from "./Logo";
import LanguageSelector from "../languageSelector";
import "./style.css";
const StaticNav = () => {

    return (
        <div className="relative w-[100%] h-[80px] bg-black flex justify-center items-center" style={{borderBottom:"7px solid #034441"}}>
            <div className={`w-[90%] max-w-[1280px] h-[70px] px-4 bg-black flex justify-between items-center transition-all duration-500`}>
              <div className="flex justify-between items-center w-[530px]">
                <div className="group w-[180px] h-[60px] flex justify-start items-center">
                  <Logo className="logo-box__logo shrinkup"/>  
                  <Logo className="hidden group-hover:block"/>
                </div>
                
                <LinkBox />
              </div>
              
              <div className="flex items-center">
                <LanguageSelector />
              <Button text={"Get Started"} className="w-auto h-[55px] rounded-[8px]" children={<Image src="/home/signupArrow.svg" width="28" height="28" alt="sign up" className="ml-2" />} />
              </div>
            </div>
        </div>
    );
};

export default StaticNav;
