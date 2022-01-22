import { css } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  fullWidth?: boolean;
  dark?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  padding: 0.8em 1em;
  font-size: 1em;

  background: #6cf;
  color: white;

  border: 0;
  border-radius: 0;
  appearance: none;
  cursor: pointer;

  &:hover {
    background: #5ec0f1;
  }

  &:disabled {
    background: rgba(0, 0, 0, 0.2);
    pointer-events: none;
  }

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  ${({ dark }) =>
    dark &&
    css`
      background: #0073bb;

      &:hover {
        background: #0086da;
      }
    `}
`;

export default function Button({ ...props }: ButtonProps) {
  return <StyledButton {...(props as any)} />;
}
