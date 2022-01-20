import styled from "@emotion/styled/macro";

/**
 * Blank data placeholder
 */
export default styled.span`
  color: var(--soft-text);
  font-size: 0.9em;

  &:before {
    content: "(unknown)";
  }
`;
