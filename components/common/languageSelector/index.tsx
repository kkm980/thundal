"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedLanguageStore } from "@/store/slice/applicationSlice/applicationSlice";
import { locales } from "./languageSelectorConstant";
import LanguageBanner from "./LanguageBanner";
import AutoScroller from "./AutoScroller";
import { xBetween } from "@/utils/styles";

// Define LanguageSelector component

// Assuming these types are already defined in your application slice file
type Language = {
    title: string;
    flagIcon: string;
};

type SelectedLanguageStore = {
    [key: string]: Language;
};

type LanguageTuple = [string, Language];

type ApplicationState = {
    selectedLanguageStore: SelectedLanguageStore;
    selectedPersonStore: string;
};

// Define RootState type
type RootState = {
    applicationSlice: ApplicationState;
};

/**
 * LanguageSelector Component
 * 
 * This component renders a language selector dropdown. It displays the currently selected language's flag and title.
 * When the dropdown is opened, it shows all available languages, allowing the user to select a different language.
 * 
 * @returns {JSX.Element} The LanguageSelector component.
 */
interface LanguageSelectorProps {
    showAutoScroll?: boolean;
  }
  
  const LanguageSelector: React.FC<LanguageSelectorProps> = ({ showAutoScroll = true }: LanguageSelectorProps): JSX.Element => {
    // Use RootState to type the state parameter in useSelector
    const { selectedLanguageStore } = useSelector((state: RootState) => state.applicationSlice);
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const dispatch = useDispatch();
    const containerRef = useRef<HTMLDivElement>(null);

    /**
     * Changes the selected language and updates the store.
     * 
     * @param {SelectedLanguageStore} incoming - The new selected language object.
     */
    const changeLang = useCallback((incoming: SelectedLanguageStore) => {
        dispatch(setSelectedLanguageStore(incoming));
    }, [dispatch]);

    /**
     * Handles click events outside the dropdown to close it.
     * 
     * @param {MouseEvent} event - The mouse event.
     */
    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setDropDownOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div
            ref={containerRef}
            className="group/top relative mr-8 rounded-[25px] z-[99] cursor-pointer"
            onMouseEnter={() => setDropDownOpen(true)}
            onClick={() => setDropDownOpen(prev => !prev)}
        >
            <div className={`${xBetween}`}>
                {showAutoScroll && <div className="absolute top-[15px] ml-[20px] text-punchText text-sky hidden group-hover/top:block">
                    {(Object.values(selectedLanguageStore))[0].title}
                </div>}
                {showAutoScroll && <AutoScroller scrollSpeed={100} className="hidden group-hover/top:block" />}
                <Image
                    src={(Object.values(selectedLanguageStore))[0].flagIcon}
                    alt="flag"
                    width={35}
                    height={35}
                    className="rounded-full opacity-45 group-hover/top:opacity-100"
                />
            </div>
            <div className={`absolute w-[150px] h-[300px] bg-black -right-[20px] top-[65px] overflow-y-scroll z-[99] bg-opacity-60 ${dropDownOpen ? "block" : "hidden"}`}>
                {Object.entries(locales).map((languageObj: LanguageTuple, index: number) => (
                    <LanguageBanner key={index} {...{ languageObj, changeLang }} />
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;

