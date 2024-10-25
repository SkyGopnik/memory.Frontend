import classNames from "classnames";
import type { FC } from "react";

import { IconQuestion } from "assets";

import type { ItemProps } from "./types";

import style from "./index.module.scss";

export const Item: FC<ItemProps> = ({ isActive, children, onClick }) => (
  <button
    className={classNames(style.item, { [style.active]: isActive })}
    onClick={onClick}
  >
    {isActive ? children : <IconQuestion />}
  </button>
);
