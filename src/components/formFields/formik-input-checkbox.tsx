import React, { useCallback } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { at } from 'lodash';
import { useField } from 'formik';
import {
  Checkbox,
  CheckboxProps,
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';

type CheckboxFieldProps = {
  label: string;
  name: string;
} & CheckboxProps;
export default function CheckboxField(props: CheckboxFieldProps) {
  const { name, label, id } = props;
  const [field, meta, helper] = useField(name);
  const { setValue } = helper;

  function renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
    return null;
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
            name={id}
            checked={Boolean(field.value)}
            onChange={handleChange}
          />
        }
        label={label}
      />
      {renderHelperText()}
    </FormControl>
  );
}
