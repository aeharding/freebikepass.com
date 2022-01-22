import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

const StyledNav = styled.div`
  display: flex;
  grid-gap: 1em;

  a {
    text-decoration: none;
    padding: 0.5em;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/faq">FAQs</Link>
      <Link to="/privacy">Privacy</Link>
    </StyledNav>
  );
}
