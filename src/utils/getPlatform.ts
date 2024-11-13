type GamePlatform = "vk" | null;

export const getPlatform = (): GamePlatform => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("game_platform") as GamePlatform;
};
