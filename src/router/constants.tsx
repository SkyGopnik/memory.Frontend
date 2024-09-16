import type { RouteObject } from "react-router";

import { DefaultLayout } from "layouts";

import { OnboardPage, StartPage } from "pages";

export const ROUTES: Array<RouteObject> = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <StartPage />
      }
    ]
  },
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/onboard",
        element: <OnboardPage />
      }
    ]
  }
];
