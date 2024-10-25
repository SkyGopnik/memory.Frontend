import { Outlet } from "react-router";

import { ImageBackgroundPattern } from "./_assets";

export const OnboardLayout = () => (
  <div className="layout">
    <ImageBackgroundPattern className="background" />

    <div className="content">
      <Outlet />
    </div>
  </div>
);
