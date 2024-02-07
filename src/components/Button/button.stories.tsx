import { Meta, StoryObj } from '@storybook/react';
import Button from './button.component';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';

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

export const WithIcon: StoryObj = {
  args: {
    size: 'small',
    children: 'Buy now',
    icon: <AddShoppingCart />
  }
};

export const AsLink: StoryObj = {
  args: {
    size: 'small',
    children: 'Buy now',
    icon: <AddShoppingCart />,
    as: 'a',
    href: '/link'
  }
};
