import classNames from "classnames";
import type { FunctionComponent } from "react";

import { Button } from "./_components/Button";

import style from "./index.module.scss";

interface Step {
  title: string;
  description: string;
  image: string;
  nextStep(): void;
  isLastStep: boolean;
}

interface Props {
  steps: Step;
}

export const Stepper: FunctionComponent<Props> = ({ steps }) => {
  const { title, description, isLastStep, image, nextStep } = steps;

  return (
    <div className={style.stepper}>
      <div className={style.stepper__image}>
        <img src={image} alt={`Изображение "${title}"`} />
      </div>

      <div className={style.stepper__data}>
        <div className={classNames(style.data, isLastStep && style.dataLast)}>
          <p className={style.data__title}>{title}</p>

          <p className={style.data__description}>{description}</p>
        </div>

        <div className={style.action}>
          <Button type={isLastStep ? "play" : "icon"} onClick={nextStep} />
        </div>
      </div>
    </div>
  );
};
