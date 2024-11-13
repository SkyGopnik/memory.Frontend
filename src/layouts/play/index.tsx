import { Outlet } from "react-router";

import { LayoutWrapper } from "components/core";

import { PatterPlay } from "assets";

import style from "./index.module.scss";

export const PlayLayout = () => (
  <LayoutWrapper className={style.layout} pattern={PatterPlay}>
    <Outlet />
  </LayoutWrapper>
);
