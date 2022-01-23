import styled from "@emotion/styled/macro";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import Section from "../shared/Section";
import Section2 from "./home/Section2";
import Section3 from "./home/Section3";
import Section4 from "./home/Section4";
import Citations from "./home/Citations";
import { useAppDispatch } from "../hooks";
import { clear } from "../features/form/formSlice";

const StyledHome = styled.div`
  margin-bottom: -2rem;
`;

const Section1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 3em;
  margin: 0 0 2rem;
  line-height: 1.2;

  @media (max-width: 500px) {
    font-size: 2em;
  }
`;

const Hr = styled.div`
  width: 40px;
  height: 5px;
  background: white;
`;

const Description = styled.div`
  margin: 2em 0;
`;

const LearnMoreLink = styled(Link)`
  padding: 1em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Img = styled.img`
  width: 100vw;
  object-fit: cover;
  object-position: 50% 30%;
  height: 300px;
  margin: 1rem -1rem 0;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);

  @media (min-width: 801px) {
    width: 40%;
    margin: 0 0 0 2em;
    border-radius: 1em;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clear());
  }, [dispatch]);

  return (
    <StyledHome>
      <Section>
        <Section1>
          <div>
            <Title>
              Get a free {new Date().getFullYear()} Wisconsin State Trail Pass
            </Title>

            <Hr />

            <Description>
              <p>
                Everyone should be able to ride their bike for free.
                Unfortunately, a bike pass is required to ride your bike on
                certain trails outside the City of Madison.
              </p>
              <p>
                If you ride primarily for transportation purposes, you qualify
                for a <strong>FREE</strong> annual state trail pass. It only
                take a few minutes to order!
              </p>
            </Description>

            <Link to="/order">
              <Button>Order Free Bike Pass</Button>
            </Link>
            <LearnMoreLink to="/faq">Learn More</LearnMoreLink>
          </div>

          <Img src="/path.jpg" alt="Bike Path in Dane County" />
        </Section1>
      </Section>

      <Section2 />

      <Section4 />

      <Section3 />

      <Citations />
    </StyledHome>
  );
}
