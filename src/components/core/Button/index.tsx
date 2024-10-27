import classNames from "classnames";
import type { FC } from "react";

import type { ButtonProps } from "./types";

import style from "./index.module.scss";

export const Button: FC<ButtonProps> = ({
  className,
  type = "primary",
  color,
  htmlType,
  ...props
}) => (
  <button
    className={classNames([style.button, style[type], style[color], className])}
    type={htmlType}
    {...props}
  />
);
