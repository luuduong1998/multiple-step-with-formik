import React from "react";

export type MuiStepResult = {
  activeStep: number;
  setActiveStep: React.Dispatch<number>;
};

export const useMuiStep = (): MuiStepResult => {
  const [activeStep, setActiveStep] = React.useState(0);
  return {
    activeStep,
    setActiveStep,
  };
};
