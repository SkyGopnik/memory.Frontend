import classNames from "classnames";
import { Outlet } from "react-router";

import { ImageBackgroundPattern } from "./_assets";

import style from "./index.module.scss";

export const GameLayout = () => (
  <div className={classNames(style.layout, "layout")}>
    <ImageBackgroundPattern className="background" />

    <div className="content">
      <Outlet />
    </div>
  </div>
);
