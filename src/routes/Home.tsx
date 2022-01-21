import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

const Container = styled.div`
  max-width: 650px;
`;

const Title = styled.h2`
  font-size: 3em;
  margin: 0 0 2rem;
`;

const Hr = styled.div`
  width: 40px;
  height: 5px;
  background: white;
`;

const Description = styled.div`
  margin: 2em 0;
`;

export default function Home() {
  return (
    <Container>
      <Title>
        Get a free {new Date().getFullYear()} Wisconsin State Trail Pass
      </Title>

      <Hr />

      <Description>
        <p>
          Everyone should be able to ride their bike for free. Unfortunately, a
          bike pass is required to ride your bike on certain trails outside the
          City of Madison.
        </p>
        <p>
          Order your <strong>FREE</strong> annual state trail pass now — so you
          have it when you need it.
        </p>
      </Description>

      <Link to="/agree">
        <Button>Order Free Bike Pass</Button>
      </Link>
    </Container>
  );
}
