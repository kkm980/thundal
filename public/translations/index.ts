import { bj } from "./bj";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";
import { sn } from "./sn";
import { pj } from "./pj";
import { mt } from "./mt";
import { my } from "./my";
import { tu } from "./tu";
import { bl } from "./bl";
import { gj } from "./gj";
import { hn } from "./hn";
import { mr } from "./mr";
import { od } from "./od";
import { rj } from "./rj";
import { tl } from "./tl";
import { kd } from "./kd";

type TextCollection = {
  [language: string]: {
    [page: string]: any;
  };
};

/**
 * Define a collection of text translations for different languages and pages.
 * Each language is represented by an object containing translations for different pages.
 * The textCollection object maps language codes to their respective translation objects.
 */

const textCollection: TextCollection = {
  ar: { ...en },
  bg: { ...en },
  bl: { ...bl },
  bj: { ...bj },
  cz: { ...en },
  de: { ...en },
  en: { ...en },
  es: { ...es },
  fr: { ...en },
  hu: { ...en },
  id: { ...en },
  it: { ...en },
  jp: { ...en },
  kd: {...kd},
  kr: { ...en },
  nl: { ...en },
  pl: { ...en },
  gj: { ...gj },
  hn: { ...hn },
  mr: { ...mr },
  mt: { ...mt },
  my: { ...my },
  od: { ...od },
  pj: { ...pj },
  pt: { ...pt },
  ro: { ...en },
  rj: { ...rj },
  ru: { ...en },
  sk: { ...en },
  sn: { ...sn },
  sw: { ...en },
  th: { ...en },
  tr: { ...en },
  vn: { ...en },
  zh_cn: { ...en },
  zh_tw: { ...en },
  tl: { ...tl },
  tu: { ...tu },
};

export default textCollection;