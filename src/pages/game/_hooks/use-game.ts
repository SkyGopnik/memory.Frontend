import { useMemo, useState } from "react";
import type { GameOptions } from "store";

import { useUpdateEffect } from "hooks";

import { getRandomElements, getShuffledElements } from "./utils";

type FieldItem = {
  isActive: boolean;
  isOpened: boolean;
  value: string;
};

export const useGame = (options: GameOptions) => {
  const [timer, setTimer] = useState(options.timer);
  const [limit, setLimit] = useState(options.limit);
  const [score, setScore] = useState(0);

  const [field, setField] = useState<Array<FieldItem>>([]);
  const [isGameStarted, setGameStarted] = useState(false);

  const [openedItems, setOpenedItems] = useState<Array<number>>([]);

  const isGameComplete = useMemo(
    () =>
      field.filter(({ isActive }) => isActive).length === field.length &&
      isGameStarted,
    [field]
  );

  const isGameOver = useMemo(
    () => limit === 0 || timer === 0 || isGameComplete,
    [limit, timer, isGameComplete]
  );

  const showAllField = (field: Array<FieldItem>) => {
    setField(field.map((item) => ({ ...item, isOpened: true })));

    const timeout = setTimeout(() => {
      setField(field.map((item) => ({ ...item, isOpened: false })));
    }, 1000);

    return () => clearTimeout(timeout);
  };

  const initGame = (icons: Array<string>) => {
    const randomIcons = getRandomElements(icons, options.cards / 2);
    const iconsPairs = [...randomIcons, ...randomIcons];

    const field = getShuffledElements(iconsPairs).map((value) => ({
      value,
      isOpened: false,
      isActive: false
    }));

    setField(field);

    return field;
  };

  const startGame = (field: Array<FieldItem>) => {
    showAllField(field);
    setGameStarted(true);
  };

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

  useUpdateEffect(() => {
    const timeout = setTimeout(() => {
      const newTimer = timer - 1;

      if (newTimer < 0) {
        return;
      }

      setTimer(newTimer);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [isGameStarted, timer]);

  const setActiveOpenedItems = () =>
    setTimeout(() => {
      const [currentItemIndex, previousItemIndex] = openedItems;

      const newField = [...field];

      const currentItem = newField[currentItemIndex];
      const previousItem = newField[previousItemIndex];

      currentItem.isActive = true;
      previousItem.isActive = true;

      setField(newField);
      setOpenedItems([]);
    }, 300);

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
      currentItem.isOpened = true;
      previousItem.isOpened = true;

      setField(newField);
      setScore((score) => score + 1);

      setActiveOpenedItems();
    }
  }, [openedItems]);

  const handleItemClick = (index: number) => {
    if (
      openedItems.includes(index) ||
      openedItems.length === 2 ||
      field[index].isActive ||
      field[index].isOpened ||
      !isGameStarted
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
    initGame,
    startGame,
    handleItemClick
  };
};
