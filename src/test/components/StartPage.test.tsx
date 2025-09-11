import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import React from 'react';
import { StartPage } from 'components/start/StartPage';

describe('StartPage (Option A)', () => {
  test('shows Start page heading and renders list', () => {
    render(<StartPage />);
    expect(screen.getByRole('heading', { level: 1, name: /start page/i })).toBeInTheDocument();
    expect(screen.getByText(/list item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/list item 4/i)).toBeInTheDocument();
  });
});
