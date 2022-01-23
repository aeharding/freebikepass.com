import styled from "@emotion/styled/macro";
import { Dialog } from "@material-ui/core";
import mailToLink from "mailto-link";
import { useState } from "react";
import Button from "../../shared/Button";

const StyledMail = styled.div`
  color: black;
  padding: 1em;
  margin: 0 auto;
  max-width: 400px;
  border-radius: 2em;
  background: white;
  white-space: break-spaces;
  cursor: pointer;
`;

const StyledDialog = styled(Dialog)`
  backdrop-filter: blur(5px);

  .MuiPaper-root {
    background: #001e5f;
    padding: 1rem;

    h2 {
      margin: 0;
    }
  }
`;

interface MailProps {
  to: string;
  subject: string;
  body: string;
}

export default function Mail({ to, subject, body }: MailProps) {
  const link = mailToLink({ to, subject, body });
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <StyledMail onClick={() => setOpen(true)}>
        <strong>To:</strong> {to}
        <br />
        <strong>Subject:</strong> {subject}
        <br />
        <br />
        {body}
      </StyledMail>
      <StyledDialog onClose={handleClose} open={open}>
        <h2>Reminder: Manually attach the form to your email!</h2>

        <p>
          <strong>You must attach the form manually</strong> that you just
          downloaded. Do you understand?
        </p>

        <a href={link} onClick={handleClose}>
          <Button fullWidth>I understand, I'll attach it</Button>
        </a>
      </StyledDialog>
    </>
  );
}
