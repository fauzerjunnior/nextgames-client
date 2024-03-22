import { render, screen } from '@testing-library/react';
import Checkbox from './checkbox.component';

describe('Checkbox', () => {
  it('should render the Checkbox', () => {
    const { container } = render(<Checkbox />);

    expect(
      screen.getByRole('heading', { name: /Checkbox/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
