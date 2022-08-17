import React, { useCallback } from "react";
import { at } from "lodash";
import { useField } from "formik";
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from "@mui/material";

type CheckboxFieldProps = {
  label: string;
  name: string;
} & CheckboxProps;
export default function CheckboxField(props: CheckboxFieldProps) {
  const [field, meta, helper] = useField(props.name);
  const { setValue } = helper;

  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  const handleChange = useCallback(() => {
    setValue(!field.value);
  }, [field.value, setValue]);

  return (
    <FormControl error={meta.touched && Boolean(meta.error)}>
      <FormControlLabel
        control={
          <Checkbox
            {...props}
            {...field}
            name={props.id}
            checked={Boolean(field.value)}
            onChange={handleChange}
          />
        }
        label={props.label}
      />
      {_renderHelperText()}
    </FormControl>
  );
}
