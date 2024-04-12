import { render, screen } from '@testing-library/react';
import Auth from './auth.component';

describe('Auth', () => {
  it('should render the Auth', () => {
    const { container } = render(<Auth />);

    expect(screen.getByRole('heading', { name: /Auth/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
