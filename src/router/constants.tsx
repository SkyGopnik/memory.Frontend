import type { RouteObject } from "react-router";

import { LevelsLayout, OnboardLayout, PlayLayout, GameLayout } from "layouts";

import { OnboardPage, PlayPage, StartPage, LevelsPage, GamePage } from "pages";

export const ROUTES: Array<RouteObject> = [
  {
    element: <PlayLayout />,
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
