import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ErrorsAccordian = ({ errors }: { errors?: any[] }) => (
  <Accordion hidden={!Boolean(errors?.length)}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>Errors:</AccordionSummary>
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
);

export default ErrorsAccordian;
