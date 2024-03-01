import { Meta, StoryFn } from '@storybook/react';
import Highlight, { HighlightProps } from './highlight.component';

import item from './highlight.mock';

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta;

export const Default: StoryFn<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: StoryFn<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  floatImage: '/img/highlight-art.png'
};
