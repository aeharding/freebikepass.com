import styled from "@emotion/styled/macro";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";
import Home from "./routes/Home";
import Agree from "./routes/Agree";
import Order from "./routes/Order";
import Mail from "./routes/Mail";
import Done from "./routes/Done";
import Faq from "./routes/Faq";
import Privacy from "./routes/Privacy";
import Section from "./shared/Section";
import ScrollToTop from "./shared/ScrollToTop";
import { createMuiTheme } from "./theme";

const AppContainer = styled.div`
  flex: 1;

  width: 100%;
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

function SectionOutlet() {
  return (
    <Section>
      <Outlet />
    </Section>
  );
}

function App() {
  const theme = createMuiTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <AppContents>
            <Header />

            <Main>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<SectionOutlet />}>
                  <Route path="/agree" element={<Agree />} />
                  <Route path="/order" element={<Order />} />
                  <Route path="/mail" element={<Mail />} />
                  <Route path="/done" element={<Done />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/privacy" element={<Privacy />} />
                </Route>
              </Routes>
            </Main>
          </AppContents>
        </AppContainer>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
