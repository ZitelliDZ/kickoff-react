import React from 'react';
import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const MyCheck = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        <input type="checkbox" className="mr-2 mt-4" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage
        name={props.name}
        component="span"
        className="custom-span-error-class text-red-500"
      />

      {/*
        meta.touched && meta.error ? (
          <span className="error">{meta.error}</span>
        ) : null
        */}
    </>
  );
};

export default MyCheck;
