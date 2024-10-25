import classNames from "classnames";
import type { FC, MouseEvent } from "react";

import { IconArrow } from "./_assets";

import type { PlayButtonProps } from "./types";

import style from "./index.module.scss";

export const Button: FC<PlayButtonProps> = ({
  buttonType,
  className,
  ...props
}) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) =>
    props.onClick?.(event);

  return (
    <button
      {...props}
      onClick={handleClick}
      className={classNames(
        style.button,
        { [style.play]: buttonType === "play" },
        className
      )}
    >
      {buttonType === "play" ? "Поехали" : <IconArrow />}
    </button>
  );
};
