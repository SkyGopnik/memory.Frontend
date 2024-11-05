import classNames from "classnames";
import type { FC } from "react";

import { IconQuestion } from "assets";

import type { ItemProps } from "./types";

import style from "./index.module.scss";

export const Item: FC<ItemProps> = ({ isActive, children, onClick, size }) => (
  <button
    className={classNames(style.item, style[`size${size}`], {
      [style.active]: isActive
    })}
    onClick={onClick}
  >
    {isActive ? children : <IconQuestion className={style.question} />}
  </button>
);
