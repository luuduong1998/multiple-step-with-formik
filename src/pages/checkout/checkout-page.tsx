import { Box, Button, Grid, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import HorizontalLinearStepper from '../../components/horizontal-line-stepper';
import { useMuiStep } from '../../hooks/use-get-mui-step';
import AddressForm from './components/address-form';
import PaymentForm from './components/payment-form';
import PreviewFormValue from './components/previewFormValue';
import checkoutFormModel from './model/checkout-form-model';
import checkoutFormInitialValue from './model/form-initial-value';
import { validationSchema } from './model/form-validation-schema';

const CheckoutPage = () => {
  const { formId, formField } = checkoutFormModel;
  const muiStepProps = useMuiStep(3);
  const { activeStep, setActiveStep, isLastStep } = muiStepProps;
  const currValidateSchema = validationSchema[activeStep];

  const renderStepContent = () => {
    console.log(activeStep);
    switch (activeStep) {
      case 0:
        return <AddressForm {...formField} />;
      case 1:
        return <PaymentForm {...formField} />;
      case 2:
        return <PreviewFormValue />;
      default:
        return <p>successfully</p>;
    }
  };

  const submitHandler = (
    values: Record<string, string>,
    { setSubmitting, setTouched }: FormikHelpers<Record<string, string>>,
  ) => {
    if (isLastStep) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
      setTouched({});
      setSubmitting(false);
    }
  };

  return (
    <Box pt={2}>
      <Typography variant="h4" align="center">
        Checkout
      </Typography>
      <br />
      <HorizontalLinearStepper {...muiStepProps} />
      <Formik
        initialValues={checkoutFormInitialValue}
        onSubmit={submitHandler}
        validationSchema={currValidateSchema}
      >
        {() => (
          <Form id={formId}>
            {renderStepContent()}
            <Grid my={5} textAlign="right">
              {activeStep !== 0 && (
                <Button
                  sx={{ mr: 2 }}
                  variant="contained"
                  color="primary"
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Back
                </Button>
              )}
              <Button type="submit" variant="contained" color="primary">
                Next
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
export default CheckoutPage;
