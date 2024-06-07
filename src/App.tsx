import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./components/header";
import { LoaderContainer, useLoader } from "react18-loaders";
import { Bars1 } from "react18-loaders/dist/server/bars/bars1";
import "react18-loaders/dist/client/index.css";
import "react18-loaders/dist/server/bars/bars1/index.css";
import { ScrollDownButton } from "./components/scroll-down-button";

const UIPortfolio = lazy(() => import("./components/ui-portfolio"));
const OnboardingForm = lazy(() => import("./components/onboarding-form"));

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [showSplash, setShowSplash] = useState(true);
  const { setLoading } = useLoader();

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: prefersDarkMode ? "dark" : "light" },
      }),
    [prefersDarkMode]
  );

  useEffect(() => {
    setLoading(true);
    setShowSplash(false);
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);

  return (
    <Suspense fallback="Loading...">
      <ThemeProvider theme={theme}>
        <div className="snap">
          <Header />
          {!showSplash && <OnboardingForm />}
          <ScrollDownButton />
        </div>
        <br />
        <br />
        {!showSplash && <UIPortfolio />}
        <LoaderContainer>
          <Bars1 color="red" />
        </LoaderContainer>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
