import { Meta, StoryFn } from '@storybook/react';
import Banner, { BannerProps } from './banner.component';

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/random/1920x1080',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/crashlands'
  }
} as Meta;

export const Default: StoryFn<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
);

export const WithRibbon: StoryFn<BannerProps> = (args) => {
  const withRibbonArgs = {
    ...args
  };

  return (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner
        {...withRibbonArgs}
        ribbon="20% OFF"
        ribbonColor="primary"
        ribbonSize="normal"
      />
    </div>
  );
};
