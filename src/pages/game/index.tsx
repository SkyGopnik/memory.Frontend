import classNames from "classnames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { Info } from "components/core";

import { Item } from "./_components";

import { useUpdateEffect } from "hooks";

import { useGame } from "./_hooks";

import style from "./index.module.scss";

const iconsPack = import.meta.glob(
  "../../assets/game-icons/food-and-drink/*.png"
);

export const GamePage = () => {
  const { options, setResults } = useGameStore();

  const navigate = useNavigate();

  const [icons, setIcons] = useState<Record<string, string>>({});

  const {
    timer,
    field,
    limit,
    score,
    openedItems,
    isGameComplete,
    isGameOver,
    handleItemClick
  } = useGame(
    options ?? {
      timer: 30,
      limit: 10,
      cards: 6
    }
  );

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

    navigate(isGameComplete ? "/game/success" : "/game/fail");
  }, [isGameOver]);

  return (
    <div className={style.page}>
      <Info timer={timer} score={score} limit={limit} />

      <div className={classNames([style.game, style[`size${field.length}`]])}>
        {field.map(({ value, isActive }, index) => (
          <Item
            key={index}
            isActive={isActive || openedItems.includes(index)}
            onClick={() => handleItemClick(index)}
          >
            <img src={icons[value]} alt={value} />
          </Item>
        ))}
      </div>
    </div>
  );
};
