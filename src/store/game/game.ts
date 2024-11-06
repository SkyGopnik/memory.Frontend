import { create } from "zustand";

import type { GameStore } from "./types";

export const useGameStore = create<GameStore>((set) => ({
  setOptions: (options) =>
    set({
      options
    }),
  updateOptions: (options) =>
    set((state) => ({
      options: {
        ...state.options!,
        ...options
      }
    })),
  setResults: (results) =>
    set({
      results
    })
}));
