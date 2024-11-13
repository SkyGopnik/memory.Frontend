import { useState } from "react";

import { useAsyncEffect } from "hooks/use-async-effect";

import { storage } from "utils";

import { THEMES } from "./constants";

export const useThemes = () => {
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [ownedThemes, setOwnedThemes] = useState<Array<string>>();

  useAsyncEffect(async () => setActiveTheme(await getActiveTheme()), []);

  useAsyncEffect(async () => {
    const storedOwnedThemes = await storage.get("ownedThemes");
    setOwnedThemes(storedOwnedThemes ? JSON.parse(storedOwnedThemes).data : []);
  }, []);

  const getActiveTheme = async () => {
    const storedTheme = await storage.get("iconsTheme");

    const isThemeExists = THEMES.some((theme) => theme.value === storedTheme);

    return isThemeExists ? storedTheme : THEMES[0].value;
  };

  const getCurrentTheme = async () => {
    const activeTheme = await getActiveTheme();
    return THEMES.find((theme) => theme.value === activeTheme);
  };

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
    ownedThemes,
    setTheme,
    addTheme,
    getCurrentTheme,
    THEMES
  };
};
