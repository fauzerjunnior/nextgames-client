import { Meta, StoryObj } from '@storybook/react';
import Heading, { HeadingProps } from './heading.component';

export default {
  title: 'Heading',
  component: Heading,
} as Meta;

export const Default: StoryObj<HeadingProps> = (args: HeadingProps) => (
  <Heading {...args} />
);

Default.args = {
  children: 'Heading',
  color: 'black',
  size: 'medium',
  lineBottom: false,
  lineLeft: true,
};
