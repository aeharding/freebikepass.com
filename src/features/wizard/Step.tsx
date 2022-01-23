import { css } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";
import { IStep } from "./Wizard";

const dividerWidth = "5px";

const StyledStep = styled.div<{ matches: boolean }>`
  flex: 1 0 0;
  position: relative;

  text-align: center;

  padding-top: calc(${dividerWidth} + 10px);

  ${({ matches }) =>
    matches &&
    css`
      font-weight: bold;
    `}
`;

const Name = styled.div`
  font-size: 0.9em;

  @media (max-width: 500px) {
    display: none;
  }
`;

const MobileName = styled.div`
  font-size: 0.8em;

  @media (min-width: 501px) {
    display: none;
  }
`;

const Divider = styled.div<{ active: boolean }>`
  position: absolute;
  left: 0;
  top: 0;

  transform: translate(-50%, -50%);

  height: ${dividerWidth};
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);

  ${({ active }) =>
    active &&
    css`
      background: #6cf;
    `}
`;

const Dot = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: 1;

  width: 1em;
  height: 1em;
  border-radius: 50%;

  background: #999;

  ${({ active }) =>
    active &&
    css`
      background: #6cf;
    `}
`;

interface StepProps {
  step: IStep;
  currentStepIndex: number;
  index: number;
}

export default function Step({ step, currentStepIndex, index }: StepProps) {
  return (
    <>
      <StyledStep matches={currentStepIndex === index}>
        <Name>{step.name}</Name>
        <MobileName>{step.mobileName}</MobileName>
        {index !== 0 && <Divider active={currentStepIndex >= index} />}
        <Dot active={currentStepIndex >= index} />
      </StyledStep>
    </>
  );
}
