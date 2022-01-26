import styled from "@emotion/styled/macro";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;

  margin: auto;

  text-align: center;
`;

const Icon = styled.div`
  display: block;
  opacity: 0.6;

  &:after {
    content: "";
    display: block;
    width: 45px;
    height: 45px;
    margin: 8px;
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: loading-ring 1.2s linear infinite;
  }

  @keyframes loading-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <Icon />
      Loading...
    </LoadingContainer>
  );
}
