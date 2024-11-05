import classNames from "classnames";
import type { FC } from "react";

import type { ShopButtonProps } from "./types";

import style from "./index.module.scss";

export const ShopButton: FC<ShopButtonProps> = ({
  className,
  variant,
  ...props
}) => {
  return (
    <button
      className={classNames([style.button, style[variant], className])}
      {...props}
    ></button>
  );
};
