import { useNavigate } from "react-router";

import { PlayButton } from "components/common";

import { ImageCoin, ImageLogo } from "assets";

import { ImageRating, ImageLevel } from "./_assets";

import style from "./index.module.scss";

export const PlayPage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.page}>
      <img src={ImageLogo} alt="Изображение логотипа" />

      <PlayButton onClick={() => navigate("/game")} />

      <div className={style.data}>
        <div className={style.leftSide}>
          <ImageRating
            className={style.rating}
            onClick={() => navigate("/rating")}
          />

          <ImageLevel
            className={style.level}
            onClick={() => navigate("level")}
          />
        </div>

        <div className={style.rightSide}>
          <ImageCoin />

          <p className={style.coins}>2000</p>
        </div>
      </div>
    </div>
  );
};
