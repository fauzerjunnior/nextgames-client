import { screen } from '@testing-library/react';
import Footer from './footer.component';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('Footer', () => {
  it('should render 4 columns topics ', () => {
    const { container } = renderWithTheme(<Footer />);

    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /follow us/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /links/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /contact/i,
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
