
"use client"
import Button from "@/components/common/button";
import {translateTextString} from "@/components/common/translateText";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


/**
 * Function component representing an input container with a text input field and a button.
 * 
 * This component fetches the selected language from the Redux store and renders an input field with a placeholder text and a button with an image.
 * The text for the placeholder and button is translated based on the selected language.
 * 
 * @returns JSX.Element
 */
const InputContainer = (): JSX.Element =>  {
  const [selectedLang, setSelectedLang] = useState("en");
  const selectedLanguageStore = useSelector((state: any) => state?.applicationSlice?.selectedLanguageStore);
  useEffect(()=>{
    setSelectedLang(Object.keys(selectedLanguageStore)[0])
  }, [selectedLanguageStore])
  return (
    <div className="w-[434px] h-[68px] mt-12 rounded-[8px] bg-white flex justify-between items-center text-[16px] text-[black] font-regular">
      <input className="w-[220px] h-auto ml-[24px] text-[black] font-thin text-[16px] placeholder-black outline-none" placeholder={translateTextString(selectedLang, ["home","inboxPlaceholder"], [0])}/>
      <Button text={`${translateTextString(selectedLang, ["home","inputBtn"], [0])}`} className="w-auto h-[55px] rounded-[8px]">
        <Image src="/home/signupArrow.svg" width="24" height="24" alt="sign up" className="ml-2" />
      </Button>
    </div>
    
  )
}

export default InputContainer;