import { getPluralOfNumber } from "./getPluralRules";

export const formatTimeText = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minuteText =
    minutes > 0
      ? `${minutes} ${getPluralOfNumber(minutes, {
          one: "минута",
          few: "минуты",
          other: "минут"
        })}`
      : "";

  const secondText =
    seconds > 0
      ? `${seconds} ${getPluralOfNumber(seconds, {
          one: "секунда",
          few: "секунды",
          other: "секунд"
        })}`
      : "";

  return minutes > 0 && seconds > 0
    ? `${minuteText} и ${secondText}`
    : minuteText || secondText;
};
