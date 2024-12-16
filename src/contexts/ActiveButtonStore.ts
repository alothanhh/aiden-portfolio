import { createStore } from "zustand";

interface ButtonStoreState {
  activeButton: string;
  setActiveButton: (label: string) => void;
}

export const useButtonStore = createStore<ButtonStoreState>((set) => ({
  activeButton: "introduction",
  setActiveButton: (activeButton) => set({ activeButton: activeButton }),
}));
