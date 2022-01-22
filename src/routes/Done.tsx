import styled from "@emotion/styled/macro";
import {
  faFacebook,
  faFacebookMessenger,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

const ShareButton = styled(Button)`
  svg {
    font-size: 1.1em;
    margin: 0 5px;
  }
`;

const Center = styled.div`
  text-align: center;

  a {
    text-decoration: none;
  }
`;

export default function Done() {
  function share() {
    navigator.share({ url: "https://freebikepass.com" });
  }

  return (
    <>
      <h3>You're all set! 😁</h3>

      <p>
        Happy riding! Passes are usually processed and delivered within a week
        or two. If you liked this site, please share!
      </p>

      {"share" in navigator ? (
        <>
          <ShareButton fullWidth onClick={share}>
            Share <FontAwesomeIcon icon={faFacebook} />{" "}
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebookMessenger} />
          </ShareButton>

          <br />
          <br />

          <Center>
            <Link to="/">Done</Link>
          </Center>
        </>
      ) : (
        <Link to="/">
          <ShareButton fullWidth>Done</ShareButton>
        </Link>
      )}
    </>
  );
}
