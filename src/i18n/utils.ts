import { translations } from "./translations";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as keyof typeof translations;
  return "en";
}

export function useTranslations(lang: keyof typeof translations) {
  return function t(key: keyof typeof translations.en) {
    return translations[lang][key];
  };
}
