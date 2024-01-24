import { Meta, StoryObj } from '@storybook/react';
import Heading from './heading.component';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Default: StoryObj = {
  args: {
    children: 'Most populars'
  }
};
