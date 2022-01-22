import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import Button from "../../shared/Button";
import Section from "../../shared/Section";

const StyledContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledSection2 = styled.div`
  background: url(/night.jpg);
  background-size: cover;
  background-position: 50% 30%;

  height: 500px;
`;

const Title = styled.h2`
  line-height: 1.1;
  font-size: 5vw;
  font-weight: 800;
  text-align: right;
  margin: 7% 0 0;

  @media (min-width: 1000px) {
    font-size: 3em;
  }
`;

const Description = styled.div`
  width: 300px;
  font-size: 0.85em;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 1em;
  margin: 1rem 0;

  li:not(:last-child) {
    padding-bottom: 1em;
  }
`;

const Light = styled.span`
  font-weight: 100;
`;

export default function Section2() {
  return (
    <StyledSection2>
      <StyledContainer>
        <Title>
          <Light>Is this the year you</Light>
          <br /> ditch your car?
        </Title>

        <Description>
          <ul>
            <li>
              Road traffic crashes are a leading cause of death in the United
              States for people aged 1–54<sup>1</sup>
            </li>
            <li>
              The average American spends almost 20% of their income on driving
              <sup>2</sup>
            </li>
          </ul>
        </Description>

        <Link to="/agree">
          <Button dark>Order Free Bike Pass</Button>
        </Link>
      </StyledContainer>
    </StyledSection2>
  );
}

// https://www.cdc.gov/injury/features/global-road-safety/index.html"

// https://www.fool.com/the-ascent/credit-cards/articles/average-american-spends-way-more-transportation-youd-guess/
