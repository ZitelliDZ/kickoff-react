import { useAppDispatch, useAppSelector } from '../../../store';
import {
  checkingCredentials,
  login,
  logout,
} from '../../../store/auth/authSlice';
import {
  loginWithEmailPassword,
  registerUserWithEmailPassword,
  singInWithGoogle,
  logoutFirebase,
} from '../../../config/firebase/providers';

export const useAuthStore = () => {
  const dispatch = useAppDispatch();
  const { ...auth } = useAppSelector((state) => state.auth);

  const startGoogleSignIn = async () => {
    dispatch(checkingCredentials());

    const result = await singInWithGoogle();
    if (!result.ok)
      return dispatch(logout({ errorMessage: result.errorMessage }));

    dispatch(
      login({
        uid: result.uid ?? '',
        email: result.email ?? '',
        displayName: result.displayName ?? '',
        photoURL: result.photoURL ?? '',
      }),
    );
  };

  const startCreatingUserWithEmailPassword = async ({
    email,
    password,
    displayName,
  }: {
    email: string;
    password: string;
    displayName: string;
  }) => {
    dispatch(checkingCredentials());

    const result = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });
    if (!result.ok) {
      return dispatch(logout({ errorMessage: result.errorMessage }));
    }

    dispatch(
      login({
        uid: result.uid ?? '',
        email: result.email ?? '',
        displayName: result.displayName ?? '',
        photoURL: result.photoURL ?? '',
      }),
    );
  };

  const startLoginWithEmailPassword = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailPassword({ email, password });

    if (!result.ok) return dispatch(logout(result));
    dispatch(
      login({
        uid: result.uid ?? '',
        email: result.email ?? '',
        displayName: result.displayName ?? '',
        photoURL: result.photoURL ?? '',
      }),
    );
  };

  const startLogout = async () => {
    await logoutFirebase();
    dispatch(logout({}));
  };

  return {
    auth,
    startGoogleSignIn,
    startCreatingUserWithEmailPassword,
    startLoginWithEmailPassword,
    startLogout,
  };
};
