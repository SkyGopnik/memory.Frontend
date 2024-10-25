import { Outlet } from "react-router";

import { ImageBackgroundPattern } from "assets";

export const DefaultLayout = () => (
  <div className="layout">
    <ImageBackgroundPattern className="background" />

    <div className="content">
      <Outlet />
    </div>
  </div>
);
