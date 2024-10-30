import type { RouteObject } from "react-router";

import { LevelsLayout, OnboardLayout, PlayLayout, GameLayout } from "layouts";

import {
  GamePage,
  PlayPage,
  StartPage,
  LevelsPage,
  OnboardPage,
  GameFailPage,
  GameLevelPage,
  GameChancePage,
  GameRecordPage,
  GameSuccessPage,
  GameSubscribePage
} from "pages";

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
    path: "/game/success",
    element: <GameSuccessPage />
  },
  {
    path: "/game/fail",
    element: <GameFailPage />
  },
  {
    path: "/game/chance",
    element: <GameChancePage />
  },
  {
    path: "/game/record",
    element: <GameRecordPage />
  },
  {
    path: "/game/subscribe",
    element: <GameSubscribePage />
  },
  {
    path: "/game/level",
    element: <GameLevelPage />
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
