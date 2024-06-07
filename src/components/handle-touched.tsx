import { FC, useEffect, useState } from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  rankWith,
  schemaTypeIs,
  ControlProps,
  schemaMatches,
} from "@jsonforms/core";

interface CustomTextControlProps extends ControlProps {
  label: string;
  required: boolean;
  schema: any;
}

const CustomText: FC<CustomTextControlProps> = (props) => {
  const { data, handleChange, path, errors, label, required, schema } = props;
  const [_touched, setTouched] = useState(false);

  useEffect(() => {
    setTouched(false);
  }, [label]);
  const isValid = errors.length === 0;

  const handleBlur = () => setTouched(true);

  const dateProps =
    schema.format === "date"
      ? {
          InputProps: { inputProps: { max: schema.max, min: schema.min } },
          InputLabelProps: { shrink: true },
        }
      : {};

  const touched = _touched || Boolean(data);

  return (
    <TextField
      fullWidth
      key={label}
      required={required}
      type={schema.format}
      label={label}
      error={!isValid && touched}
      helperText={touched ? errors : null}
      value={data || ""}
      onChange={(event) => handleChange(path, event.target.value)}
      onBlur={handleBlur}
      {...dateProps}
    />
  );
};

// @ts-expect-error --> ts gotcha
export const CustomTextControl = withJsonFormsControlProps(CustomText);

const CustomDropdown: FC<CustomTextControlProps> = (props) => {
  const { data, handleChange, path, errors, label, required, schema } = props;
  const [_touched, setTouched] = useState(false);
  useEffect(() => {
    setTouched(false);
  }, [label]);

  const isValid = errors.length === 0;

  const handleBlur = () => {
    setTouched(true);
  };
  const touched = _touched || Boolean(data);

  return (
    <FormControl fullWidth required={required} error={!isValid && touched}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={data || ""}
        onChange={(event) => handleChange(path, event.target.value)}
        onBlur={handleBlur}
        label={label}
      >
        {schema.enum.map((option: string) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{touched ? errors : null}</FormHelperText>
    </FormControl>
  );
};

// @ts-expect-error -- ts-gotcha
export const CustomDropdownControl = withJsonFormsControlProps(CustomDropdown);

// testers
export const customTextControlTester = rankWith(5, schemaTypeIs("string"));
export const customDropdownControlTester = rankWith(
  6, // Increase rank as needed
  schemaMatches(
    (jsonSchema) =>
      jsonSchema.enum !== undefined && jsonSchema.type === "string"
  )
);
