import { Meta, StoryObj } from '@storybook/react';
import Menu, { MenuProps } from './menu.component';

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    backgrounds: {
      default: 'next-dark',
    },
  },
} as Meta;

export const Default: StoryObj<MenuProps> = {
  args: {
    username: '',
  },
};

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark',
  },
};
