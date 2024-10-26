import { Outlet } from "react-router";

import { LayoutWrapper } from "components/core";

import { PatternLevels } from "assets";

import style from "./index.module.scss";

export const LevelsLayout = () => (
  <LayoutWrapper className={style.layout} pattern={PatternLevels}>
    <Outlet />
  </LayoutWrapper>
);
