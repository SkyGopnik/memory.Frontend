import classNames from "classnames";
import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { PlayButton } from "components/common";

import { useLevels, useScore } from "hooks";

import { IconCoin, ImageLogo } from "assets";

import { IconLevel, IconShop } from "./_assets";

import style from "./index.module.scss";

export const PlayPage = () => {
  const navigate = useNavigate();

  const { setOptions } = useGameStore();

  const { score } = useScore();
  const { currentLevel } = useLevels();

  const startGame = () => {
    setOptions({
      ...currentLevel.gameOptions,
      attempts: 1
    });

    navigate("/game");
  };

  return (
    <div className={style.page}>
      <ImageLogo />

      <PlayButton onClick={startGame} />

      <div className={style.actions}>
        <div className={style.pages}>
          <button
            className={classNames(style.icon, style.shop)}
            aria-label="Магазин"
            onClick={() => navigate("/shop")}
          >
            <IconShop />
          </button>

          <button
            className={classNames(style.icon, style.level)}
            aria-label="Уровни"
            onClick={() => navigate("/levels")}
          >
            <IconLevel />
          </button>
        </div>

        <button
          className={classNames(style.icon, style.coins)}
          aria-label="Монеты"
        >
          <IconCoin />

          <span>{score}</span>
        </button>
      </div>
    </div>
  );
};
