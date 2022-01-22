import styled from "@emotion/styled/macro";
import Button from "../shared/Button";
import MailExample from "../features/mail/Mail";
import { Link } from "react-router-dom";

const Danger = styled.div`
  margin: 1em auto;
  width: 300px;
  text-align: center;
  padding: 1em;
  background: red;
  font-weight: bold;
  border-radius: 2em;
`;

export default function Mail() {
  return (
    <>
      <h3>Step 4: Send your form</h3>

      <p>
        Write an email to{" "}
        <a href="mailto:dane-parks@countyofdane.com">
          dane-parks@countyofdane.com
        </a>
        . Click the below example to autofill a new email.
      </p>

      <Danger>Make sure to attach your form!</Danger>

      <MailExample
        to="dane-parks@countyofdane.com"
        subject="Dane County Commuter Pass Application"
        body={
          "Hello,\n\nI have attached my form for a Dane County bike commuter pass.\n\nThanks!"
        }
      />

      <br />

      <Link to="/done">
        <Button fullWidth>Continue</Button>
      </Link>
    </>
  );
}
