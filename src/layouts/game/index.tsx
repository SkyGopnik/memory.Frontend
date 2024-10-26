import { Outlet } from "react-router";

import { LayoutWrapper } from "components/core";

import { PatterGame } from "assets";

import style from "./index.module.scss";

export const GameLayout = () => (
  <LayoutWrapper className={style.layout} pattern={PatterGame}>
    <Outlet />
  </LayoutWrapper>
);
