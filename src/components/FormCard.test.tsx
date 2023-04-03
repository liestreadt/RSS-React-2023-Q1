import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { FormCard } from './FormCard';
import { FormInput } from '../helpers/types';

const defaultFormInput: FormInput = {
  firstName: 'Vladik',
  lastName: 'Ivanov',
  email: 'example@test.com',
  birthday: '1996-11-11',
  country: 'Russia',
  checkbox: ['promo'],
  personalData: 'personalData',
  radio: 'male',
};

describe('Card', () => {
  it('Renders card', () => {
    render(<FormCard formData={defaultFormInput} />);
    expect(screen.getByText(/Vladik/i)).toHaveTextContent('Vladik');
    expect(screen.getByText(/Ivanov/i)).toHaveTextContent('Ivanov');
    expect(screen.getByText(/example@test.com/i)).toHaveTextContent('example@test.com');
    expect(screen.getByText(/1996-11-11/i)).toHaveTextContent('1996-11-11');
    expect(screen.getByText(/Russia/i)).toHaveTextContent('Russia');
    expect(screen.getByText(/male/i)).toHaveTextContent('male');
    expect(screen.getByText(/promo/i)).toHaveTextContent('promo');
  });
});
