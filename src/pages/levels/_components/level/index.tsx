import classNames from "classnames";
import React from "react";

import { IconCoin } from "assets";

import { IconLock } from "./_assets";

import type { LevelProps } from "./types";

import style from "./index.module.scss";

interface LevelComponentProps extends LevelProps {
  index: number;
  currentScore: number;
}

export const Level = ({
  title,
  requiredScore,
  currentScore,
  imageSrc: ImageComponent,
  isNextLocked
}: LevelComponentProps & { isNextLocked: boolean }) => {
  const LockedLevel = currentScore < requiredScore;

  return (
    <div
      className={classNames(
        style.level,
        { [style.levelLocked]: LockedLevel },
        { [style.levelLockedNext]: isNextLocked }
      )}
      role="button"
    >
      <div className={style.general}>
        <div className={style.image}>
          <ImageComponent
            className={classNames(style.levelIcon, {
              [style.levelIconLocked]: LockedLevel
            })}
          />

          {LockedLevel && <IconLock className={style.lock} />}
        </div>

        <p
          className={classNames(style.title, {
            [style.titleLocked]: LockedLevel
          })}
        >
          {title}
        </p>
      </div>

      {isNextLocked && (
        <div className={style.progress}>
          <div className={style.bar}>
            <div
              className={style.line}
              style={{ width: `${(currentScore / requiredScore) * 100}%` }}
            />
          </div>

          <div className={style.data}>
            <IconCoin className={style.coin} />

            <p className={style.score}>
              {currentScore}

              <span>/</span>

              {requiredScore}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
