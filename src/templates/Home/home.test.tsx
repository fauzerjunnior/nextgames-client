import { screen } from '@testing-library/react';
import { renderWithTheme } from '@/utils/tests/helpers';
import Home from './home.component';

describe('Home', () => {
  it('should render Menu and Footer', () => {
    renderWithTheme(<Home />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument();
  });
});
