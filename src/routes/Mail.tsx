import styled from "@emotion/styled/macro";
import Button from "../shared/Button";
import MailExample from "../features/mail/Mail";
import { Link, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { form } from "../features/form/formSlice";

const Danger = styled.div`
  margin: 1em auto;
  max-width: 300px;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;

  border-radius: 2em;
  text-align: center;
  font-weight: bold;
  background: red;
`;

export default function Mail() {
  const formData = useAppSelector(form);

  if (!formData) return <Navigate to="/order/info" replace />;

  return (
    <div>
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
        subject="Subsidized Bike Pass Application"
        body={`Hello,\n\nI have attached my form for a subsidized Wisconsin bike trail pass.\n\nThanks!\n${formData?.name}`}
      />

      <br />

      <Link to="../done">
        <Button fullWidth>I've sent the email</Button>
      </Link>
    </div>
  );
}
