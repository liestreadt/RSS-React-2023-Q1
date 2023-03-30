import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from './Card';
import { Article } from '../helpers/types';

const defaultArticle: Article = {
  content: 'content',
  description: 'description',
  publishedAt: 'publish date',
  source: {
    url: 'id',
    name: 'name',
  },
  title: 'title',
  image: 'urlToImage',
};

describe('Card', () => {
  it('Renders card', () => {
    render(<Card article={defaultArticle} />);
    expect(screen.getByText(/content/i)).toHaveTextContent('content');
    expect(screen.getByText(/title/i)).toHaveTextContent('title');
    expect(screen.getByText(/content/i)).toHaveTextContent('content');
    expect(screen.getByAltText('image')).toHaveAttribute('src');
  });
});
