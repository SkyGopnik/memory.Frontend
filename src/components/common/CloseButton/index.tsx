import classNames from "classnames";
import type { FC } from "react";

import { IconClose } from "./_assets";

import type { PlayButtonProps } from "./types";

import style from "./index.module.scss";

export const CloseButton: FC<PlayButtonProps> = ({ className, ...props }) => (
  <button className={classNames(style.button, className)} {...props}>
    <IconClose className={style.lock} />
  </button>
);
