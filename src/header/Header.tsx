import styled from "@emotion/styled/macro";
import Logo from "./Logo";
import { maxBodyWidth } from "../App";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;

  display: flex;
  align-items: center;
`;

const HeaderContents = styled.header`
  margin-top: 2.5em;
  margin-right: var(--right-safe-area);
  margin-bottom: 1.5em;
  margin-left: var(--left-safe-area);

  display: flex;
  align-items: center;
  justify-content: space-between;

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
    <HeaderContents>
      <StyledLink to="/">
        <Logo />
      </StyledLink>

      <Nav />
    </HeaderContents>
  );
}
