import { Outlet } from "react-router";

import { LayoutWrapper } from "components/core";

import { PatterPlay } from "assets";

export const PlayLayout = () => (
  <LayoutWrapper pattern={PatterPlay}>
    <Outlet />
  </LayoutWrapper>
);
