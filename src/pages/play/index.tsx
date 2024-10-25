import classNames from "classnames";
import { useNavigate } from "react-router";

import { PlayButton } from "components/common";

import { IconCoin, ImageLogo } from "assets";

import { IconLevel } from "./_assets";

import style from "./index.module.scss";

export const PlayPage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.page}>
      <img src={ImageLogo} alt="Изображение логотипа" />

      <PlayButton onClick={() => navigate("/game")} />

      <div className={style.actions}>
        <button
          className={classNames(style.icon, style.level)}
          onClick={() => navigate("level")}
        >
          <IconLevel />
        </button>

        <button className={classNames(style.icon, style.coins)}>
          <IconCoin />

          <span>1000</span>
        </button>
      </div>
    </div>
  );
};
