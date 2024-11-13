import classNames from "classnames";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import type { GameOptions } from "store";
import { useGameStore } from "store";

import { CloseButton } from "components/common";
import { Info } from "components/core";

import { Item } from "./_components";

import { useAsyncEffect, useScore, useThemes, useUpdateEffect } from "hooks";

import { useGame } from "./_hooks";

import style from "./index.module.scss";

const iconsPack = import.meta.glob("assets/game-icons/*.png");

export const GamePage = () => {
  const navigate = useNavigate();

  const { options: gameOptions, setResults, updateOptions } = useGameStore();

  const { addScore } = useScore();
  const { getCurrentTheme } = useThemes();

  const [icons, setIcons] = useState<Record<string, string>>({});

  const options: GameOptions = useMemo(
    () =>
      gameOptions ?? {
        timer: 1,
        limit: 5,
        cards: 24
      },
    [gameOptions]
  );

  const {
    timer,
    field,
    limit,
    score,
    openedItems,
    isGameComplete,
    isGameOver,
    initGame,
    startGame,
    handleItemClick
  } = useGame(options);

  useUpdateEffect(() => {
    setResults({
      score,
      timer,
      limit
    });

    console.log(field);
    console.log(isGameComplete);

    const attempts = (options?.attempts ?? 0) - 1;

    if (!isGameComplete && attempts >= 0) {
      updateOptions({
        attempts
      });

      navigate("/game/chance");
      return;
    }

    if (isGameComplete) {
      addScore(score);
    }

    navigate(isGameComplete ? "/game/success" : "/game/fail");
  }, [isGameOver]);

  useAsyncEffect(async () => {
    const currentTheme = await getCurrentTheme();

    if (!currentTheme) {
      return;
    }

    const field = initGame(currentTheme.icons);
    await loadIcons(field);

    startGame(field);
  }, []);

  const loadIcons = async (gameField: typeof field) => {
    const neededIcons = gameField.map(({ value }) => value);
    const iconsModules: Record<string, string> = {};

    for (const path in iconsPack) {
      const iconName = (path.split("/").pop() ?? "").replace(".png", "");

      if (!neededIcons.includes(iconName)) {
        continue;
      }

      // @ts-expect-error dynamic import
      iconsModules[iconName] = (await iconsPack[path]()).default as string;
    }

    await Promise.all(
      Object.values(iconsModules).map(async (path) => {
        const image = new Image();
        image.src = path;
        await new Promise((resolve) => (image.onload = resolve));
      })
    );

    setIcons(iconsModules);
  };

  return (
    <div className={style.page}>
      <Info timer={timer} score={score} limit={limit} className={style.info} />

      <CloseButton onClick={() => navigate("/play")} className={style.close} />

      <div className={style.game}>
        <div
          className={classNames([style.fields, style[`size${field.length}`]])}
        >
          {field.map(({ value, isOpened, isActive }, index) => (
            <Item
              key={index}
              isActive={isActive || isOpened || openedItems.includes(index)}
              onClick={() => handleItemClick(index)}
              size={field.length}
            >
              <img className={style.icon} src={icons[value]} alt={value} />
            </Item>
          ))}
        </div>
      </div>
    </div>
  );
};
