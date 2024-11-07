import bridge from "@vkontakte/vk-bridge";

export const shareOnWall = async (message: string): Promise<boolean> => {
  try {
    await bridge.send("VKWebAppShowWallPostBox", {
      message,
      attachments: "https://vk.com/app52312049"
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
