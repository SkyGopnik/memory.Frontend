import classNames from "classnames";
import type { FC } from "react";

import { CloseButton } from "components/common";

import type { LayoutInfoProps } from "./types";

import { Info } from "../Info";
import { LayoutWrapper } from "../LayoutWrapper";

import style from "./index.module.scss";

export const LayoutInfo: FC<LayoutInfoProps> = ({
  className,
  contentClassName,
  title,
  stats,
  description,
  children,
  pattern,
  actions,
  onClose
}) => (
  <LayoutWrapper className={className} pattern={pattern}>
    <div className={classNames(style.content, contentClassName)}>
      <CloseButton className={style.close} onClick={onClose} />

      {stats && (
        <div className={style.stats}>
          <Info {...stats} />
        </div>
      )}

      <div className={style.info}>
        <h1 className={style.title}>{title}</h1>

        <p className={style.description}>{description}</p>
      </div>

      {children}

      {actions && <div className={style.actions}>{actions}</div>}
    </div>
  </LayoutWrapper>
);
