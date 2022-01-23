import styled from "@emotion/styled/macro";
import Section from "../../shared/Section";

const StyledCitations = styled.div`
  padding: 1rem 0;
  font-size: 0.8em;
  border-bottom: 1px solid #222;

  background: black;
  color: #777;
`;

export default function Citations() {
  return (
    <StyledCitations>
      <Section>
        <div>
          <sup>1</sup> According to the Centers for Disease Control and
          Prevention -{" "}
          <a
            href="https://www.cdc.gov/injury/features/global-road-safety/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.cdc.gov/injury/features/global-road-safety/index.html
          </a>
        </div>
        <div>
          <sup>2</sup> According to the Bureau of Transportation Statistics, the
          average household spent 17% of income on transportation in 2019, with
          the overwhelming majority being automotive related expenditures.{" "}
          <a
            href="https://data.bts.gov/stories/s/ida7-k95k"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://data.bts.gov/stories/s/ida7-k95k
          </a>
        </div>
      </Section>
    </StyledCitations>
  );
}
