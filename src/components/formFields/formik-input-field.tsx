/* eslint-disable import/no-extraneous-dependencies */
import { TextField, TextFieldProps } from '@mui/material';
import { useField } from 'formik';
import { at } from 'lodash';

type InputFieldProps = {
  name: string;
} & TextFieldProps;

export default function InputField(props: InputFieldProps) {
  const { name, ...rest } = props;
  const [field, meta] = useField(name);

  function renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return error;
    }
    return null;
  }

  return (
    <TextField
      type="text"
      error={meta.touched && Boolean(meta.error)}
      helperText={renderHelperText()}
      {...field}
      {...rest}
    />
  );
}
