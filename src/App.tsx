import styled from "@emotion/styled/macro";
import { ThemeProvider } from "@material-ui/styles";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Footer from "./Footer";
import Header from "./header/Header";
import Home from "./routes/Home";
import Agree from "./routes/Agree";
import Info from "./routes/Info";
import Download from "./routes/Download";
import Mail from "./routes/Mail";
import Done from "./routes/Done";
import Faq from "./routes/Faq";
import Privacy from "./routes/Privacy";
import StepsOutlet from "./routes/StepsOutlet";
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

  position: relative;

  display: flex;
  flex-direction: column;
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
                  <Route path="order" element={<StepsOutlet />}>
                    <Route path="" element={<Navigate replace to="agree" />} />

                    <Route path="agree" element={<Agree />} />
                    <Route path="info" element={<Info />} />
                    <Route path="download" element={<Download />} />
                    <Route path="mail" element={<Mail />} />
                  </Route>

                  <Route path="order/done" element={<Done />} />
                  <Route path="faq" element={<Faq />} />
                  <Route path="privacy" element={<Privacy />} />
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
