// Define the type for the language details
type Language = {
  title: string;
  flagIcon: string;
};

// Define the type for the locales object
type Locales = {
  [key: string]: Language;
};

// Define the locales object with type Locales
export const locales: Locales = {
  ar: {
    title: "Arabic",
    flagIcon: "/images/common/flags/ar.svg",
  },
  bg: {
    title: "Bulgarian",
    flagIcon: "/images/common/flags/bg.svg",
  },
  bj: {
    title: "Bhojpuri",
    flagIcon: "/images/common/flags/in.svg",
  },
  bl: {
    title: "Bengali",
    flagIcon: "/images/common/flags/in.svg",
  },
  zh_cn: {
    title: "Chinese (simplified)",
    flagIcon: "/images/common/flags/cn.svg",
  },
  zh_tw: {
    title: "Chinese (traditional)",
    flagIcon: "/images/common/flags/cn.svg",
  },
  cz: {
    title: "Czech",
    flagIcon: "/images/common/flags/cz.svg",
  },
  de: {
    title: "German",
    flagIcon: "/images/common/flags/de.svg",
  },
  en: {
    title: "English",
    flagIcon: "/images/common/flags/en.svg",
  },
  es: {
    title: "Spanish",
    flagIcon: "/images/common/flags/es.svg",
  },
  fr: {
    title: "French",
    flagIcon: "/images/common/flags/fr.svg",
  },
  gj: {
    title: "Gujarati",
    flagIcon: "/images/common/flags/in.svg",
  },
  hn: {
    title: "Hindi",
    flagIcon: "/images/common/flags/in.svg",
  },
  hu: {
    title: "Hungarian",
    flagIcon: "/images/common/flags/hu.svg",
  },
  id: {
    title: "Indonesian",
    flagIcon: "/images/common/flags/id.svg",
  },
  it: {
    title: "Italian",
    flagIcon: "/images/common/flags/it.svg",
  },
  jp: {
    title: "Japanese",
    flagIcon: "/images/common/flags/jp.svg",
  },
  kd: {
    title: "Kannad",
    flagIcon: "/images/common/flags/in.svg",
  },
  kr: {
    title: "Korean",
    flagIcon: "/images/common/flags/kr.svg",
  },
  mr: {
    title: "Marathi",
    flagIcon: "/images/common/flags/in.svg",
  },
  mt: {
    title: "Maithili",
    flagIcon: "/images/common/flags/in.svg",
  },
  my: {
    title: "Malayalam",
    flagIcon: "/images/common/flags/in.svg",
  },
  nl: {
    title: "Dutch",
    flagIcon: "/images/common/flags/nl.svg",
  },
  od: {
    title: "Odiya",
    flagIcon: "/images/common/flags/in.svg",
  },
  pj: {
    title: "Punjabi",
    flagIcon: "/images/common/flags/in.svg",
  },
  pl: {
    title: "Polish",
    flagIcon: "/images/common/flags/pl.svg",
  },
  ps: {
    title: "Pashto",
    flagIcon: "/images/common/flags/in.svg",
  },
  pt: {
    title: "Portuguese",
    flagIcon: "/images/common/flags/pt.svg",
  },
  rj: {
    title: "Rajasthani",
    flagIcon: "/images/common/flags/in.svg",
  },
  ro: {
    title: "Romanian",
    flagIcon: "/images/common/flags/ro.svg",
  },
  ru: {
    title: "Russian",
    flagIcon: "/images/common/flags/ru.svg",
  },
  sk: {
    title: "Slovak",
    flagIcon: "/images/common/flags/sk.svg",
  },
  sn: {
    title: "Sanskrit",
    flagIcon: "/images/common/flags/in.svg",
  },
  sw: {
    title: "Swedish",
    flagIcon: "/images/common/flags/sw.svg",
  },
  th: {
    title: "Thai",
    flagIcon: "/images/common/flags/th.svg",
  },
  tl: {
    title: "Tamil",
    flagIcon: "/images/common/flags/in.svg",
  },
  tr: {
    title: "Turkish",
    flagIcon: "/images/common/flags/tr.svg",
  },
  tu: {
    title: "Telagu",
    flagIcon: "/images/common/flags/in.svg",
  },
  ud: {
    title: "Urdu",
    flagIcon: "/images/common/flags/in.svg",
  },
  vn: {
    title: "Vietnamese",
    flagIcon: "/images/common/flags/vn.svg",
  }
};
