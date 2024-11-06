import { useMemo } from "react";

import { useScore } from "hooks/use-score";

import { LEVELS } from "./constants";

export const useLevels = () => {
  const { score } = useScore();

  const currentLevel = useMemo(() => {
    return LEVELS.findLast((level) => level.requiredScore <= score)!;
  }, [score]);

  return {
    currentLevel,
    LEVELS
  };
};
