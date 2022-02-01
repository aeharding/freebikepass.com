import styled from "@emotion/styled/macro";
import { ReactNode } from "react";

const ButtonLinkStyled = styled.div`
  text-align: center;
  padding: 0.8em 1em;
  color: #0073bb;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

interface ButtonLinkProps {
  children: ReactNode;
  onClick: () => void;
}

export default function ButtonLink({ children, onClick }: ButtonLinkProps) {
  return <ButtonLinkStyled onClick={onClick}>{children}</ButtonLinkStyled>;
}
