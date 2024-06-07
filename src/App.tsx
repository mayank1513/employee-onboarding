import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./components/header";
import OnboardingForm from "./components/onboarding-form";
import { LoaderContainer } from "react18-loaders";
import { Bars1 } from "react18-loaders/dist/server/bars/bars1";
import "react18-loaders/dist/client/index.css";
import "react18-loaders/dist/server/bars/bars1/index.css";
import UIPortfolio from "./components/ui-portfolio";

const srollToUiPortfolio = () => {
  const element = document.getElementById("ui-portfolio");
  element?.scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "start",
  });
};

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: prefersDarkMode ? "dark" : "light" },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="snap">
        <Header />
        <OnboardingForm />
        <button className="down-btn" onClick={srollToUiPortfolio}>
          <span>❱❱❱</span>
        </button>
      </div>
      <br />
      <br />
      <UIPortfolio />
      <LoaderContainer>
        <Bars1 color="red" />
      </LoaderContainer>
    </ThemeProvider>
  );
}

export default App;
