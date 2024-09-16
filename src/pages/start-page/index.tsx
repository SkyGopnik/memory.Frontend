import { useNavigate } from "react-router";

import { PlayButton } from "components/common";

import { ImageLogo } from "assets";

import style from "./index.module.scss";

export const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className={style.page}>
      <img src={ImageLogo} alt="Изображение логотипа" />

      <PlayButton onClick={() => navigate("/onboard")} />
    </div>
  );
};
