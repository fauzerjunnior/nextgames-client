import { screen } from '@testing-library/react';
import Auth from './auth.component';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('Auth', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth title">
        <input type="text" />
      </Auth>
    );

    const title = screen.getByRole('heading', {
      name: /auth title/i,
    });

    const subtitle = screen.getByRole('heading', {
      name: /all your favorite games in one place/i,
    });

    const children = screen.getByRole('textbox');

    const logos = screen.getAllByLabelText(/next games/i);

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(logos[0]).toBeInTheDocument();
    expect(logos).toHaveLength(2);
  });
});
