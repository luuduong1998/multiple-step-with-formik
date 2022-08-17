import React from "react";
import { at } from "lodash";
import { useField } from "formik";
import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { theme } from "../../Theme/theme";

type SelectFieldProps<D> = {
  name: string;
  label: string;
  data: {
    value: D;
    label: string;
  }[];
} & FormControlProps;

function SelectField<D>(props: SelectFieldProps<D>) {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props.name);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, "touched", "error");
  const isError = touched && error && true;
  const _renderHelperText = () => {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  };

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel sx={{ bgcolor: theme.palette.secondary.main }}>
        {label}
      </InputLabel>
      <Select {...field} value={selectedValue ? selectedValue : ""}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value as unknown as string}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {_renderHelperText()}
    </FormControl>
  );
}

export default SelectField;
