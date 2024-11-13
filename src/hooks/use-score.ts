import { useState } from "react";

import { useAsyncEffect } from "hooks/use-async-effect";

import { storage } from "utils";

export const useScore = () => {
  const [score, setScore] = useState(0);

  useAsyncEffect(async () => {
    const storedScore = await storage.get("score");

    const parsedScore = parseInt(storedScore || "0");
    setScore(!isNaN(parsedScore) ? parsedScore : 0);
  }, []);

  const addScore = (value: number) => {
    const newScore = score + value;

    setScore(newScore);
    storage.set("score", newScore);
  };

  const minusScore = (value: number) => {
    const newScore = score - value;

    if (newScore < 0) {
      return;
    }

    setScore(newScore);
    storage.set("score", newScore);
  };

  return {
    score,
    addScore,
    minusScore
  };
};
