import { useEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../../../config/firebase/config';
import { login, logout } from '../../../store/auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../store';

export const useCheckAuth = () => {
  const dispatch = useAppDispatch();
  const { ...auth } = useAppSelector((state) => state.auth);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout({}));

      const { uid, email, displayName, photoURL } = user;
      dispatch(
        login({
          uid: uid ?? '',
          email: email ?? '',
          displayName: displayName ?? '',
          photoURL: photoURL ?? '',
        }),
      );
    });
  }, []);

  return { auth };
};
