import React from 'react';
import { render } from '@testing-library/react';
import Header from './header';

test('renders header', () => {
    const { getByTestId } = render(<Header />);
    const container = getByTestId('header');
    expect(container).toBeInTheDocument();
});
