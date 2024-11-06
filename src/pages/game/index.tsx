import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import type { GameOptions } from "store";
import { useGameStore } from "store";

import { CloseButton } from "components/common";
import { Info } from "components/core";

import { Item } from "./_components";

import { useScore, useUpdateEffect } from "hooks";

import { useGame } from "./_hooks";

import style from "./index.module.scss";

const iconsPack = import.meta.glob("assets/game-icons/food-and-drink/*.png");

export const GamePage = () => {
  const navigate = useNavigate();

  const { options: gameOptions, setResults, updateOptions } = useGameStore();
  const { addScore } = useScore();

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
    handleItemClick
  } = useGame(options);

  useEffect(() => {
    (async () => {
      const neededIcons = field.map(({ value }) => value);
      const iconsModules: Record<string, string> = {};

      for (const path in iconsPack) {
        const iconName = (path.split("/").pop() ?? "").replace(".png", "");

        if (!neededIcons.includes(iconName)) {
          continue;
        }

        // @ts-expect-error dynamic import
        iconsModules[iconName] = (await iconsPack[path]()).default as string;
      }

      setIcons(iconsModules);
    })();
  }, []);

  useUpdateEffect(() => {
    setResults({
      score,
      timer,
      limit
    });

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

  return (
    <div className={style.page}>
      <Info timer={timer} score={score} limit={limit} className={style.info} />

      <CloseButton onClick={() => navigate(-2)} className={style.close} />

      <div className={style.game}>
        <div
          className={classNames([style.fields, style[`size${field.length}`]])}
        >
          {field.map(({ value, isActive }, index) => (
            <Item
              key={index}
              isActive={isActive || openedItems.includes(index)}
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
