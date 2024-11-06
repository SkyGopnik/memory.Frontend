import classNames from "classnames";
import type { FC } from "react";
import { useMemo } from "react";

import { formatTime } from "utils/formatTime";

import { IconCoin, IconLimit, IconTime } from "assets";

import type { InfoProps } from "./types";

import style from "./index.module.scss";

export const Info: FC<InfoProps> = ({ timer, limit, score = 0 }) => {
  const time = useMemo(() => formatTime(timer), [timer]);

  return (
    <div className={style.info}>
      <div className={classNames(style.item, style.time)}>
        <IconTime />

        <span>{time}</span>
      </div>

      {limit && (
        <div className={classNames(style.item, style.limit)}>
          <IconLimit />

          <span>{limit}</span>
        </div>
      )}

      <div className={classNames(style.item, style.score)}>
        <IconCoin />

        <span>{score}</span>
      </div>
    </div>
  );
};
