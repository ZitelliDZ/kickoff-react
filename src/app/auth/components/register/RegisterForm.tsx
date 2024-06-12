import { Form, Formik } from 'formik';

import '../ui/styles/styles.css';
import * as z from 'zod';
import { validateForm } from '../../../../helpers/validateForm';
import { Link } from 'react-router-dom';
import { RegisterSchema } from '../../../../schemas/auth/RegisterSchema';
import MyTextInput from '../ui/MyTextInput';
import MyCheck from '../ui/MyCheck';
import { useAuthStore } from '../../hooks/useAuthStore';
import { Alert, Button, Grid } from '@mui/material';
import { useMemo } from 'react';

type FormValues = z.infer<typeof RegisterSchema>;

const initialValues: FormValues = {
  email: '',
  contrasena: '',
  confirm_contrasena: '',
  nombre: '',
  apellido: '',
  terminos: false,
};

export const RegisterForm = () => {
  const { auth, startCreatingUserWithEmailPassword } = useAuthStore();

  const isCheckingAuthentication = useMemo(
    () => auth.status === 'checking',
    [auth.status],
  );
  const errorMessage = auth.errorMessage;

  const handleValidate = (values: FormValues) => {
    const validate = validateForm(values, RegisterSchema);
    return validate;
  };

  const onSubmit = (event: FormValues) => {
    const formState = event;

    startCreatingUserWithEmailPassword({
      email: formState.email,
      password: formState.contrasena,
      displayName: `${formState.nombre} ${formState.apellido}`,
    });
  };

  return (
    <div>
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={handleValidate}
      >
        {({ handleReset }) => {
          return (
            <Form>
              <MyTextInput label="Nombre" name="nombre" type="string" />
              <MyTextInput label="Apellido" name="apellido" type="string" />
              <MyTextInput label="Email" name="email" type="email" />
              <MyTextInput
                label="Contraseña"
                name="contrasena"
                type="password"
              />
              <MyTextInput
                label="Confirmar contraseña"
                name="confirm_contrasena"
                type="password"
              />

              <MyCheck
                name="terminos"
                label="Acepta los terminos y condiciones"
              />

              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    disabled={isCheckingAuthentication}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Crear cuenta
                  </Button>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12}>
                  <Button
                    onClick={handleReset}
                    type="reset"
                    variant="contained"
                    fullWidth
                  >
                    Limpiar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>

      <div className="w-full flex justify-end mt-2 text-white">
        <div className="hover:underline hover:text-blue-500">
          <Link to={'/auth/login'}>Ya tienes una cuenta? Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
};
