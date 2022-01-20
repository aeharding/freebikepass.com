import styled from "@emotion/styled/macro";
import { ReactComponent as logo } from "./logo.svg";

const LogoSvg = styled(logo)`
  width: 15em;
`;

/**
 * @returns "Game of Thrones" logo
 */
export default function Logo() {
  return <LogoSvg />;
}
