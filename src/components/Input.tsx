import React from 'react';
import { useFormContext } from 'react-hook-form';

export function Input(props: {
  labelText: string;
  testId?: string;
  placeholder?: string;
  type: string;
  name: string;
  accept?: string;
  pattern?: RegExp;
  patternMessage?: string;
  requiredText?: string;
}): JSX.Element {
  const { register } = useFormContext();

  if (props.pattern && props.patternMessage) {
    return (
      <div>
        <label htmlFor={props.name}>
          <div className="form__elem-name">{props.labelText}</div>
          <input
            className="form__elem-input"
            data-testid={props.testId}
            type={props.type}
            placeholder={props.placeholder}
            {...register(props.name, {
              required: props.requiredText,
              pattern: {
                value: props.pattern,
                message: props.patternMessage,
              },
            })}
          />
        </label>
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor={props.name}>
          <div className="form__elem-name">{props.labelText}</div>
          <input
            className="form__elem-input"
            data-testid={props.testId}
            type={props.type}
            accept={props.accept}
            placeholder={props.placeholder}
            {...register(props.name, {
              required: props.requiredText,
            })}
          />
        </label>
      </div>
    );
  }
}
