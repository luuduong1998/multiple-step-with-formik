/* eslint-disable import/no-extraneous-dependencies */
import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  MenuItem,
  // eslint-disable-next-line comma-dangle
  Select,
} from '@mui/material';
import { useField } from 'formik';
import { at } from 'lodash';
import { theme } from '../../Theme/theme';

type SelectFieldProps<D> = {
  name: string;
  label: string;
  data: {
    value: D;
    label: string;
  }[];
} & FormControlProps;

function SelectField<D>(props: SelectFieldProps<D>) {
  const { name, label, data, ...rest } = props;
  const [field, meta] = useField(name);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  const renderHelperText = () => {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
    return null;
  };

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel sx={{ bgcolor: theme.palette.secondary.main }}>
        {label}
      </InputLabel>
      <Select {...field} value={selectedValue || ''}>
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value as unknown as string}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {renderHelperText()}
    </FormControl>
  );
}

export default SelectField;
