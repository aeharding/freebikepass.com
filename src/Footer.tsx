import styled from "@emotion/styled/macro";

const FancyFooter = styled.footer`
  margin: 0.5em;
  text-align: center;
  color: var(--soft-text);

  transition: color 100ms ease-out;

  &:hover {
    color: inherit;
  }
`;

const BLM = styled.div`
  padding: 0.5em;

  background: black;
  text-align: center;
`;

export default function Footer() {
  return (
    <>
      <FancyFooter>
        <br />
        This website is not associated with any government entity.
      </FancyFooter>
      <BLM>✊🏿✊🏾✊🏽 #BlackLivesMatter </BLM>
    </>
  );
}
