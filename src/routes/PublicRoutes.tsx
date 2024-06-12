import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../app/pages';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
