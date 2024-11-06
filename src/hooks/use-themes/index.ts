import { useState } from "react";

import { storage } from "utils";

import { THEMES } from "./constants";

export const useThemes = () => {
  const [activeTheme, setActiveTheme] = useState(() => {
    const storedTheme = storage.get("iconsTheme");

    const isThemeExists = THEMES.some((theme) => theme.value === storedTheme);

    return isThemeExists ? storedTheme : THEMES[0].value;
  });

  const setTheme = (theme: string) => {
    storage.set("iconsTheme", theme);
    setActiveTheme(theme);
  };

  return {
    activeTheme,
    setTheme,
    THEMES
  };
};
