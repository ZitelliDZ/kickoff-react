import { FormikValues } from 'formik';
import { ZodError } from 'zod';
import * as z from 'zod';

export const validateForm = (
  values: FormikValues,
  validateSchema: z.ZodType<FormikValues>,
) => {
  try {
    validateSchema.parse(values);
  } catch (error) {
    if (error instanceof ZodError) {
      return error.errors.reduce((acc: any, err: any) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
    }
  }
};
