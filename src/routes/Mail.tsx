import styled from "@emotion/styled/macro";
import Button from "../shared/Button";
import MailExample from "../features/mail/Mail";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FormPayload } from "../features/form/Download";

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
  const navigate = useNavigate();
  const [data, setData] = useState<FormPayload | undefined>();

  useEffect(() => {
    if (!sessionStorage["form"]) {
      navigate("/order/info", { replace: true });
      return;
    }

    setData(JSON.parse(sessionStorage["form"]));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        subject="Subsidized Bike Pass Application"
        body={`Hello,\n\nI have attached my form for a subsidized Wisconsin bike trail pass.\n\nThanks!\n${data?.name}`}
      />

      <br />

      <Link to="../done">
        <Button fullWidth>I've sent the email</Button>
      </Link>
    </>
  );
}
