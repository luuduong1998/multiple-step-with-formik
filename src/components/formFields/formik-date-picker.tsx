import {
  DatePickerProps,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import React from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useField } from "formik";
import { TextField, TextFieldProps } from "@mui/material";

type CustomizedDatePickerProps = {
  label: string;
  name: string;
} & Omit<DatePickerProps<Date, Date>, "value" | "onChange" | "renderInput"> &
  TextFieldProps;

const FormikDatePicker = (props: CustomizedDatePickerProps) => {
  const { label, ...rest } = props;
  const [field, , helper] = useField(props.name);
  const handleChange = (newValue: Date | null) => {
    helper.setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label={label}
        inputFormat="DD/MM/yyyy"
        value={field.value}
        onChange={handleChange}
        disableMaskedInput={true}
        renderInput={(params) => <TextField {...params} {...rest} />}
      />
    </LocalizationProvider>
  );
};

export default FormikDatePicker;
