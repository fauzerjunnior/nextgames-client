import { screen } from '@testing-library/react';
import Banner, { BannerProps } from './banner.component';
import { renderWithTheme } from '@/utils/tests/helpers';

describe('Banner', () => {
  const bannerPropsMock: BannerProps = {
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    img: 'img/test.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/crashlands'
  };

  it('should render the Banner', () => {
    const { container } = renderWithTheme(<Banner {...bannerPropsMock} />);

    expect(screen.getByText(/Defy death/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the Banner with content', () => {
    renderWithTheme(<Banner {...bannerPropsMock} />);

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    );

    expect(screen.getByRole('img', { name: /defy death/i }));
  });
});
