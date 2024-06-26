import React from 'react';
import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const MySelect = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>

      <select className="text-input" {...field} {...props} />
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

export default MySelect;
