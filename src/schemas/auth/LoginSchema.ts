import * as z from 'zod';
export const LoginSchema = z.object({
  email: z
    .string({
      required_error: 'Correo es requerido',
      invalid_type_error: 'Correo debe ser un string',
    })
    .email({
      message: 'Correo no es válido',
    }),
  contrasena: z.string().min(1, {
    message: 'Contraseña es requerida',
  }),
});
