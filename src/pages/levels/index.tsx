import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

import { CloseButton } from "components/common";

import { Level } from "./_components/level";

import { useLevels, useScore } from "hooks";

import style from "./index.module.scss";

export const LevelsPage = () => {
  const navigate = useNavigate();

  const { score } = useScore();
  const { LEVELS } = useLevels();

  const nextLockedIndex = LEVELS.findIndex(
    (item) => item.requiredScore > score
  );

  const lastAvailableLevelIndex =
    nextLockedIndex === -1 ? LEVELS.length - 1 : nextLockedIndex;

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastAvailableLevelIndex >= 2 && listRef.current) {
      const listElement = listRef.current;
      const targetElement = listElement.children[
        lastAvailableLevelIndex
      ] as HTMLElement;

      const scrollPosition =
        targetElement.offsetLeft -
        listElement.clientWidth / 2 +
        targetElement.clientWidth / 2 +
        12;
      listElement.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  }, [lastAvailableLevelIndex]);

  return (
    <div className={style.page}>
      <div className={style.head}>
        <p className={style.title}>Уровни игры</p>

        <CloseButton onClick={() => navigate(-1)} className={style.close} />
      </div>

      <div className={style.levels}>
        <div className={style.list} ref={listRef}>
          {LEVELS.map((item, index) => (
            <Level
              key={index}
              title={item.label}
              image={item.image}
              currentScore={score}
              requiredScore={item.requiredScore}
              isLocked={item.requiredScore > score}
              isActive={lastAvailableLevelIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
