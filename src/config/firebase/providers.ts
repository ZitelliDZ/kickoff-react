import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './config';
import { handleErrorFirebase } from '../../helpers/handleErrorFirebase';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult( result );
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      // User info
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error: any) {
    const message = handleErrorFirebase(error.code);

    return {
      ok: false,
      errorMessage: message,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}: {
  email: string;
  password: string;
  displayName: string;
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    const { uid, photoURL } = resp.user;

    await updateProfile(FirebaseAuth.currentUser!, { displayName });

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error: any) {
    const message = handleErrorFirebase(error.code);

    return {
      ok: false,
      errorMessage: message,
    };
  }
};

export const loginWithEmailPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    const { uid, photoURL, displayName } = resp.user;

    return {
      ok: true,
      email,
      uid,
      photoURL,
      displayName,
    };
  } catch (error: any) {
    const message = handleErrorFirebase(error.code);

    return {
      ok: false,
      errorMessage: message ?? 'Error desconocido',
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
