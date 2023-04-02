import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FieldError } from 'react-hook-form';

import { ErrorMessage } from './FormInputErrorMessage';

const defaultError: FieldError = {
  type: '',
  message: 'default error message',
};

describe('Error Message', () => {
  it('Renders error message', () => {
    render(<ErrorMessage error={defaultError} />);
    expect(screen.getByText(/default error message/i)).toHaveTextContent('default error message');
  });
});
