import classNames from "classnames";
import type { FC } from "react";
import type { ButtonProps } from "react-html-props";

import { IconClose } from "assets";

import style from "./index.module.scss";

export const CloseButton: FC<ButtonProps> = ({ className, ...props }) => (
  <button className={classNames(style.button, className)} {...props}>
    <IconClose />
  </button>
);
