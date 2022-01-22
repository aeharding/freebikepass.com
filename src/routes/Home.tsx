import styled from "@emotion/styled/macro";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  max-width: 650px;
`;

const LearnMoreLink = styled(Link)`
  padding: 1em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Img = styled.img`
  width: 40%;
  margin-left: 2em;
  border-radius: 4em;
  border: 0.75em solid rgba(0, 0, 0, 0.8);
`;

export default function Home() {
  useEffect(() => {
    clearStorage();
  }, []);

  function clearStorage() {
    sessionStorage.clear();
  }

  return (
    <Container>
      <div>
        <Title>
          Get a free {new Date().getFullYear()} Wisconsin State Trail Pass
        </Title>

        <Hr />

        <Description>
          <p>
            Everyone should be able to ride their bike for free. Unfortunately,
            a bike pass is required to ride your bike on certain trails outside
            the City of Madison.
          </p>
          <p>
            Order your <strong>FREE</strong> annual state trail pass now — so
            you have it when you need it.
          </p>
        </Description>

        <Link to="/agree">
          <Button>Order Free Bike Pass</Button>
        </Link>
        <LearnMoreLink to="/faq">Learn More</LearnMoreLink>
      </div>

      <Img src="/path.jpg" alt="Bike Path in Dane County" />
    </Container>
  );
}
