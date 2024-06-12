import { Navigate, Route, Routes } from 'react-router-dom';
import { UsersRoutes } from '../app/users/routes/UsersRoutes';
import { lazy } from 'react';

const DashboardPage = lazy(
  () =>
    import(
      /* webpackChunkName: "DashboardPage" */ '../app/dashboard/pages/DashboardPage'
    ),
);

const SettingsPage = lazy(
  () =>
    import(
      /* webpackChunkName: "SettingsPage" */ '../app/settings/pages/SettingsPage'
    ),
);

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="app/dashboard" element={<DashboardPage />} />
      <Route path="app/settings" element={<SettingsPage />} />
      <Route path="app/users/*" element={<UsersRoutes />} />
      <Route path="/" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
