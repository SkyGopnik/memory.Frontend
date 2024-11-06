import bridge, { EAdsFormats } from "@vkontakte/vk-bridge";

export const advertisement = {
  type: async () => {
    try {
      const data = await bridge.send("VKWebAppGetGroupInfo", {
        group_id: 210602912
      });

      if (data.is_member !== 1) {
        return "subscribe";
      }
    } catch (error) {
      console.error(error);
    }

    return "ads";
  },
  showAds: async () => {
    try {
      await bridge.send("VKWebAppShowNativeAds", {
        ad_format: EAdsFormats.REWARD
      });
    } catch (error) {
      console.error(error);
    }

    return true;
  },
  subscribeGroup: async () => {
    try {
      const data = await bridge.send("VKWebAppJoinGroup", {
        group_id: 210602912
      });

      return data.result;
    } catch (error) {
      console.error(error);
    }

    return false;
  }
};
