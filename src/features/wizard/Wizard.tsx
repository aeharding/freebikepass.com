import styled from "@emotion/styled/macro";
import React, { useEffect, useState } from "react";
import { matchPath, useLocation } from "react-router-dom";
import Step from "./Step";

const StyledWizard = styled.div`
  display: flex;

  margin: 2rem 0;
`;

export interface IStep {
  /**
   * The react route to match for this step
   */
  route: string;

  /**
   * The human readable name of the step
   */
  name: string;

  /**
   * The human readable name of the step, for mobile devices
   */
  mobileName: string;
}

interface WizardProps {
  steps: IStep[];
}

export default function Wizard({ steps }: WizardProps) {
  const { pathname } = useLocation();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    setCurrentStepIndex(
      steps.findIndex(
        (step) => !!matchPath({ path: `/order/${step.route}` }, pathname)
      )
    );
  }, [steps, pathname]);

  return (
    <StyledWizard>
      {steps.map((step, index) => (
        <Step
          step={step}
          currentStepIndex={currentStepIndex}
          index={index}
          key={step.route}
        />
      ))}
    </StyledWizard>
  );
}
