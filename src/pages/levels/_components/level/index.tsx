import classNames from "classnames";
import type { FC } from "react";
import React from "react";

import { IconCoin } from "assets";

import { IconLock } from "./_assets";

import type { LevelProps } from "./types";

import style from "./index.module.scss";

export const Level: FC<LevelProps> = ({
  title,
  requiredScore,
  currentScore,
  image: ImageComponent,
  isLocked,
  isActive
}) => (
  <div
    className={classNames(
      style.level,
      { [style.levelLocked]: isLocked || isActive },
      { [style.levelLockedNext]: isActive }
    )}
    role="button"
  >
    <div className={style.general}>
      <div className={style.image}>
        <ImageComponent
          className={classNames(style.levelIcon, {
            [style.levelIconLocked]: isLocked
          })}
        />

        {isLocked && <IconLock className={style.lock} />}
      </div>

      <p
        className={classNames(style.title, {
          [style.titleLocked]: isLocked
        })}
      >
        {title}
      </p>
    </div>

    {isActive && (
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
