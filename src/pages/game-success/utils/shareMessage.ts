import { getPluralOfNumber } from "utils";

export const formatShareMessage = (timeText: string, score: number): string => {
  const coinText = `${score} ${getPluralOfNumber(score, {
    one: "коин",
    few: "коина",
    other: "коинов"
  })}`;

  return `Я прошел раунд за ${timeText} и заработал ${coinText} 🔥 А ты сможешь лучше? 😎`;
};
