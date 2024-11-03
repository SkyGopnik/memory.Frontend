import type { RouteObject } from "react-router";

import {
  PlayLayout,
  GameLayout,
  ShopLayout,
  LevelsLayout,
  OnboardLayout
} from "layouts";

import {
  GamePage,
  PlayPage,
  ShopPage,
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
    element: <LevelsLayout />,
    children: [
      {
        path: "/levels",
        element: <LevelsPage />
      }
    ]
  },
  {
    element: <ShopLayout />,
    children: [
      {
        path: "/shop",
        element: <ShopPage />
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
  }
];
