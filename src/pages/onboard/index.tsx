import { useMemo, useState } from "react";

import { Stepper } from "./_components";

import { STEPS } from "./constants";

export const OnboardPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = useMemo(() => STEPS[activeStep], [activeStep]);

  const isLastStep = useMemo(
    () => activeStep === STEPS.length - 1,
    [activeStep]
  );

  const handleActionClick = () => {
    if (!isLastStep) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Stepper
      description={currentStep.description}
      image={currentStep.image}
      buttonType={isLastStep ? "play" : "icon"}
      onActionClick={handleActionClick}
      title={currentStep.title}
    />
  );
};
