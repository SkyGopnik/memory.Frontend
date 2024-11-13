import { Outlet } from "react-router";

import { LayoutWrapper } from "components/core";

import { PatternOnboard } from "assets";

import style from "./index.module.scss";

export const OnboardLayout = () => (
  <LayoutWrapper className={style.layout} pattern={PatternOnboard}>
    <Outlet />
  </LayoutWrapper>
);
