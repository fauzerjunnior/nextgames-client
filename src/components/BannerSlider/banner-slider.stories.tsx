import { Meta, StoryFn } from '@storybook/react';
import BannerSlider, { BannerSliderProps } from './banner-slider.component';

const items = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
];

export default {
  title: 'BannerSlider',
  component: BannerSlider,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'next-dark'
    }
  }
} as Meta;

export const Default: StoryFn<BannerSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...args} />
  </div>
);
