import textCollection from "@/public/translations"


/**
 * Translates a given set of keys to a specific language using a text collection.
 *
 * The function takes a language code and a variable number of keys. It navigates
 * through a nested object structure (textCollection) based on the provided keys 
 * to retrieve the corresponding translation in the selected language.
 *
 * @param {string} selectedLang - The language code to translate to (e.g., 'en', 'fr').
 * @param {...string} keys - A variable number of keys to navigate through the text collection.
 * @returns {string | { [key: string]: string } | undefined} - Returns the translated text if found.
 * - If all keys are found, the corresponding string or nested object is returned.
 * - If any key is not found, `undefined` is returned.
 *
 * @example
 * // Assuming textCollection = { en: { greeting: { morning: "Good morning" } } }
 * translate('en', 'greeting', 'morning'); // Returns: "Good morning"
 * translate('en', 'greeting', 'evening'); // Returns: undefined
 *
 * @example
 * // Assuming textCollection = { fr: { greeting: { morning: "Bonjour" } } }
 * translate('fr', 'greeting', 'morning'); // Returns: "Bonjour"
 * translate('fr', 'greeting'); // Returns: { morning: "Bonjour" }
 */
const translate = (selectedLang: string, ...keys: string[]): string | { [key: string]: string } | undefined => {
    let result: any = textCollection[selectedLang];

    for (const key of keys) {
        if (result && result.hasOwnProperty(key)) {
            result = result[key];
        } else {
            return undefined;
        }
    }

    return result;
};

export default translate;
