import { create } from "zustand";

const useStoreInApp = create((set) => ({
  theme:
    typeof window !== "undefined"
      ? JSON.parse(window.localStorage.getItem("theme")) || false
      : false,

  setTheme: () =>
    set((state) => {
      const newTheme = !state.theme;
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", JSON.stringify(newTheme));
      }
      return { theme: newTheme };
    }),
}));

export default useStoreInApp;
