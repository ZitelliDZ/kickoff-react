import { Form, Formik } from 'formik';
import { LoginSchema } from '../../../../schemas/auth/LoginSchema';
import { Alert, Button, Grid, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import '../ui/styles/styles.css';
import * as z from 'zod';
import { validateForm } from '../../../../helpers/validateForm';
import { Link } from 'react-router-dom';
import MyTextInput from '../ui/MyTextInput';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useMemo } from 'react';

type FormValues = z.infer<typeof LoginSchema>;

const initialValues: FormValues = {
  email: '',
  contrasena: '',
};

export const LoginForm = () => {
  const { auth, startGoogleSignIn, startLoginWithEmailPassword } =
    useAuthStore();

  const errorMessage = auth.errorMessage;

  const isAuthenticating = useMemo(
    () => auth.status === 'checking',
    [auth.status],
  );

  const handleValidate = (values: FormValues) => {
    return validateForm(values, LoginSchema);
  };

  const onSubmit = async (values: FormValues) => {
    await startLoginWithEmailPassword({
      email: values.email,
      password: values.contrasena,
    });
  };

  const onGoogleSignIn = async () => {
    console.log('onGoogleSignIn');
    await startGoogleSignIn();
    console.log(auth);
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
              <MyTextInput label="Email" name="email" type="email" />
              <MyTextInput
                label="Contraseña"
                name="contrasena"
                type="password"
              />
              <div className="w-full flex justify-end mt-2 text-white">
                <div className="hover:underline hover:text-blue-500">
                  <Link to={'/auth/forgot-password'}>
                    Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>

              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    disabled={isAuthenticating}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    login
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12}>
                  <Button
                    disabled={isAuthenticating}
                    variant="contained"
                    fullWidth
                    aria-label="google-btn"
                    onClick={onGoogleSignIn}
                  >
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>

      <div className="w-full flex justify-end mt-2 text-white">
        <div className="hover:underline hover:text-blue-500">
          <Link to={'/auth/register'}>No tienes una cuenta? Registrate</Link>
        </div>
      </div>
    </div>
  );
};
