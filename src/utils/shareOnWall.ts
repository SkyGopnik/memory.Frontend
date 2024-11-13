import bridge from "@vkontakte/vk-bridge";

export const shareOnWall = async (message: string): Promise<boolean> => {
  try {
    const response = await bridge.send("VKWebAppShowWallPostBox", {
      message,
      attachments: "https://vk.com/app52312049"
    });

    return !!response.post_id;
  } catch (error) {
    console.error(error);
    return false;
  }
};
