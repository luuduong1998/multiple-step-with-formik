import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import { TextField, TextFieldProps } from "@mui/material";

type InputFieldProps = {
  name: string;
} & TextFieldProps;

export default function InputField(props: InputFieldProps) {
  const { ...rest } = props;
  const [field, meta] = useField(props.name);

  function _renderHelperText() {
    const [touched, error] = at(meta, "touched", "error");
    if (touched && error) {
      return error;
    }
  }

  return (
    <TextField
      type="text"
      error={meta.touched && Boolean(meta.error)}
      helperText={_renderHelperText()}
      {...field}
      {...rest}
    />
  );
}
