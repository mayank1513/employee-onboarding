import { JsonForms } from "@jsonforms/react";
import schema from "../schema";
import { useUischema } from "../uischema";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
} from "@mui/material";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useState } from "react";
import {
  CustomTextControl,
  customTextControlTester,
  customDropdownControlTester,
  CustomDropdownControl,
} from "./handle-touched";
import { useLoader } from "react18-loaders";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: customTextControlTester, renderer: CustomTextControl },
  { tester: customDropdownControlTester, renderer: CustomDropdownControl },
];

const OnboardingForm = () => {
  const uischema = useUischema();
  const [data, setData] = useState({});
  const [errors, setError] = useState<any[]>();
  const [formButtonsEl, setFormButtonsEl] = useState<Element>();

  const { setLoading } = useLoader();

  useEffect(() => {
    const el = document.querySelector(".MuiContainer-root > div:nth-child(3)");
    if (el) {
      setFormButtonsEl(el);
      const childrenInOrder = [];
      for (const el1 of el.children) {
        // @ts-expect-error --> this works
        el1.style = "";
        if (el1.textContent?.toLowerCase().trim() === "previous")
          childrenInOrder[0] = el1;
        else if (el1.textContent?.toLowerCase().trim() === "next")
          childrenInOrder[1] = el1;
        else childrenInOrder[2] = el1;
      }
      childrenInOrder.forEach((el1) => el.appendChild(el1));
    }
  }, []);

  const handleFormSubmit = useCallback(async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 3000));
    setData((data) => {
      localStorage.setItem("onboarding-data", JSON.stringify(data));
      return {};
    });
    setLoading(false);
    // hard reload to hard reset the form -- can be improved with deep digging into JSON forms
    window.location.reload();
  }, []);

  return (
    <Container>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={renderers}
        cells={materialCells}
        onChange={({ errors, data }) => {
          setData(data);
          setError(errors);
        }}
      />
      {formButtonsEl &&
        createPortal(
          <Button
            variant="contained"
            disabled={Boolean(errors?.length)}
            style={{ float: "right" }}
            onClick={handleFormSubmit}
          >
            Submit
          </Button>,
          formButtonsEl
        )}
      <Accordion hidden={!Boolean(errors?.length)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Errors:
        </AccordionSummary>
        <AccordionDetails>
          <pre>
            {JSON.stringify(
              errors?.map((error) => error.message),
              null,
              2
            )}
          </pre>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default OnboardingForm;
