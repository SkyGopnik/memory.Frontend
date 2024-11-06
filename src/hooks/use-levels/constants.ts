import {
  ImageNumberEight,
  ImageNumberFive,
  ImageNumberFour,
  ImageNumberNine,
  ImageNumberOne,
  ImageNumberSeven,
  ImageNumberSix,
  ImageNumberThree,
  ImageNumberTwo
} from "assets/level-numbers";

import type { LevelItem } from "./types";

export const LEVELS: Array<LevelItem> = [
  {
    label: "Новичок",
    image: ImageNumberOne,
    requiredScore: 0,
    gameOptions: {
      timer: 30,
      cards: 6
    }
  },
  {
    label: "Ученик",
    image: ImageNumberTwo,
    requiredScore: 10,
    gameOptions: {
      timer: 30,
      cards: 8
    }
  },
  {
    label: "Любитель",
    image: ImageNumberThree,
    requiredScore: 100,
    gameOptions: {
      timer: 45,
      cards: 10
    }
  },
  {
    label: "Мастер",
    image: ImageNumberFour,
    requiredScore: 250,
    gameOptions: {
      timer: 60,
      cards: 12
    }
  },
  {
    label: "Профессионал",
    image: ImageNumberFive,
    requiredScore: 500,
    gameOptions: {
      timer: 75,
      limit: 35,
      cards: 14
    }
  },
  {
    label: "Рыцарь",
    image: ImageNumberSix,
    requiredScore: 1000,
    gameOptions: {
      timer: 60,
      limit: 30,
      cards: 14
    }
  },
  {
    label: "Завоеватель",
    image: ImageNumberSeven,
    requiredScore: 2500,
    gameOptions: {
      timer: 75,
      limit: 25,
      cards: 18
    }
  },
  {
    label: "Повелитель",
    image: ImageNumberEight,
    requiredScore: 5000,
    gameOptions: {
      timer: 80,
      limit: 25,
      cards: 18
    }
  },
  {
    label: "Легенда",
    image: ImageNumberNine,
    requiredScore: 10000,
    gameOptions: {
      timer: 90,
      limit: 30,
      cards: 24
    }
  }
];
