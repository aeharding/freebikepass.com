import styled from "@emotion/styled/macro";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";

const Blockquote = styled.blockquote`
  margin: 0;
  padding: 0.5em 1em;
  background: rgba(0, 0, 0, 0.2);
  font-family: monospace;
`;

export default function Agree() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  function submit() {
    navigate("/order");
  }

  return (
    <>
      <h3>Step 1: Agreement </h3>

      <p>
        🥱 (I promise this is the most boring part.) In order to get a bike
        trail pass, you must acknowledge the following. And no, we don't know
        what "necessary" means. Only you know what's "necessary" for you to live
        your life.
      </p>

      <Blockquote>
        This statement is submitted in support of an application for a commuter
        pass for the Capital City State Trail, subsidized by the Dane County
        Highway &amp; Transportation Department. The undersigned hereby
        certifies that he or she uses the Capital City State Trail primarily for
        transportation rather than recreational purposes, and will utilize a
        trail pass provided by Dane County primarily for Transportation
        purposes. (Transportation purposes means commuting to work, school,
        shopping or other necessary activities.) I will primarily use the
        Capital City State Trail for commuting between the following locations:
        <ul>
          <li>
            From: Home, To: Work, school, shopping or other necessary activities
          </li>
          <li>
            From: Work, school, shopping or other necessary activities To: Home
          </li>
          <li>
            From: Work, school, shopping or other necessary activities To: Work,
            school, shopping or other necessary activities
          </li>
        </ul>
      </Blockquote>

      <br />

      <FormControlLabel
        control={
          <Checkbox
            onChange={(_, checked) => {
              setChecked(checked);
            }}
            checked={checked}
          />
        }
        label="I have read the above statements and they are true and correct and
        submitted for the purpose of obtaining a subsidized commuter trail pass.
        I understand a trail permit will be mailed to me by Dane County Parks
        upon receipt of this form."
      />

      <br />
      <br />

      <Button disabled={!checked} onClick={submit}>
        Continue
      </Button>
    </>
  );
}
