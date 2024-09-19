import { useMemo, useState } from "react";

import { Stepper } from "./_components/Stepper";

import { STEPS } from "./constants";

export const OnboardPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = useMemo(() => STEPS[activeStep], [activeStep]);

  const isLastStep = useMemo(
    () => activeStep === STEPS.length - 1,
    [activeStep]
  );

  const nextStep = () => {
    if (!isLastStep) {
      setActiveStep(activeStep + 1);
    }
  };

  return (
    <Stepper
      steps={{
        isLastStep,
        ...currentStep,
        nextStep
      }}
    />
  );
};
