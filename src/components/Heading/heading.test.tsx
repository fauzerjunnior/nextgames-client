import { screen } from '@testing-library/react';
import Heading from './heading.component';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('Heading', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Next Games</Heading>);

    expect(screen.getByRole('heading', { name: /next games/i })).toHaveStyle({
      color: '#FAFAFA',
    });
  });

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Next Games</Heading>);

    expect(screen.getByRole('heading', { name: /next games/i })).toHaveStyle({
      color: '#030517',
    });
  });

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(
      <Heading lineLeft lineColor="secondary">
        Next Games
      </Heading>
    );

    expect(screen.getByRole('heading', { name: /next games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1',
    });
  });

  it('should render a heading with a line to the bottom', () => {
    renderWithTheme(<Heading lineBottom>Next Games</Heading>);

    expect(
      screen.getByRole('heading', { name: /next games/i })
    ).toHaveStyleRule('border-bottom', '0.4rem solid #F231A5', {
      modifier: '::after',
    });
  });

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Next Games</Heading>);

    expect(
      screen.getByRole('heading', { name: /next games/i })
    ).toHaveStyleRule('font-size', '1.6rem');

    expect(
      screen.getByRole('heading', { name: /next games/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after',
    });
  });

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Next Games
      </Heading>
    );

    const heading = screen.getByRole('heading', { name: /next games/i });
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' });
    expect(heading).toHaveStyleRule('border-bottom', '0.4rem solid #3CD3C1', {
      modifier: '::after',
    });
  });
});
