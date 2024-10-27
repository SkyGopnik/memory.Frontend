import classNames from "classnames";
import type { FC } from "react";
import { useMemo } from "react";

import { IconCoin, IconLimit, IconTime } from "assets";

import type { InfoProps } from "./types";

import style from "./index.module.scss";

export const Info: FC<InfoProps> = ({ timer, limit, score = 0 }) => {
  const time = useMemo(() => {
    const date = new Date(timer * 1000);

    const seconds = date.getSeconds();

    return `${date.getMinutes()}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }, [timer]);

  return (
    <div className={style.info}>
      <div className={classNames(style.item, style.time)}>
        <IconTime />

        <span>{time}</span>
      </div>

      {limit && limit !== 0 && (
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
