import { create, type StoreApi, type UseBoundStore } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type LanguageCode } from "../types/Language";

// Interface for the language state
export interface LanguageState {
  selectedLanguage: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
}

// Create the Zustand store
const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguage: "en",
      setLanguage: (code: LanguageCode) => {
        set({ selectedLanguage: code });
      },
    }),
    {
      name: "selected-language-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

// Class wrapper for managing selected language
export class LanguageManager {
  private static instance: LanguageManager;
  private store: UseBoundStore<StoreApi<LanguageState>>;

  private constructor() {
    this.store = useLanguageStore;
  }

  public static getInstance(): LanguageManager {
    if (!LanguageManager.instance) {
      LanguageManager.instance = new LanguageManager();
    }
    return LanguageManager.instance;
  }

  public useStore(): UseBoundStore<StoreApi<LanguageState>> {
    return this.store;
  }

  public getLanguage(): LanguageCode {
    return this.store.getState().selectedLanguage;
  }

  public setLanguage(code: LanguageCode): void {
    this.store.getState().setLanguage(code);
  }

  public subscribe(callback: (state: LanguageState) => void): () => void {
    return this.store.subscribe(callback);
  }
}

// Export store hook and manager instance
export { useLanguageStore };
export const languageManager = LanguageManager.getInstance();
