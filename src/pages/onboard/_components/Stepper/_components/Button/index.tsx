import classNames from "classnames";
import type { FC, MouseEvent } from "react";
import type { ButtonProps } from "react-html-props";

import { IconArrow } from "./_assets";

import style from "./index.module.scss";

export const Button: FC<ButtonProps> = ({ className, ...props }) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    props.onClick?.(event);

  return (
    <button
      {...props}
      onClick={handleClick}
      className={classNames(style.button, className)}
    >
      <IconArrow />
    </button>
  );
};
