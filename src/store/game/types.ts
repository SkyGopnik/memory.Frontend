export type GameCards = 6 | 8 | 10 | 12 | 14 | 18 | 24;

export type GameOptions = {
  timer: number;
  limit?: number;
  cards: GameCards;
};

export type GameResults = {
  score: number;
  timer: number;
  limit?: number;
};

export type GameStore = {
  results?: GameResults;
  options?: GameOptions;
  setResults: (results: GameResults) => void;
  setOptions: (options: GameOptions) => void;
};
