import styled from "@emotion/styled/macro";
import { ReactComponent as bike } from "./bike.svg";
import { ReactComponent as flag } from "./flag.svg";

const FlagSvg = styled(flag)`
  width: 5em;
  height: auto;
`;

const Plus = styled.span`
  margin: 0 0.5rem;
  font-size: 2em;
  font-weight: 100;

  &:after {
    content: "+";
  }
`;

const BikeSvg = styled(bike)`
  width: 5em;
`;

/**
 * @returns "Game of Thrones" logo
 */
export default function Logo() {
  return (
    <>
      <FlagSvg /> <Plus /> <BikeSvg />
    </>
  );
}
