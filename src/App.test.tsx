import { createStore } from "./store";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";

test("renders app with header text", () => {
  const store = createStore();

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerAsideEl = screen.getByText(
    /Get a free 2022 Wisconsin State Trail Pass/i
  );
  expect(headerAsideEl).toBeInTheDocument();
});
