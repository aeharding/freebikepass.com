import styled from "@emotion/styled/macro";
import mailToLink from "mailto-link";

const StyledMail = styled.a`
  display: block;
  text-decoration: none;
  color: black;
  padding: 1em;
  margin: 0 auto;
  max-width: 400px;
  border-radius: 2em;
  background: white;
  white-space: break-spaces;
`;

interface MailProps {
  to: string;
  subject: string;
  body: string;
}

export default function Mail({ to, subject, body }: MailProps) {
  const link = mailToLink({ to, subject, body });

  return (
    <StyledMail href={link}>
      <strong>To:</strong> {to}
      <br />
      <strong>Subject:</strong> {subject}
      <br />
      <br />
      {body}
    </StyledMail>
  );
}
