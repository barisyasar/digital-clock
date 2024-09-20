// Theme Store
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      isDarkTheme: false,
      toggleTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
    }),
    {
      name: "theme-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useThemeStore;
