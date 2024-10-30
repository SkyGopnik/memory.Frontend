import type { LevelProps } from "./_components/level/types";

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
} from "../../assets/level-numbers";

export const LEVELS: LevelProps[] = [
  {
    id: 1,
    title: "Новичок",
    requiredScore: 0,
    imageSrc: ImageNumberOne
  },
  {
    id: 2,
    title: "Ученик",
    requiredScore: 100,
    imageSrc: ImageNumberTwo
  },
  {
    id: 3,
    title: "Юзер",
    requiredScore: 200,
    imageSrc: ImageNumberThree
  },
  {
    id: 4,
    title: "Мастер",
    requiredScore: 300,
    imageSrc: ImageNumberFour
  },
  {
    id: 5,
    title: "Мастер карт",
    requiredScore: 400,
    imageSrc: ImageNumberFive
  },
  {
    id: 6,
    title: "Рыцарь карт",
    requiredScore: 500,
    imageSrc: ImageNumberSix
  },
  {
    id: 7,
    title: "Профессионал",
    requiredScore: 600,
    imageSrc: ImageNumberSeven
  },
  {
    id: 8,
    title: "Повелитель карт",
    requiredScore: 700,
    imageSrc: ImageNumberEight
  },
  {
    id: 9,
    title: "Лидер",
    requiredScore: 800,
    imageSrc: ImageNumberNine
  }
];
