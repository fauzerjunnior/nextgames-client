import { screen } from '@testing-library/react';
import Logo from './logo.component';
import { renderWithTheme } from '@/utils/tests/helpers';
import 'jest-styled-components';

describe('Logo', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />);
    const logoComponent = screen.getByLabelText(/Next Games/i).parentElement;

    expect(logoComponent).toHaveStyle({
      color: '#FAFAFA'
    });
  });

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />);
    const logoComponent = screen.getByLabelText(/Next Games/i).parentElement;

    expect(logoComponent).toHaveStyle({
      color: '#030517'
    });
  });

  it('should render a normal size when size is default', () => {
    renderWithTheme(<Logo />);
    const logoComponent = screen.getByLabelText(/Next Games/i).parentElement;

    expect(logoComponent).toHaveStyle({
      width: '15rem'
    });
  });

  it('should render a bigger logo when size is passed', () => {
    renderWithTheme(<Logo size="large" />);
    const logoComponent = screen.getByLabelText(/Next Games/i).parentElement;

    expect(logoComponent).toHaveStyle({
      width: '27rem'
    });
  });

  it('should render a bigger logo without text on mobile if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />);
    const logoComponent = screen.getByLabelText(/Next Games/i).parentElement;

    expect(logoComponent).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width:  768px)'
    });
  });
});
