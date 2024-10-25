import type { RouteObject } from "react-router";

import {
  DefaultLayout,
  OnboardLayout,
  PlayLayout,
  RatingLayout
} from "layouts";

import { OnboardPage, PlayPage, RatingPage, StartPage } from "pages";

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
  },
  {
    element: <PlayLayout />,
    children: [
      {
        path: "/play",
        element: <PlayPage />
      }
    ]
  },
  {
    element: <RatingLayout />,
    children: [
      {
        path: "/rating",
        element: <RatingPage />
      }
    ]
  }
];
