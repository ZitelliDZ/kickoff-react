import * as z from 'zod';

export const RegisterSchema = z
  .object({
    email: z
      .string({
        required_error: 'Correo es requerido',
        invalid_type_error: 'Correo debe ser un string',
      })
      .email({
        message: 'Correo no es válido',
      }),
    contrasena: z.string().min(8, {
      message: 'Mínimo 8 caracteres',
    }),
    confirm_contrasena: z.string().min(8, {
      message: 'Mínimo 8 caracteres',
    }),
    nombre: z.string().min(1, {
      message: 'Nombre es requerido',
    }),
    apellido: z.string().min(1, {
      message: 'Apellido es requerido',
    }),
    terminos: z.boolean().refine((value) => value === true, {
      message: 'Debes aceptar los términos y condiciones',
    }),
  })
  .refine((data) => data.contrasena === data.confirm_contrasena, {
    message: 'Las contraseñas no coinciden',
    path: ['confirm_contrasena'], // specify the field which will have the error message
  });
