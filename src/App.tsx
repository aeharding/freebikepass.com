import styled from "@emotion/styled/macro";
import { ThemeProvider } from "@material-ui/styles";
import Footer from "./Footer";
import { createMuiTheme } from "./theme";

export const maxBodyWidth = "975px";

const AppContainer = styled.div`
  flex: 1;

  width: 100%;
  max-width: ${maxBodyWidth};
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

const AppContents = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

function App() {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <AppContents>
          <Footer />
        </AppContents>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
