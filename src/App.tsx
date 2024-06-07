import { Suspense, lazy, useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./components/header";
import "react18-loaders/dist/client/index.css";
import "react18-loaders/dist/server/bars/bars1/index.css";
import { ScrollDownButton } from "./components/scroll-down-button";
import Loader from "./components/loader";

const UIPortfolio = lazy(() => import("./components/ui-portfolio"));
const OnboardingForm = lazy(() => import("./components/onboarding-form"));

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: prefersDarkMode ? "dark" : "light" },
      }),
    [prefersDarkMode]
  );

  return (
    <Suspense fallback={<Loader loading />}>
      <ThemeProvider theme={theme}>
        <div className="snap">
          <Header />
          <OnboardingForm />
          <ScrollDownButton />
        </div>
        <br />
        <br />
        <UIPortfolio />
        <Loader />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
