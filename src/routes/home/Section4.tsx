import styled from "@emotion/styled/macro";
import Tweets from "./Tweets/Tweets";

const Container = styled.div`
  display: flex;
  padding: 2rem;

  background: black;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;

  margin: 0 auto;
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
