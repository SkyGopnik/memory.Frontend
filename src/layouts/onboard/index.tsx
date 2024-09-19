import { Outlet } from "react-router";

import { ImageBackgroundPattern } from "./_assets";

import style from "./index.module.scss";

export const OnboardLayout = () => (
  <div className={style.layout}>
    <ImageBackgroundPattern className={style.background} />

    <div className={style.content}>
      <Outlet />
    </div>
  </div>
);
