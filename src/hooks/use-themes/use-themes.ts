import { useMemo, useState } from "react";

import { storage } from "utils";

import { THEMES } from "./constants";

export const useThemes = () => {
  const [activeTheme, setActiveTheme] = useState(() => {
    const storedTheme = storage.get("iconsTheme");

    const isThemeExists = THEMES.some((theme) => theme.value === storedTheme);

    return isThemeExists ? storedTheme : THEMES[0].value;
  });

  const [ownedThemes, setOwnedThemes] = useState<Array<string>>(() => {
    const storedOwnedThemes = storage.get("ownedThemes");
    return storedOwnedThemes ? JSON.parse(storedOwnedThemes).data : [];
  });

  const currentTheme = useMemo(
    () => THEMES.find((theme) => theme.value === activeTheme)!,
    [activeTheme]
  );

  const addTheme = (theme: string) => {
    const newOwnedThemes = new Set(ownedThemes);

    newOwnedThemes.add(theme);

    storage.set(
      "ownedThemes",
      JSON.stringify({ data: Array.from(newOwnedThemes) })
    );

    setOwnedThemes(Array.from(newOwnedThemes));
  };

  const setTheme = (theme: string) => {
    storage.set("iconsTheme", theme);

    setActiveTheme(theme);
  };

  return {
    activeTheme,
    currentTheme,
    ownedThemes,
    setTheme,
    addTheme,
    THEMES
  };
};
