export const handleErrorFirebase = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'El correo ya está en uso';
    case 'auth/invalid-email':
      return 'El correo no es válido';
    case 'auth/too-many-requests':
      return 'Demasiados intentos, intente más tarde';
    case 'auth/invalid-credential':
      return 'Credencial no válida';
    case 'auth/operation-not-allowed':
      return 'Operación no permitida';
    case 'auth/weak-password':
      return 'La contraseña debe tener al menos 6 caracteres';
    case 'auth/user-not-found':
      return 'El correo no está registrado';
    case 'auth/wrong-password':
      return 'La contraseña no es correcta';
    case 'auth/user-disabled':
      return 'El usuario ha sido deshabilitado';
    case 'auth/user-token-expired':
      return 'El token del usuario ha expirado';
    case 'auth/network-request-failed':
      return 'Error de red, por favor revise su conexión';
    case 'auth/requires-recent-login':
      return 'La última autenticación es muy antigua, vuelva a autenticarse';
    case 'auth/credential-already-in-use':
      return 'La credencial ya está en uso por otro usuario';
    case 'auth/account-exists-with-different-credential':
      return 'Ya existe una cuenta con una credencial diferente';
    case 'auth/invalid-verification-code':
      return 'Código de verificación inválido';
    case 'auth/invalid-verification-id':
      return 'ID de verificación inválido';
    default:
      return 'Error desconocido';
  }
};
