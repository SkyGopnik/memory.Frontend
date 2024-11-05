import { Outlet } from "react-router";

import { LayoutWrapper } from "components/core";

import { PatternShop } from "assets";

import style from "./index.module.scss";

export const ShopLayout = () => (
  <LayoutWrapper className={style.layout} pattern={PatternShop}>
    <Outlet />
  </LayoutWrapper>
);
