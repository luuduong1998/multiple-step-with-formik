import React, { useMemo } from 'react';

export type MuiStepResult = {
  activeStep: number;
  setActiveStep: React.Dispatch<number>;
  isLastStep: boolean;
};

export const useMuiStep = (stepCount: number): MuiStepResult => {
  const [activeStep, setActiveStep] = React.useState(0);
  const isLastStep = useMemo(() => activeStep === stepCount - 1, [activeStep]);

  return {
    activeStep,
    setActiveStep,
    isLastStep,
  };
};
