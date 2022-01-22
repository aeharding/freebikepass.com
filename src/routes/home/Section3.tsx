import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import Button from "../../shared/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;

  background: url(/arb.jpg);
  background-size: cover;
  background-position: 50% 15%;

  color: black;
`;

const Description = styled.div`
  font-size: 2em;

  margin: 2rem 1rem;
  max-width: 700px;

  font-weight: 800;
  text-align: center;

  span {
    background: #00ff37;
    filter: drop-shadow(0.5rem 0 0 #00ff37) drop-shadow(-0.5rem 0 0 #00ff37);
    box-decoration-break: clone;
  }
`;

export default function Section3() {
  return (
    <>
      <Container>
        <Description>
          <span>
            Bicycling is the most efficient form of transportation known to
            humankind
          </span>
        </Description>

        <Link to="/agree">
          <Button dark>Riding is climate action. Order Free Bike Pass</Button>
        </Link>
      </Container>
    </>
  );
}
