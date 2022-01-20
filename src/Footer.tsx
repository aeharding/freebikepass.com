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
      👷‍♂️ by{" "}
      <a href="https://harding.dev" target="_blank" rel="noreferrer noopener">
        Alex
      </a>{" "}
      for you
    </FancyFooter>
  );
}
