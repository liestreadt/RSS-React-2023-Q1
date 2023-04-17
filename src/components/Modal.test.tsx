import React from 'react';
import { vi, describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Modal } from './Modal';
import { defaultArticle } from '../helpers/constants';

describe('Modal', () => {
  it('Renders modal', () => {
    render(
      <Modal
        setActive={vi.fn()}
        active={true}
        setCurrentCharacter={vi.fn()}
        characterInfo={defaultArticle}
      />
    );
    expect(screen.getByText(/SampleName/i)).toHaveTextContent('SampleName');
    expect(screen.getByText(/SampleStatus/i)).toHaveTextContent('SampleStatus');
    expect(screen.getByText(/SampleSpecies/i)).toHaveTextContent('SampleSpecies');
    expect(screen.getByText(/SampleGender/i)).toHaveTextContent('SampleGender');
    expect(screen.getByText(/SampleLocationName/i)).toHaveTextContent('SampleLocationName');
    expect(screen.getByText(/SampleOriginName/i)).toHaveTextContent('SampleOriginName');
  });
  it('should fire click event', () => {
    render(
      <Modal
        setActive={vi.fn()}
        active={true}
        setCurrentCharacter={vi.fn()}
        characterInfo={defaultArticle}
      />
    );
    fireEvent.click(screen.getByTestId('modalContentTestId'));
  });
});
