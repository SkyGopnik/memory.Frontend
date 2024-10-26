import classNames from "classnames";
import type { FC } from "react";

import { IconPlay, IconStar, ImageText } from "./_assets";

import type { PlayButtonProps } from "./types";

import style from "./index.module.scss";

export const PlayButton: FC<PlayButtonProps> = ({ className, ...props }) => (
  <button
    className={classNames(style.button, className)}
    aria-label="Играть"
    {...props}
  >
    <IconPlay />

    <ImageText />

    <IconStar className={classNames(style.star, style.first)} />

    <IconStar className={classNames(style.star, style.second)} />
  </button>
);
