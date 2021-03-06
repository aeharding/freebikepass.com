import styled from "@emotion/styled/macro";
import AnimateHeight from "react-animate-height";

const StyledQ = styled.div`
  margin: 0 -1rem;
  padding: 1em 0;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Question = styled.div`
  margin: 0 1rem;
`;

const Answer = styled.div`
  margin: 1em 1rem 0;
  font-size: 0.9em;
  cursor: initial;
`;

interface QProps {
  question: string;
  children: React.ReactNode;
  open: boolean;
  onClick?: () => void;
}

export default function Q({ question, children, onClick, open }: QProps) {
  return (
    <StyledQ onClick={onClick}>
      <Question>{question}</Question>
      <AnimateHeight duration={250} height={open ? "auto" : 0}>
        <Answer onClick={(e) => e.stopPropagation()}>{children}</Answer>
      </AnimateHeight>
    </StyledQ>
  );
}
