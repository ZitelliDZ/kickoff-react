import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const UsersPage = lazy(
  () => import(/* webpackChunkName: "UsersPage" */ '../pages/UsersPage'),
);
const CreateUsersPage = lazy(
  () =>
    import(
      /* webpackChunkName: "CreateUsersPage" */ '../pages/CreateUsersPage'
    ),
);
const EditUsersPage = lazy(
  () =>
    import(/* webpackChunkName: "EditUsersPage" */ '../pages/EditUsersPage'),
);

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<UsersPage />} />
      <Route path="create" element={<CreateUsersPage />} />
      <Route path="edit" element={<EditUsersPage />} />
      <Route path="*" element={<Navigate to="." replace />} />
    </Routes>
  );
};
