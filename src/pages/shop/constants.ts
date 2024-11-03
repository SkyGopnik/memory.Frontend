import type { GoodsProps } from "./_components/goods/types";

import { IconAnimals, IconProfessions, IconSports } from "./_assets";

export const GOODS: GoodsProps[] = [
  {
    id: 1,
    price: 2000,
    isBuy: false,
    isSelected: false,
    title: "Животные",
    imageSrc: IconAnimals
  },
  {
    id: 2,
    price: 2000,
    isBuy: true,
    isSelected: true,
    title: "Виды спорта",
    imageSrc: IconSports
  },
  {
    id: 3,
    price: 2000,
    isBuy: false,
    isSelected: false,
    title: "Профессии",
    imageSrc: IconProfessions
  },
  {
    id: 4,
    price: 2000,
    isBuy: true,
    isSelected: false,
    title: "Тест",
    imageSrc: IconProfessions
  }
];
