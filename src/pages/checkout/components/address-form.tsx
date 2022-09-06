import { Grid, Typography } from '@mui/material';
import SelectField from '../../../components/formFields/formik-dropdown-list';
import CheckboxField from '../../../components/formFields/formik-input-checkbox';
import InputField from '../../../components/formFields/formik-input-field';
import { cities, countries, states } from '../../../constants/checkout-page';
import { formFieldProps } from '../type';

const AddressForm = (props: formFieldProps) => {
  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zipcode,
    country,
    useAddressForPaymentDetails,
  } = props;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address1.name} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address2.name} label={address2.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField<string>
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField<string>
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField<string>
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default AddressForm;
