import styled from "@emotion/styled/macro";
import { faExclamationTriangle } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isIOS } from "./helpers/ua";

const Container = styled.div`
  margin: 4rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;

  text-align: center;
`;

const DangerIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: orange;
`;

export default function FacebookInAppBrowserWarning() {
  return (
    <Container>
      <DangerIcon icon={faExclamationTriangle} />
      <div>
        Please open freebikepass.com
        <br />
        in{" "}
        {isIOS() ? (
          <>
            the <strong>Safari app</strong>
          </>
        ) : (
          <>
            <strong>your preferred web browser app</strong> <br />
          </>
        )}{" "}
        to continue.
      </div>
    </Container>
  );
}
