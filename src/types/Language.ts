// Define the language type
export interface Language {
  code: string;
  name: string;
}

// Define supported languages
export type LanguageCode = "ar" | "en" | "es" | "fr";

// Set the supported languages
export const LANGUAGES: Record<LanguageCode, Language> = {
  en: { code: "en", name: "English" },
  ar: { code: "ar", name: "العربية" },
  fr: { code: "fr", name: "Français" },
  es: { code: "es", name: "Español" },
};
