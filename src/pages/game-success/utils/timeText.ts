import { getPluralOfNumber } from "utils/getPluralRules";

export const formatTimeText = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesLabel = getPluralOfNumber(minutes, {
    one: "минута",
    few: "минуты",
    other: "минут"
  });

  const secondsLabel = getPluralOfNumber(seconds, {
    one: "секунда",
    few: "секунды",
    other: "секунд"
  });

  const minutesText = minutes > 0 ? `${minutes} ${minutesLabel}` : "";
  const secondsText = seconds > 0 ? `${seconds} ${secondsLabel}` : "";

  if (minutesText && secondsText) {
    return `${minutesText} и ${secondsText}`;
  }

  return minutesText || secondsText;
};
