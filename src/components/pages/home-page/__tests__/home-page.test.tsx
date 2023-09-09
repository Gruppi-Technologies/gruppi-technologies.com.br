import { render, screen } from '@testing-library/react';

import { TITLE } from '../constants';
import { HomePage } from '../home-page';

describe('Home page', () => {
  it('should render a Hello World message correctly', () => {
    render(<HomePage />);

    expect(screen.getByText(TITLE)).toBeInTheDocument();
  });
});
