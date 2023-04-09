import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Modal } from './Modal';
import { defaultArticle } from '../helpers/constants';

describe('Card', () => {
  it('Renders card', () => {
    render(
      <Modal
        setActive={false}
        active={false}
        setCurrentCharacter={}
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
});
