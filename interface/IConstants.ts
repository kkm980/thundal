export interface INavigations {
    id: number;
    routeName: string;
    navName: string;
    navLink: string;
    targetBlank?: boolean;
  }
  
  interface Locale {
    title: string;
    flagIcon: string;
  }
  
  export interface ILocales {
    [key: string]: Locale;
  }
  
  export interface ILogoItem {
    id: number;
    url: string;
    alt: string;
  }
  
  export interface IBannerRedirectUrl {
    bannerSocialMedia: {
      id: number;
      iconLink: string;
      iconSrc?: string;
      iconAlt: string;
    }[];
    getAppPlatform: {
      id: number;
      iconLink: string;
      iconSrc?: string;
      iconAlt: string;
    }[];
  }
  
  export interface IRoadmapItem {
    id: number;
    title: string;
    staking: string;
    roadmapList: {
      title: string;
      pass: boolean;
    }[];
  }
  
  export interface IFAQItem {
    id: number;
    parentName: string;
    childProperties: {
      propertyName: string;
      links: string[];
    }[];
  }
  
  export interface IAirdropFAQItem {
    id: number;
    name: string;
    badge: string;
  }
  