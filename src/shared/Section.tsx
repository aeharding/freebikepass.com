import styled from "@emotion/styled/macro";

export const maxBodyWidth = "975px";

export default styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: ${maxBodyWidth};
  margin: 0 auto;

  padding: 0 var(--right-safe-area) 0 var(--left-safe-area);
  box-sizing: border-box;
`;
