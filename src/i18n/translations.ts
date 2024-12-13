export const translations = {
  en: {
    title: "Cambridge Bay Research",
    searchPlaceholder: "⌘K Search",
    searchInputPlaceholder: "Search places...",
    location: "Location",
    description: "A collection of Arctic research locations and projects",
  },
  fr: {
    title: "Recherche à Cambridge Bay",
    searchPlaceholder: "⌘K Rechercher",
    searchInputPlaceholder: "Rechercher des lieux...",
    location: "Emplacement",
    description:
      "Une collection de sites et projets de recherche dans l'Arctique",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
