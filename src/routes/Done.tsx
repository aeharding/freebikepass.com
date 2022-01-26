import styled from "@emotion/styled/macro";
import {
  faFacebook,
  faFacebookMessenger,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import { ReactComponent as Boy } from "../routes/home/silhouettes/boy.svg";
import { ReactComponent as Girl } from "../routes/home/silhouettes/girl.svg";
import { css } from "@emotion/react/macro";

const Description = styled.p`
  margin-bottom: 3rem;
`;

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

const SilhouetteContainer = styled.div`
  height: 200px;
  margin-top: auto;

  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  grid-gap: 2rem;

  transform: translateY(2rem);
`;

const sharedSilhouetteStyles = css`
  flex: 1 0 0;

  max-width: 200px;

  opacity: 0.15;
  filter: invert(1);
`;

const StyledBoy = styled(Boy)`
  ${sharedSilhouetteStyles}
`;

const StyledGirl = styled(Girl)`
  ${sharedSilhouetteStyles}
`;

export default function Done() {
  function share() {
    navigator.share({ url: "https://freebikepass.com" });
  }

  return (
    <>
      <div>
        <h3>You're all set! 😁</h3>

        <Description>
          Happy riding! Passes are usually processed and delivered within a week
          or two. If you liked this site, please share!
        </Description>
      </div>

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

      <SilhouetteContainer>
        <StyledBoy />
        <StyledGirl />
      </SilhouetteContainer>
    </>
  );
}
