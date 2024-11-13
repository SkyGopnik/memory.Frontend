import { useNavigate } from "react-router";

import { PlayButton } from "components/common";

import { useAsyncEffect } from "hooks";

import { storage } from "utils";

import { ImageLogo } from "assets";

import style from "./index.module.scss";

export const StartPage = () => {
  const navigate = useNavigate();

  useAsyncEffect(async () => {
    const result = await storage.get("isOnboardSuccess");

    if (Boolean(result)) {
      navigate("/play");
    }
  }, []);

  return (
    <div className={style.page}>
      <ImageLogo />

      <PlayButton onClick={() => navigate("/onboard")} />
    </div>
  );
};
