import React from 'react';
import { FieldError } from 'react-hook-form/dist/types/errors';

export function ErrorMessage(props: { error: FieldError }): JSX.Element {
  return <div style={{ color: 'red' }}>{props.error.message}</div>;
}
