import type { RouteObject } from "react-router";

import {
  DefaultLayout,
  LevelsLayout,
  OnboardLayout,
  PlayLayout,
  RatingLayout,
  GameLayout
} from "layouts";

import {
  OnboardPage,
  PlayPage,
  RatingPage,
  StartPage,
  LevelsPage,
  GamePage
} from "pages";

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
  },
  {
    element: <GameLayout />,
    children: [
      {
        path: "/game",
        element: <GamePage />
      }
    ]
  },
  {
    element: <LevelsLayout />,
    children: [
      {
        path: "/levels",
        element: <LevelsPage />
      }
    ]
  }
];
