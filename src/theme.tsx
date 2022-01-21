import { css } from "@emotion/react/macro";
import {
  createMuiTheme as _createMuiTheme,
  unstable_createMuiStrictModeTheme,
} from "@material-ui/core";

export enum Themes {
  Dark,
}

export function writeVariables(theme: Themes) {
  switch (theme) {
    case Themes.Dark:
      return css`
        --bg-gradient-from: #2ebf91;
        --bg-gradient-to: #8360c3;
        --hover-bg: rgba(255, 255, 255, 0.1);
        --text: #eee;
        --soft-text: rgba(255, 255, 255, 0.3);
        --rim: rgba(255, 255, 255, 0.1);

        --left-safe-area: max(1rem, env(safe-area-inset-left));
        --right-safe-area: max(1rem, env(safe-area-inset-right));
      `;
  }
}

export function createMuiTheme() {
  // REMOVE unstable_createMuiStrictModeTheme
  // WHEN USING MATERIAL UI v5.0
  //
  // Fixes harmless (albeit annoying) React strict mode error:
  // Warning: findDOMNode is deprecated in StrictMode.
  //
  // More:
  //  1. https://github.com/mui-org/material-ui/issues/13394
  //  2. https://github.com/mui-org/material-ui/issues/13394#issuecomment-815452717
  const create =
    process.env.NODE_ENV === "production"
      ? _createMuiTheme
      : unstable_createMuiStrictModeTheme;

  return create({
    palette: {
      type: "light",
      primary: { main: "#6cf" },
    },
    overrides: {
      MuiTooltip: {
        tooltip: {
          fontSize: "0.9rem",
          padding: "0.5em 0.75em",
          backgroundColor: "black",
        },
      },
    },
  });
}
