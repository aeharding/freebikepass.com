import styled from "@emotion/styled/macro";

const FancyFooter = styled.footer`
  margin: 1em;
  text-align: center;
  color: var(--soft-text);

  transition: color 100ms ease-out;

  &:hover {
    color: inherit;
  }
`;

export default function Footer() {
  return (
    <FancyFooter>
      BLACK LIVES MATTER
      <br />
      This website is not associated with any government entity.
    </FancyFooter>
  );
}
