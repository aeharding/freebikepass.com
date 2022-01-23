import styled from "@emotion/styled/macro";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { staticFields } from "../features/form/Download";
import Button from "../shared/Button";

const Note = styled.div`
  padding: 1rem;
  margin: 1.5rem 0 2rem;

  border-radius: 1rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  background: #e7d000;
  color: black;
`;

const Blockquote = styled.blockquote`
  margin: 0;
  padding: 1px var(--right-safe-area) 1px var(--left-safe-area);
  background: rgba(0, 0, 0, 0.2);
  font-family: monospace;

  @media (max-width: 500px) {
    margin: 0 calc(-1 * var(--right-safe-area)) 0
      calc(-1 * var(--left-safe-area));
  }
`;

const CheckboxLabel = styled(FormControlLabel)`
  && {
    margin: 0 1em;
  }
`;

export default function Agree() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  function submit() {
    sessionStorage["agreed"] = true;
    navigate("../info");
  }

  return (
    <>
      <p>
        In order to get a bike trail pass, you must acknowledge the following.
      </p>

      <Note>
        <FontAwesomeIcon icon={faQuestionCircle} /> Questions?{" "}
        <Link to="/faq">Check the FAQs</Link> for more information.
      </Note>

      <Blockquote>
        <p>
          This statement is submitted in support of an application for a
          commuter pass for the Capital City State Trail, subsidized by the Dane
          County Highway &amp; Transportation Department.
        </p>
        <p>
          The undersigned hereby certifies that he or she uses the Capital City
          State Trail primarily for transportation rather than recreational
          purposes, and will utilize a trail pass provided by Dane County
          primarily for Transportation purposes. (Transportation purposes means
          commuting to work, school, shopping or other necessary activities.)
        </p>{" "}
        <p>
          I will primarily use the Capital City State Trail for commuting
          between the following locations:
        </p>
        <ul>
          <li>
            From: {staticFields.From}, To: {staticFields.To}
          </li>
          <li>
            From: {staticFields.From_2} To: {staticFields.To_2}
          </li>
          <li>
            From: {staticFields.From_3} To: {staticFields.To_3}
          </li>
        </ul>
      </Blockquote>

      <br />

      <CheckboxLabel
        control={
          <Checkbox
            color="primary"
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

      <Button disabled={!checked} onClick={submit} fullWidth>
        Continue
      </Button>
    </>
  );
}
