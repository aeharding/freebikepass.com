import styled from "@emotion/styled/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Link = styled.a`
  display: flex;
  text-decoration: none;
`;

const Blockquote = styled.blockquote`
  margin: 0;

  display: flex;
  flex-direction: column;

  border: 1px solid #555;
  border-radius: 1rem;
  padding: 1rem;
`;

const TwitterIcon = styled(FontAwesomeIcon)`
  margin-left: auto;
  align-self: flex-start;
  font-size: 1.4rem;

  color: #1da1f2;
`;

const User = styled.div`
  display: flex;
  margin-bottom: 1rem;

  align-items: center;
`;

const Avatar = styled.img`
  width: 3rem;
  border-radius: 2rem;
  margin-right: 1rem;
`;

const Handle = styled.div`
  font-size: 0.9rem;
  color: #888;
`;

const Body = styled.div`
  font-size: 0.9rem;
`;

const Date = styled.div`
  margin-top: auto;
  padding-top: 0.5rem;

  font-size: 0.8rem;
  color: #888;
`;

export interface ITweet {
  body: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  url: string;
  date: string;
}

interface TweetProps extends ITweet {}

export default function Tweet({ body, user, url, date }: TweetProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Blockquote>
        <User>
          <Avatar src={user.avatar} />
          <div>
            {user.name}
            <br />
            <Handle>@{user.handle}</Handle>
          </div>
          <TwitterIcon icon={faTwitter} />
        </User>
        <Body>{body}</Body>
        <Date>{date}</Date>
      </Blockquote>
    </Link>
  );
}