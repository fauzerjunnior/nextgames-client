import { Meta, StoryObj } from '@storybook/react';
import Menu from './menu.component';

export default {
  title: 'Menu',
  component: Menu
} as Meta;

export const Default: StoryObj = {};

Default.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'dark'
  }
};
