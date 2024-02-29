import Container from './container.component';
import { renderWithTheme } from '@/utils/tests/helpers';
import theme from '@/styles/theme';

describe('Container', () => {
  it('should render the Container', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Next Games</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
