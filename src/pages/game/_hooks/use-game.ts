import { useEffect, useState } from "react";

import { useUpdateEffect } from "../../../hooks";

import { getRandomElements, getShuffledElements } from "./utils";

import { FOOD_AND_DRINK_ICONS } from "../constants";

type FieldItem = {
  isActive: boolean;
  value: string;
};

export const useGame = () => {
  const [timer, setTimer] = useState(120);
  const [field, setField] = useState<Array<FieldItem>>([]);

  const [openedItems, setOpenedItems] = useState<Array<number>>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newTimer = timer - 1;

      if (newTimer <= 0) {
        return;
      }

      setTimer(newTimer);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer]);

  useEffect(() => {
    const randomIcons = getRandomElements(FOOD_AND_DRINK_ICONS, 3);
    const iconsPairs = [...randomIcons, ...randomIcons];

    const field = getShuffledElements(iconsPairs).map((value) => ({
      value,
      isActive: false
    }));

    setField(field);
  }, []);

  useUpdateEffect(() => {
    if (openedItems.length !== 2) {
      return;
    }

    const [currentItemIndex, previousItemIndex] = openedItems;

    const newField = [...field];

    const currentItem = newField[currentItemIndex];
    const previousItem = newField[previousItemIndex];

    if (currentItem.value !== previousItem.value) {
      setTimeout(() => {
        setOpenedItems([]);
      }, 1000);
    } else {
      currentItem.isActive = true;
      previousItem.isActive = true;

      setField(newField);
      setOpenedItems([]);
    }
  }, [openedItems]);

  const handleItemClick = (index: number) => {
    if (openedItems.includes(index) || openedItems.length === 2) {
      return;
    }

    setOpenedItems([...openedItems, index]);
  };

  return {
    timer,
    field,
    openedItems,
    handleItemClick
  };
};
