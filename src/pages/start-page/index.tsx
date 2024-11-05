import { useEffect } from "react";
import { useNavigate } from "react-router";

import { PlayButton } from "components/common";

import { storage } from "utils";

import { ImageLogo } from "assets";

import style from "./index.module.scss";

export const StartPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const result = storage.get("isOnboardSuccess");

    if (result?.data) {
      navigate("/play");
    }
  });

  return (
    <div className={style.page}>
      <ImageLogo />

      <PlayButton onClick={() => navigate("/onboard")} />
    </div>
  );
};
