import { useLanguageStore } from "../utils/language-store";
import { LANGUAGES, type Language, type LanguageCode } from "../types/Language";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LangSelector = () => {
  const { selectedLanguage, setLanguage } = useLanguageStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <div className="flex flex-row gap-2 justify-center items-center text-sm">
      <select
        value={selectedLanguage}
        onChange={(e) => setLanguage(e.target.value as LanguageCode)}
        className="flex flex-col gap-2 justify-center items-center cursor-pointer hover:text-indigo-500"
      >
        {Object.values(LANGUAGES).map((language: Language, _) => (
          <option
            key={language.code}
            value={language.code}
            className="bg-indigo-600 text-neutral-100/80"
          >
            {language.name}
          </option>
        ))}
      </select>
      <div></div>
    </div>
  );
};

export default LangSelector;
