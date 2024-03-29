import Menu from './menu.component';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('Menu', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /next games/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
  });

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />);

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />);

    expect(screen.getByText(/Log in now/i)).toBeInTheDocument();
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
    expect(screen.queryByText(/Wishlist/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/My account/i)).not.toBeInTheDocument();
  });

  it('should show closeds links when logged in', () => {
    renderWithTheme(<Menu username="fauzerjunnior" />);

    expect(screen.queryByText(/Log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Sign up/i)).not.toBeInTheDocument();
    expect(screen.getByText(/My account/i)).toBeInTheDocument();
    expect(screen.getByText(/Wishlist/i)).toBeInTheDocument();
  });
});
