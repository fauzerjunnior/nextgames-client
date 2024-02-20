import { screen } from '@testing-library/react';
import Highlight from './highlight.component';
import { renderWithTheme } from '@/utils/tests/helpers';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/link',
  backgroundImage: 'img/cover-image.jpg'
};

describe('Highlight', () => {
  it('should render headings and button', () => {
    renderWithTheme(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Buy now/i }));
  });

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    });
  });
});
