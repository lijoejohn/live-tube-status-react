import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import React from 'react';
import { ResponsiveList } from 'components/common/ResponsiveList';

describe('ResponsiveList (Option A)', () => {
  test('renders all items', () => {
    const items = [
  { id: 'bakerloo', name: 'Bakerloo' },
  { id: 'central', name: 'Central' },
  { id: 'circle', name: 'Circle' },
  { id: 'district', name: 'District' },
  { id: 'hammersmith-city', name: 'Hammersmith & City' },
  { id: 'jubilee', name: 'Jubilee' }];
    render(<ResponsiveList items={items} />);
    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
    expect(screen.getByText('Three')).toBeInTheDocument();
  });
});
