import type { RouteObject } from "react-router";

import { DefaultLayout, OnboardLayout } from "layouts";

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
    element: <OnboardLayout />,
    children: [
      {
        path: "/onboard",
        element: <OnboardPage />
      }
    ]
  }
];
