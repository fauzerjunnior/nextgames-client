import { screen } from '@testing-library/react';
import Highlight from './highlight.component';
import * as S from './highlight.styles';
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

  it('should render float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    );
  });

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    });
  });

  it('should render align left when is passed', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    );

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    });
  });
});
