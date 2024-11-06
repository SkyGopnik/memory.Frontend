import { useEffect, useMemo, useState } from "react";
import type { GameOptions } from "store";

import { useUpdateEffect } from "hooks";

import { getRandomElements, getShuffledElements } from "./utils";

type FieldItem = {
  isActive: boolean;
  isOpened: boolean;
  value: string;
};

export const useGame = (icons: Array<string>, options: GameOptions) => {
  const [timer, setTimer] = useState(options.timer);
  const [limit, setLimit] = useState(options.limit);
  const [score, setScore] = useState(0);

  const [field, setField] = useState<Array<FieldItem>>(() => {
    const randomIcons = getRandomElements(icons, options.cards / 2);
    const iconsPairs = [...randomIcons, ...randomIcons];

    return getShuffledElements(iconsPairs).map((value) => ({
      value,
      isOpened: false,
      isActive: false
    }));
  });

  const [openedItems, setOpenedItems] = useState<Array<number>>([]);

  const isGameComplete = useMemo(
    () => field.filter(({ isActive }) => isActive).length === field.length,
    [field]
  );

  const isGameOver = useMemo(
    () => limit === 0 || timer === 0 || isGameComplete,
    [limit, timer, isGameComplete]
  );

  useEffect(() => {
    setField(field.map((item) => ({ ...item, isOpened: true })));

    const timeout = setTimeout(() => {
      setField(field.map((item) => ({ ...item, isOpened: false })));
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const decreaseLimit = () => {
    if (!limit) {
      return;
    }

    const newLimit = limit - 1;

    if (newLimit < 0) {
      return;
    }

    setLimit(limit - 1);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newTimer = timer - 1;

      if (newTimer < 0) {
        return;
      }

      setTimer(newTimer);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer]);

  useUpdateEffect(() => {
    if (openedItems.length !== 2) {
      return;
    }

    const [currentItemIndex, previousItemIndex] = openedItems;

    const newField = [...field];

    const currentItem = newField[currentItemIndex];
    const previousItem = newField[previousItemIndex];

    if (currentItem.value !== previousItem.value) {
      decreaseLimit();

      setTimeout(() => {
        setOpenedItems([]);
      }, 500);
    } else {
      currentItem.isActive = true;
      previousItem.isActive = true;

      setField(newField);
      setOpenedItems([]);
      setScore((score) => score + 1);
    }
  }, [openedItems]);

  const handleItemClick = (index: number) => {
    if (
      openedItems.includes(index) ||
      openedItems.length === 2 ||
      field[index].isActive ||
      field[index].isOpened
    ) {
      return;
    }

    setOpenedItems([...openedItems, index]);
  };

  return {
    timer,
    field,
    limit,
    score,
    openedItems,
    isGameOver,
    isGameComplete,
    handleItemClick
  };
};
