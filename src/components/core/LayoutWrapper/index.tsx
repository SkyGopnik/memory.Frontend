import classNames from "classnames";
import type { FC } from "react";

import type { LayoutWrapperProps } from "./types";

import style from "./index.module.scss";

export const LayoutWrapper: FC<LayoutWrapperProps> = ({
  className,
  pattern: Pattern,
  children
}) => (
  <div className={classNames(style.layout, className)}>
    <Pattern className={style.background} />

    <div className={style.content}>{children}</div>
  </div>
);
