import { screen, render } from '@testing-library/react';

import Home from '../page';

describe('<Home />', () => {
  it('should render the heading', () => {
    render(<Home />);

    expect(screen.getAllByRole('heading', { name: /boilerplate/i }))
      .toBeInTheDocument;
  });
});
