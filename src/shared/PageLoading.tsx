import styled from "@emotion/styled/macro";
import { CircularProgress, CircularProgressProps } from "@material-ui/core";

const Container = styled.div`
  position: relative;
  margin-top: 20vh;

  &:after {
    content: "loading";

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 1.2em;
    font-weight: 100;
  }
`;

export default function PageLoading(
  // value: 0-100
  props: Required<Pick<CircularProgressProps, "value">>
) {
  return (
    <Container>
      <CircularProgress
        variant="determinate"
        color="inherit"
        thickness={0.4}
        size={140}
        {...props}
      />
    </Container>
  );
}
