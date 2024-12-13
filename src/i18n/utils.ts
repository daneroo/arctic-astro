import { translations } from "./translations";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang === "en" || lang === "fr") return lang;
  return "en";
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof typeof translations.en) {
    return translations[lang][key];
  };
}
