import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { createStore } from "./store";

test("renders app with header text", () => {
  const store = createStore();

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerAsideEl = screen.getByText(/the unofficial character database/i);
  expect(headerAsideEl).toBeInTheDocument();
});
