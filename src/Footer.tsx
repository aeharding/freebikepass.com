import styled from "@emotion/styled/macro";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "./shared/Section";

const StyledFooter = styled.div`
  margin-top: 2rem;
  padding: 5em 1rem;

  text-align: right;
  font-size: 0.9em;
  background: black;
  color: #ccc;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const Disclaimer = styled.div`
  margin-bottom: 1rem;
  color: #999;
`;

const BLM = styled.div`
  font-weight: bold;
`;

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Section>
          <Disclaimer>
            <FontAwesomeIcon icon={faInfoCircle} /> This site is not affiliated
            with any government entity.
          </Disclaimer>
          <BLM>✊🏿✊🏾✊🏽 #BlackLivesMatter</BLM>
        </Section>
      </StyledFooter>
    </>
  );
}
