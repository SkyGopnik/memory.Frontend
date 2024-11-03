import classNames from "classnames";
import type { FC } from "react";
import { useNavigate } from "react-router";

import { CloseButton } from "components/common";

import type { LayoutInfoProps } from "./types";

import { Info } from "../Info";

import style from "./index.module.scss";

export const LayoutInfo: FC<LayoutInfoProps> = ({
  title,
  results,
  description,
  children,
  className,
  pattern: Pattern
}) => {
  const navigate = useNavigate();

  return (
    <div className={classNames(style.layout, className)}>
      <Pattern className={style.background} />

      <div className={classNames(style.content)}>
        <CloseButton className={style.close} onClick={() => navigate(-2)} />

        {results && (
          <div className={style.stats}>
            <Info
              timer={results.timer}
              score={results.score}
              limit={results.limit}
            />
          </div>
        )}

        <div className={style.info}>
          <h1 className={style.title}>{title}</h1>

          <p className={style.description}>{description}</p>
        </div>

        {children}
      </div>
    </div>
  );
};
