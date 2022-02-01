import { Dialog } from "@material-ui/core";
import Button from "../../shared/Button";
import ButtonLink from "../../shared/ButtonLink";
import { useAppSelector } from "../../hooks";
import { pdf } from "./formSlice";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled/macro";

const Detail = styled.div`
  opacity: 0.8;
  font-size: 0.85em;
`;

const Divider = styled.div`
  margin: 0.5rem -1rem;
  background: #ddd;
  height: 1px;
  width: calc(100% + 2rem);
`;

const Data = styled.div`
  font-weight: 500;
`;

const StyledDialog = styled(Dialog)`
  backdrop-filter: blur(5px);

  .MuiPaper-root {
    padding: 1rem;

    background: white;
    color: black;

    h2 {
      margin: 0;
    }
  }
`;

const ButtonBar = styled.div`
  display: flex;

  > * {
    flex: 1 0 0;
  }
`;

interface ConfirmProps {
  open: boolean;
  close: () => void;
}

export default function Confirm({ open, close }: ConfirmProps) {
  const navigate = useNavigate();
  const payload = useAppSelector(pdf);

  function confirm() {
    navigate("../download");
  }

  if (!payload) return <></>;

  return (
    <StyledDialog open={open}>
      <h2>Please confirm your details</h2>

      <p>
        <Detail>Name</Detail>
        <Data>{payload.name}</Data>
        <Divider />
        <Detail>Phone number</Detail>
        <Data>{payload.phone}</Data>
        <Divider />
        <Detail>Address</Detail>
        <Data>
          {payload.street}
          <br />
          {payload.cityStateZip}
        </Data>
        <Divider />
        <Detail>Email</Detail>
        <Data>{payload.email}</Data>
      </p>

      <ButtonBar>
        <Button onClick={confirm}>Looks good</Button>
        <ButtonLink onClick={close}>Cancel</ButtonLink>
      </ButtonBar>
    </StyledDialog>
  );
}
