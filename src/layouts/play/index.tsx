import { Outlet } from "react-router";

import { ImageBackgroundPattern } from "assets";

import style from "./index.module.scss";

export const PlayLayout = () => (
  <div className={style.layout}>
    <ImageBackgroundPattern className={style.background} />

    <div className={style.content}>
      <Outlet />
    </div>
  </div>
);
