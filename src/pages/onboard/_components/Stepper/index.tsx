import classNames from "classnames";
import type { FunctionComponent } from "react";

import { Button } from "./_components";

import type { Step } from "./types";

import style from "./index.module.scss";

interface Props {
  step: Step;
}

export const Stepper: FunctionComponent<Props> = ({ step }) => {
  const { title, description, isLastStep, image, nextStep } = step;

  return (
    <div className={style.stepper}>
      <div className={style.image}>
        <img src={image} alt={`Изображение "${title}"`} />
      </div>

      <div className={style.content}>
        <div className={classNames(style.info, { [style.last]: isLastStep })}>
          <p className={style.title}>{title}</p>

          <p className={style.description}>{description}</p>
        </div>

        <Button onClick={nextStep} buttonType={isLastStep ? "play" : "icon"} />
      </div>
    </div>
  );
};
