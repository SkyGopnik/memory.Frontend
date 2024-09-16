import { Outlet } from "react-router";

import { ImageBackgroundPattern } from "./_assets";

import style from "./index.module.scss";

export const DefaultLayout = () => (
  <div className={style.layout}>
    <ImageBackgroundPattern className={style.background} />

    <div className={style.content}>
      <Outlet />
    </div>
  </div>
);
