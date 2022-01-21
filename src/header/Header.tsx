import styled from "@emotion/styled/macro";
import Logo from "./Logo";
import { maxBodyWidth } from "../App";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HeaderContents = styled.header`
  margin-top: 2.5em;
  margin-right: var(--right-safe-area);
  margin-bottom: 1.5em;
  margin-left: var(--left-safe-area);

  display: flex;
  align-items: center;

  cursor: pointer;

  @media (min-width: calc(${() => maxBodyWidth} + 1rem)) {
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    margin-top: 1.5em;
    margin-bottom: 0.5rem;

    svg {
      margin-bottom: 0.5rem;
    }
  }
`;

/**
 * @returns Header
 */
export default function Header() {
  return (
    <StyledLink to="/">
      <HeaderContents>
        <Logo />
      </HeaderContents>
    </StyledLink>
  );
}
