import { Meta, StoryFn } from '@storybook/react';
import Highlight, { HighlightProps } from './highlight.component';

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/buy',
    backgroundImage: '/img/highlight-image.png'
  }
} as Meta;

export const Default: StoryFn<HighlightProps> = (args) => (
  <Highlight {...args} />
);
