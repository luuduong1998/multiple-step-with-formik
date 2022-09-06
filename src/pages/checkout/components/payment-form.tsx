import { Grid, Typography } from '@mui/material';
import FormikDatePicker from '../../../components/formFields/formik-date-picker';
import InputField from '../../../components/formFields/formik-input-field';
import { formFieldProps } from '../type';

const PaymentForm = (props: formFieldProps) => {
  const { nameOnCard, cardNumber, expiryDate, cvv } = props;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField
            name={nameOnCard.name}
            label={nameOnCard.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={cardNumber.name}
            label={cardNumber.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormikDatePicker
            name={expiryDate.name}
            label={expiryDate.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={cvv.name} label={cvv.label} fullWidth />
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentForm;
