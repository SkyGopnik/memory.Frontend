import { useState } from "react";

import { storage } from "utils";

export const useScore = () => {
  const [score, setScore] = useState(() => {
    const storedScore = storage.get("score");

    const parsedScore = parseInt(storedScore || "0");
    return !isNaN(parsedScore) ? parsedScore : 0;
  });

  const addScore = (value: number) => {
    const newScore = score + value;

    setScore(newScore);
    storage.set("score", newScore);
  };

  return {
    score,
    addScore
  };
};
