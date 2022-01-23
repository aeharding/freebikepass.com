import styled from "@emotion/styled/macro";
import Tweets from "./Tweets/Tweets";

const Container = styled.div`
  display: flex;
  padding: 2rem;

  background: black;
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;

  max-width: 1600px;

  margin: 0 auto;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export default function Section4() {
  return (
    <Container>
      <Grid>
        <Tweets />
      </Grid>
    </Container>
  );
}
