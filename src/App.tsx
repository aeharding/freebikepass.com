import styled from "@emotion/styled/macro";
import { ThemeProvider } from "@material-ui/styles";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";
import Home from "./routes/Home";
import Agree from "./routes/Agree";
import Order from "./routes/Order";
import Download from "./routes/Download";
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

const Main = styled.main`
  flex: 1;
`;

function App() {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <AppContents>
          <Header />

          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/agree" element={<Agree />} />
              <Route path="/order" element={<Order />} />
              <Route path="/download" element={<Download />} />
            </Routes>
          </Main>
          <Footer />
        </AppContents>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
