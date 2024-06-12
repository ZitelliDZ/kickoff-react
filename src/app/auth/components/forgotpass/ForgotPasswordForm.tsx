import { Form, Formik } from 'formik';
import { Alert, Button, Grid, Typography } from '@mui/material';
import '../ui/styles/styles.css';
import * as z from 'zod';
import { Link } from 'react-router-dom';
import MyTextInput from '../ui/MyTextInput';
import { useState } from 'react';
import RiseLoader from 'react-spinners/RiseLoader';
import { ConfirmEmailSchema } from '../../../../schemas/auth/ConfirmEmailSchema';
import { validateForm } from '../../../../helpers/validateForm';

type FormValues = z.infer<typeof ConfirmEmailSchema>;

const initialValues: FormValues = {
  email: '',
};

export const ForgotPasswordForm = () => {
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);

  // const isAuthenticating = useMemo(
  //   () => auth.status === "checking",
  //   [auth.status]
  // );

  const handleValidate = (values: FormValues) => {
    return validateForm(values, ConfirmEmailSchema);
  };

  const onSubmit = async (_: FormValues) => {
    console.log('onSubmit');
    setIsAuthenticating(true);
    try {
      //await auth.sendPasswordResetEmail(values.email);
      setSpinner(true);

      setTimeout(() => {
        setSpinner(false);
        setSuccessMessage(
          'Se ha enviado un correo con las instrucciones para recuperar tu contraseña',
        );
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      }, 5000);
    } catch (error) {
      setErrorMessage('Hubo un error al enviar el correo');
    }
    setIsAuthenticating(false);
  };

  return (
    <div>
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={handleValidate}
      >
        {({}) => {
          return (
            <Form>
              <Typography variant="subtitle1" sx={{ mb: 1, mt: 3 }}>
                Envia un código de recuperación a tu correo
              </Typography>
              <MyTextInput label="Email" name="email" type="email" />

              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12} display={errorMessage !== '' ? '' : 'none'}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
                <Grid
                  item
                  xs={12}
                  display={successMessage !== '' ? '' : 'none'}
                >
                  <Alert severity="success" sx={{ backgroundColor: '#36d7b7' }}>
                    {successMessage}
                  </Alert>
                </Grid>
                {spinner && (
                  <div className="flex justify-center w-full mt-9 pl-7 ">
                    <RiseLoader
                      color="#36d7b7"
                      className="w-[100px] h-[50px]"
                    />
                  </div>
                )}
                <Grid item xs={12}>
                  <Button
                    disabled={isAuthenticating}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>

      <div className="w-full flex justify-end mt-2 text-white">
        <div className="hover:underline hover:text-blue-500">
          <Link to={'/auth/login'}>Volver al login</Link>
        </div>
      </div>
    </div>
  );
};
