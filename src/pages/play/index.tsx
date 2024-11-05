import classNames from "classnames";
import { useNavigate } from "react-router";

import { PlayButton } from "components/common";

import { IconCoin, ImageLogo } from "assets";

import { IconLevel, IconShop } from "./_assets";

import style from "./index.module.scss";

export const PlayPage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.page}>
      <ImageLogo />

      <PlayButton onClick={() => navigate("/game")} />

      <div className={style.actions}>
        <div className={style.pages}>
          <button
            className={classNames(style.icon, style.level)}
            aria-label="Уровни"
            onClick={() => navigate("/levels")}
          >
            <IconLevel />
          </button>

          <button
            className={classNames(style.icon, style.shop)}
            aria-label="Магазин"
            onClick={() => navigate("/shop")}
          >
            <IconShop />
          </button>
        </div>

        <button
          className={classNames(style.icon, style.coins)}
          aria-label="Монеты"
        >
          <IconCoin />

          <span>1000</span>
        </button>
      </div>
    </div>
  );
};
