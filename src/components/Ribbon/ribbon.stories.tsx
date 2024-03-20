import { Meta, StoryFn } from '@storybook/react';
import Ribbon, { RibbonProps } from './ribbon.component';

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller',
    color: 'primary',
    size: 'normal',
  },
  argTypes: {
    children: {
      type: 'string',
    },
    color: {
      type: 'string',
    },
    size: {
      type: 'string',
    },
  },
} as Meta;

export const Default: StoryFn<RibbonProps> = (args) => (
  <div
    style={{
      width: '40rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888',
    }}
  >
    <Ribbon {...args} />
  </div>
);
