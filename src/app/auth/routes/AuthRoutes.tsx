import { Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
};
