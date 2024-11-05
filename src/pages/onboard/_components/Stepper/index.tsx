import type { FunctionComponent } from "react";

import { Button } from "./_components";

import type { Step } from "./types";

import style from "./index.module.scss";

export const Stepper: FunctionComponent<Step> = ({
  image,
  title,
  description,
  onActionClick
}) => {
  return (
    <div className={style.stepper}>
      <div className={style.image}>
        <img src={image} alt={`Изображение "${title}"`} />
      </div>

      <div className={style.content}>
        <div className={style.info}>
          <p className={style.title}>{title}</p>

          <p className={style.description}>{description}</p>
        </div>

        <Button className={style.button} onClick={onActionClick} />
      </div>
    </div>
  );
};
