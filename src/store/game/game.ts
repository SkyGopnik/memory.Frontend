import { create } from "zustand";

import type { GameStore } from "./types";

export const useGameStore = create<GameStore>((set) => ({
  setOptions: (options) =>
    set({
      options
    }),
  setResults: (results) =>
    set({
      results
    })
}));
