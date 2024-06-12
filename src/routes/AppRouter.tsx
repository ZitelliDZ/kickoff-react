import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { PublicRoutes } from './PublicRoutes';
import { ProtectedRoutes } from './ProtectedRoutes';
import { useCheckAuth } from '../app/auth/hooks/useCheckAuth';
import { AuthRoutes } from '../app/auth/routes/AuthRoutes';
import { CheckingAuth } from '../components/shared/CheckingAuth';
import { theme } from '../theme/darkTheme';

const AppRouter = () => {
  const { auth } = useCheckAuth();

  if (auth.status === 'checking') {
    return <CheckingAuth />;
  }

  const { mainTheme } = theme;
  return (
    <Suspense
      fallback={
        <div className={`h-screen w-screen ${mainTheme.backgroundColor}`}></div>
      }
    >
      <Routes>
        {auth.status === 'authenticated' ? (
          <>
            <Route path="/*" element={<ProtectedRoutes />} />
          </>
        ) : (
          <>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<PublicRoutes />} />
          </>
        )}

        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
