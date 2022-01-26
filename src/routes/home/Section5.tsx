import styled from "@emotion/styled/macro";
import {
  faAngleRight,
  faTaxi,
  faShoppingCart,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "../../shared/Section";
import { ReactComponent as CargoBike } from "./silhouettes/cargo.svg";

const StyledSection5 = styled.div`
  position: relative;

  display: flex;
  padding: 0 0 2rem;
  overflow: hidden;

  background: linear-gradient(to right, #a5fecb, #20bdff, #5433ff);
  color: black;
`;

const StyledCargoBike = styled(CargoBike)`
  position: absolute;

  bottom: 0;
  right: 0;

  width: 60%;
  max-width: 450px;
  transform: scale(-1, 1) rotate(-0.4deg) translateY(2px);

  @media (max-width: 800px) {
    width: 100%;
  }

  @media (min-width: 2050px) {
    left: 50%;
    right: initial;
    transform: scale(-1, 1) rotate(-0.4deg)
      translate(calc((100% + 100px) * -1), -2px);
  }

  opacity: 0.2;
`;

const starSize = "600px";

const Stars = styled.div`
  background: url(/stars.png) repeat;
  background-size: ${starSize};
  position: absolute;
  top: 0;
  bottom: 0;
  left: -${starSize};

  width: calc(100% + ${starSize});

  animation: move 40s linear;
  animation-iteration-count: infinite;

  @keyframes move {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(${starSize});
    }
  }
`;

const Title = styled.h3`
  font-size: 3rem;
  margin: 2rem 0;
  position: relative;

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
    font-size: 1.4em;
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

  svg {
    font-size: 2rem;
  }
`;

export default function Section5() {
  return (
    <StyledSection5>
      <Stars />
      <StyledCargoBike />
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
              <FontAwesomeIcon icon={faTaxi} /> Emergency Ride Home
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
              <FontAwesomeIcon icon={faShoppingCart} /> Bicycle Benefits Program
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
