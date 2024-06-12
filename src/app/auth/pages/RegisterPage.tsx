import { RegisterForm } from '../components/register/RegisterForm';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <RegisterForm />
    </AuthLayout>
  );
};
