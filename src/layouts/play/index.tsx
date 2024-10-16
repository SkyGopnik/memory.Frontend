import { Outlet } from "react-router";

import { ImageBackgroundPattern } from "assets";

export const PlayLayout = () => (
  <div className="layout">
    <ImageBackgroundPattern className="background" />

    <div className="content">
      <Outlet />
    </div>
  </div>
);
