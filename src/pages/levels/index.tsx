import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

import { CloseButton } from "components/common";

import { Level } from "./_components/level";

import { LEVELS } from "./constants";

import style from "./index.module.scss";

export const LevelsPage = () => {
  const navigate = useNavigate();
  const [userScore, setUserScore] = useState(228);

  const nextLockedIndex = LEVELS.findIndex(
    (item) => item.requiredScore > userScore
  );

  const lastAvailableLevelIndex =
    nextLockedIndex === -1 ? LEVELS.length - 1 : nextLockedIndex;

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastAvailableLevelIndex >= 3 && listRef.current) {
      const targetLevel = listRef.current.children[lastAvailableLevelIndex];
      targetLevel.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [lastAvailableLevelIndex]);

  return (
    <div className={style.page}>
      <div className={style.head}>
        <p className={style.title}>Уровни игры</p>

        <CloseButton
          onClick={() => navigate("/play")}
          className={style.close}
        />
      </div>

      <div className={style.list} ref={listRef}>
        {LEVELS.map((item, index) => (
          <Level
            key={item.id}
            index={index}
            currentScore={userScore}
            isNextLocked={index === nextLockedIndex}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
