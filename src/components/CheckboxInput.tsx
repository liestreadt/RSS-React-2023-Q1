import React from 'react';
import { useFormContext } from 'react-hook-form';

export function CheckboxInput(props: {
  labelText: string;
  value: string;
  type: string;
  name: string;
  requiredText?: string;
}): JSX.Element {
  const { register } = useFormContext();

  return (
    <label>
      {props.labelText}
      <input
        className="form__elem-input"
        value={props.value}
        type={props.type}
        {...register(props.name, {
          required: props.requiredText,
        })}
      />
    </label>
  );
}
