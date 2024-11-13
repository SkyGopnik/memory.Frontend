import bridge from "@vkontakte/vk-bridge";

import { getPlatform } from "utils/getPlatform";

export const storage = {
  set: (key: string, unknownValue: unknown) => {
    const platform = getPlatform();

    const value =
      typeof unknownValue === "object"
        ? JSON.stringify(unknownValue)
        : String(unknownValue);

    if (platform === "vk") {
      return bridge.send("VKWebAppStorageSet", {
        key,
        value
      });
    } else {
      return localStorage.setItem(key, value);
    }
  },
  get: async (key: string): Promise<string | null> => {
    const platform = getPlatform();

    if (platform === "vk") {
      const { keys } = await bridge.send("VKWebAppStorageGet", {
        keys: [key]
      });

      return keys[0].value;
    } else {
      return localStorage.getItem(key);
    }
  }
};
