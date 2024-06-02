import Image from "next/image";

type Language = {
    title: string;
    flagIcon: string;
};

type LanguageTuple = [string, Language];

interface LanguageBannerProps {
    languageObj: LanguageTuple;
    changeLang: (language: { [key: string]: Language }) => void;
}

/**
 * LanguageBanner Component
 * 
 * This component displays a language banner with a flag icon and title.
 * When the banner is clicked, it triggers the changeLang function to change the language.
 * 
 * @param {LanguageTuple} languageObj - A tuple containing the language key and language details (title and flag icon).
 * @param {(language: { [key: string]: Language }) => void} changeLang - Function to change the language.
 * 
 * @returns {JSX.Element} The LanguageBanner component.
 */
const LanguageBanner: React.FC<LanguageBannerProps> = ({ languageObj, changeLang }): JSX.Element => (
    <div
        className="group/bottom flex justify-start items-center p-2 px-4 rounded-md"
        onClick={() => changeLang({ [languageObj[0]]: languageObj[1] })}
    >
        <Image
            src={languageObj[1].flagIcon}
            alt="flag"
            width={25}
            height={25}
            className="rounded-full opacity-25 group-hover/bottom:opacity-100"
        />
        <div className="ml-1 text-sky text-[14px]">
            {languageObj[1].title}
        </div>
    </div>
);

export default LanguageBanner;
