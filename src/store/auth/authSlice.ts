import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthPayload {
  email: string;
  password: string;
  displayName?: string;
}

export interface AuthResult {
  ok: boolean;
  uid?: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  errorMessage?: string;
}

export interface AuthLoginState {
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthState {
  status: 'checking' | 'not-authenticated' | 'authenticated';
  uid: string | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  errorMessage: string | null;
}

const initState: AuthState = {
  status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initState,

  reducers: {
    login: (state, { payload }: PayloadAction<AuthLoginState>) => {
      state.status = 'authenticated';
      state.uid = payload.uid ?? null;
      state.email = payload.email ?? null;
      state.displayName = payload.displayName ?? null;
      state.photoURL = payload.photoURL ?? null;
      state.errorMessage = null;
    },
    logout: (state, { payload }: PayloadAction<{ errorMessage?: string }>) => {
      state.status = 'not-authenticated'; // 'checking', 'not-authenticated', 'authenticated'
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage ?? null;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
