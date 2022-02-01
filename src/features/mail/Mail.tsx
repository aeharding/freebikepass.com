import styled from "@emotion/styled/macro";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    max-width: 350px;
    padding: 1rem;
    border: 1rem red solid;
    background: white;
    color: black;

    h2 {
      margin: 0;
    }
  }
`;

const WarningIcon = styled(FontAwesomeIcon)`
  color: red;
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
        <h2>
          <WarningIcon icon={faExclamationCircle} /> Reminder: Form must be
          manually attached!
        </h2>

        <p>
          <strong>You must attach the form</strong> you just downloaded{" "}
          <strong>manually</strong> to the email you send. Do you understand?
        </p>

        <a href={link} onClick={handleClose}>
          <Button fullWidth>I understand, I'll attach it</Button>
        </a>
      </StyledDialog>
    </>
  );
}
