import { create } from "zustand";

const useStoreInApp = create((set) => ({
  theme: false,

  setTheme: () => set((state) => ({ theme: !state.theme })),
}));

export default useStoreInApp;
