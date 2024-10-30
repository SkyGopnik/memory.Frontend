import classNames from "classnames";
import type { FC } from "react";
import { useNavigate } from "react-router";
import { useGameStore } from "store";

import { CloseButton } from "components/common";
import { Info } from "components/core/Info";

import { IconCoin } from "assets";
import { ImageNumberOne } from "assets/level-numbers";

import type { AfterGameProps } from "./types";

import style from "./index.module.scss";

export const AfterGame: FC<AfterGameProps> = ({
  title,
  subtitle,
  children,
  isRecord,
  showResult,
  isNewLevel,
  isSubscribe
}) => {
  const navigate = useNavigate();

  const { results } = useGameStore();

  return (
    <div
      className={classNames(style.content, {
        [style.largePadding]: !showResult
      })}
    >
      <CloseButton className={style.close} onClick={() => navigate(-2)} />

      {showResult && results && (
        <Info
          timer={results.timer}
          score={results.score}
          limit={results.limit}
        />
      )}

      <div className={style.info}>
        <h1 className={style.title}>{title}</h1>

        <p className={style.description}>{subtitle}</p>
      </div>

      {isRecord && (
        <div className={style.record}>
          <IconCoin className={style.icon} />

          <p className={style.results}>{results?.score}</p>
        </div>
      )}

      {isSubscribe && <div className={style.group} />}

      {isNewLevel && <ImageNumberOne className={style.level} />}

      {children}
    </div>
  );
};
