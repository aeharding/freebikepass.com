import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app with header text", () => {
  render(<App />);
  const headerAsideEl = screen.getByText(
    /Get a free 2022 Wisconsin State Trail Pass/i
  );
  expect(headerAsideEl).toBeInTheDocument();
});
