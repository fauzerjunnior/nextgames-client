import { Meta, StoryFn } from '@storybook/react';
import BannerSlider, { BannerSliderProps } from './banner-slider.component';

import items from './banner-slider.mock';

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
