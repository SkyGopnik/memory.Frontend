import { createMemoryRouter } from "react-router";

import { ROUTES } from "./constants";

export const router = createMemoryRouter(ROUTES, {
  initialEntries: ["/"]
});
