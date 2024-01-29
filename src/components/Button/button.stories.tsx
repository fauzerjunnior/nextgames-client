import { Meta, StoryObj } from '@storybook/react';
import Button from './button.component';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta;

export const Default: StoryObj = {
  args: {
    children: 'Buy now'
  }
};
