import bridge from "@vkontakte/vk-bridge";
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "router";

import "./style/index.scss";

bridge.send("VKWebAppInit").catch((err) => console.error(err));

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
