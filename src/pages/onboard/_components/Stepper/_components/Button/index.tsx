import classNames from "classnames";
import type { FC, MouseEvent } from "react";
import { useNavigate } from "react-router";

import { IconArrow } from "./_assets";

import type { PlayButtonProps } from "./types";

import style from "./index.module.scss";

export const Button: FC<PlayButtonProps> = ({
  buttonType,
  className,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (buttonType === "play") {
      navigate("/play");
    } else if (props.onClick) {
      props.onClick(event);
    }
  };

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
