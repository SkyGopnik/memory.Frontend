import { Outlet } from "react-router";

import { LayoutWrapper } from "components/core";

import { PatternOnboard } from "assets";

export const OnboardLayout = () => (
  <LayoutWrapper pattern={PatternOnboard}>
    <Outlet />
  </LayoutWrapper>
);
