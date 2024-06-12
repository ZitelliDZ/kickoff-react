import { ForgotPasswordForm } from '../components/forgotpass/ForgotPasswordForm';
import { AuthLayout } from '../layout/AuthLayout';

export const ForgotPasswordPage = () => {
  return (
    <AuthLayout title="Restablece tu Contraseña">
      <ForgotPasswordForm />
    </AuthLayout>
  );
};
