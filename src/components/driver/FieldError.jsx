import React from 'react';
import { Field } from 'react-final-form';

const FieldError = ({ name }) => (
  //TODO remove style
  <Field name={name} subscription={{ touched: true, error: true }}>
    {({ meta: { touched, error } }) =>
      touched && error ? (
        <span style={{ marginLeft: '12px', fontSize: '16px', color: 'red' }}>{error}</span>
      ) : null
    }
  </Field>
);

FieldError.displayName = 'FieldError';

export default FieldError;
