import { Box, Button, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import InputField from '../../components/formFields/formik-input-field';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('UserName is required!'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(30, 'Too Long!')
    .required('password is required!'),
});

const LoginPage = () => (
  <Box mt={2}>
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={formValues => console.log(formValues)}
      validationSchema={SignupSchema}
    >
      <Form id="login">
        <Grid my={5} container rowGap={4}>
          <Grid item sm={3} />
          <Grid item sm={6}>
            <InputField name="username" label="UserName" fullWidth />
          </Grid>
          <Grid item sm={3} />
          <Grid item sm={3} />
          <Grid item sm={6}>
            <InputField name="password" label="Password" fullWidth />
          </Grid>
          <Grid item sm={3} />
          <Grid item sm={3} />
          <Grid item sm={6}>
            <Typography
              gutterBottom
              justifyContent="space-between"
              display="flex"
            >
              <Link to="/test">Shipping address</Link>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Typography>
          </Grid>
          <Grid item sm={3} />
        </Grid>
      </Form>
    </Formik>
  </Box>
);

export default LoginPage;
