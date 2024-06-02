"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import translate from '@/utils/translate';

/**
 * TranslateText Component
 * 
 * This component translates text based on the selected language and renders it.
 * It supports splitting the translated text at specified indices and rendering different components accordingly.
 * 
 * @param {string[]} componentArray - Array of strings representing components to be translated.
 * @param {number[]} splitIndex - Array of indices at which to split the translated text.
 * @returns {JSX.Element | null} The translated text components or null if translation is not available.
 */
const TranslateText: React.FC<{ componentArray?: string[]; splitIndex?: number[]; }> = ({ componentArray, splitIndex }) => {
    const selectedLanguageStore = useSelector((state: any) => state?.applicationSlice?.selectedLanguageStore);
    let text = componentArray ? translate(Object.keys(selectedLanguageStore)[0] || "en", ...componentArray) : undefined;

    // Return null if translation is not available
    if (!text) {
        return null;
    }

    // Render translated text as string
    if (typeof text === 'string') {
        if (splitIndex?.length) {
            // Split text at specified indices if splitIndex is provided
            let splitText = text.split(" ");
            return <>{splitText.slice(splitIndex[0], splitIndex[1] || undefined).join(" ")}</>;
        } else {
            return <>{text}</>;
        }
    }

    // Render translated text as key-value pairs
    return (
        <>
            {Object.entries(text).map(([key, value]) => (
                <span key={key}>{value}</span>
            ))}
        </>
    );
};

export default TranslateText;
