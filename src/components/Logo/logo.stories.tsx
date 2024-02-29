import { Meta, StoryObj } from '@storybook/react';
import Logo from './logo.component';

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    backgrounds: {
      default: 'next-dark'
    }
  }
} as Meta;

export const Default: StoryObj = {};
