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
  width: 100%;

  border: 1px solid #555;
  border-radius: 1rem;
  padding: 1rem;
  min-width: 0;
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

const UserInfo = styled.div`
  margin-right: 0.5rem;
  min-width: 0;
`;

const UserText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
  };
  url: string;
  date: string;
}

interface TweetProps extends ITweet {}

export default function Tweet({ body, user, date, url }: TweetProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Blockquote>
        <User>
          <Avatar src={`/twitter-avatars/${user.handle.toLowerCase()}.jpg`} />
          <UserInfo>
            <UserText>{user.name}</UserText>
            <Handle>
              <UserText>@{user.handle}</UserText>
            </Handle>
          </UserInfo>
          <TwitterIcon icon={faTwitter} />
        </User>
        <Body>{body}</Body>
        <Date>{date}</Date>
      </Blockquote>
    </Link>
  );
}
