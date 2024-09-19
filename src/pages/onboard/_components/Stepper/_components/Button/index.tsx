import classNames from "classnames";
import type { FC } from "react";

import ArrowRightIcon from "./_assets/arrow.svg";

import style from "./index.module.scss";

export type PlayButtonProps = {
  type: "play" | "icon";
  className?: string;
  onClick?: () => void;
};

export const Button: FC<PlayButtonProps> = ({ type, className, ...props }) => (
  <button
    {...props}
    className={classNames(style.button, style[`buttonType_${type}`], className)}
  >
    {type === "play" ? "Поехали" : <ArrowRightIcon />}
  </button>
);
