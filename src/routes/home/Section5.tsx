import styled from "@emotion/styled/macro";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../../shared/Section";

const StyledSection5 = styled.div`
  display: flex;
  padding: 0 0 2rem;

  background: linear-gradient(to right, #a5fecb, #20bdff, #5433ff);
  color: black;
`;

const Title = styled.h3`
  font-size: 3rem;

  font-weight: 100;

  strong {
    font-weight: 800;
  }

  aside {
    display: inline;
    font-weight: 300;
    font-size: 1.4rem;
    opacity: 0.3;

    @media (max-width: 550px) {
      display: block;
    }
  }
`;

const Benefits = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`;

const Benefit = styled.a`
  flex: 1 0 0;

  display: flex;
  flex-direction: column;
  padding: 1rem;

  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  text-decoration: none;

  transition: transform 100ms ease-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const BenefitTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: normal;
  margin: 0;
`;

const BenefitDescription = styled.p`
  flex: 1;

  font-size: 0.9rem;
`;

const BenefitGo = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.5);

  align-self: end;
`;

export default function Section5() {
  return (
    <StyledSection5>
      <Section>
        <Title>
          There's <strong>more</strong> <aside>benefits to #GoByBike</aside>
        </Title>

        <Benefits>
          <Benefit
            href="https://www.roundtripgreatermadison.org/rp2/Home/ERHInfo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BenefitTitle>Emergency Ride Home program</BenefitTitle>
            <BenefitDescription>
              Do you worry about if your bike breaks down during your ride, or
              the weather gets bad while you're out?{" "}
              <strong>Get a free lift!</strong> Participants are eligible for up
              to six Union Cab vouchers per year, good for up to $75 per ride.
            </BenefitDescription>

            <BenefitGo icon={faAngleRight} />
          </Benefit>
          <Benefit
            href="https://bicyclebenefits.org/cities/6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BenefitTitle>The Bicycle Benefits program</BenefitTitle>

            <BenefitDescription>
              Get discounts for biking to many local Madison retailers -
              including Fresh Madison, Metcalfe's, Ian's Pizza, and more!
            </BenefitDescription>
            <BenefitGo icon={faAngleRight} />
          </Benefit>
        </Benefits>
      </Section>
    </StyledSection5>
  );
}
