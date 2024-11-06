import { useMemo, useState } from "react";
import { useNavigate } from "react-router";

import { Stepper } from "./_components";

import { storage } from "utils";

import { STEPS } from "./constants";

export const OnboardPage = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);

  const currentStep = useMemo(() => STEPS[activeStep], [activeStep]);

  const isLastStep = useMemo(
    () => activeStep === STEPS.length - 1,
    [activeStep]
  );

  const handleActionClick = () => {
    if (!isLastStep) {
      setActiveStep(activeStep + 1);
      return;
    }

    storage.set("isOnboardSuccess", true);
    navigate("/play");
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
