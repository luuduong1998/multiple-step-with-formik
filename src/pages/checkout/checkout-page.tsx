import { Box, Typography } from "@mui/material";
import React from "react";
import { useMuiStep } from "../../hooks/useMuiStep";
import HorizontalLinearStepper from "../../components/HorizontalLinearStepper";

type Props = {};

const CheckoutPage = (props: Props) => {
  const muiStepProps = useMuiStep();
  return (
    <Box pt={2}>
      <Typography variant="h4" align="center">
        Checkout
      </Typography>
      <br />
      <HorizontalLinearStepper {...muiStepProps} />
    </Box>
  );
};
export default CheckoutPage;
