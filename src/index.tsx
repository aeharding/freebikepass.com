import React from "react";
import ReactDOM from "react-dom";
import { css, Global } from "@emotion/react/macro";
import App from "./App";
import { writeVariables, Themes } from "./theme";

const globalStyles = css`
  :root {
    ${writeVariables(Themes.Dark)}
  }

  html {
    // Set dark background color for macOS overscroll
    background: var(--bg-gradient-from);
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    position: relative; // needed for AsideHouses
    display: flex;
    flex-direction: column;
    min-height: 100vh; // AsideHouses, and keep footer at bottom of viewport

    background: linear-gradient(
      90deg,
      var(--bg-gradient-from),
      var(--bg-gradient-to)
    );
    color: var(--text);
    line-height: 1.4;
  }

  #root {
    flex: 1;

    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
