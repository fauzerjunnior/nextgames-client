import { render, screen } from '@testing-library/react';
import Menu from './menu.component';

describe('Menu', () => {
  it('should render the Menu', () => {
    const { container } = render(<Menu />);

    expect(screen.getByRole('Menu', { name: /Menu/i})).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
