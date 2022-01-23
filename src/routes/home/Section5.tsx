import styled from "@emotion/styled/macro";
import { faAngleRight, faCar, faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../../shared/Section";
import { ReactComponent as BikeFamily } from "./bikeFamily.svg";

const StyledSection5 = styled.div`
  position: relative;

  display: flex;
  padding: 0 0 2rem;
  overflow: hidden;

  background: linear-gradient(to right, #a5fecb, #20bdff, #5433ff);
  color: black;
`;

const StyledBikeFamily = styled(BikeFamily)`
  position: absolute;

  bottom: 0;
  right: 0;

  width: 60%;
  max-width: 600px;

  @media (max-width: 800px) {
    width: 100%;
  }

  transform: rotate(0.5deg) translateY(1%);
  opacity: 0.2;
`;

const Title = styled.h3`
  font-size: 3rem;
  margin: 2rem 0;

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
  grid-gap: 2rem;

  position: relative;
`;

const Benefit = styled.a`
  flex: 1 0 0;

  display: flex;
  flex-direction: column;
  padding: 1rem;

  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  text-decoration: none;
  backdrop-filter: blur(4px);

  transition: transform 100ms ease-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const BenefitTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: normal;
  margin: 0;

  display: flex;
  align-items: center;

  svg {
    font-size: 1.3em;
    margin-right: 1rem;
    margin-left: 0.5rem;
  }
`;

const BenefitDescription = styled.p`
  flex: 1;

  font-size: 0.9rem;
`;

const BenefitGo = styled.div`
  align-self: flex-end;

  display: flex;
  align-items: center;
  grid-gap: 1rem;

  color: white;

  svg {
    color: rgba(255, 255, 255, 0.5);
    font-size: 2rem;
  }
`;

export default function Section5() {
  return (
    <StyledSection5>
      <StyledBikeFamily />
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
            <BenefitTitle>
              <FontAwesomeIcon icon={faCar} /> Emergency Ride Home
            </BenefitTitle>
            <BenefitDescription>
              Do you worry about your bike breaking down during your ride, or
              the weather catching you unprepared while you're out?{" "}
              <strong>Catch a free ride!</strong> You can redeem six Union Cab
              vouchers per year, good for up to $75 per ride.
            </BenefitDescription>

            <BenefitGo>
              <span>I'm Down</span> <FontAwesomeIcon icon={faAngleRight} />
            </BenefitGo>
          </Benefit>
          <Benefit
            href="https://bicyclebenefits.org/cities/6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BenefitTitle>
              <FontAwesomeIcon icon={faTags} /> Bicycle Benefits Program
            </BenefitTitle>

            <BenefitDescription>
              Get discounts for riding to many local Madison shops - including
              Fresh Madison, Willy Street Co-op, Metcalfe's, Ian's Pizza, and
              more!
            </BenefitDescription>
            <BenefitGo>
              <span>Let's Do This</span> <FontAwesomeIcon icon={faAngleRight} />
            </BenefitGo>
          </Benefit>
        </Benefits>
      </Section>
    </StyledSection5>
  );
}
