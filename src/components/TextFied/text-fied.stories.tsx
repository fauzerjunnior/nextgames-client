import { Meta } from '@storybook/react';
import TextFied, { TextFiedProps } from './text-fied.component';

export default {
  title: 'TextFied',
  component: TextFied,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
  },
  argTypes: {
    onInput: { action: 'changed' },
  },
} as Meta;

export const Default = (args: TextFiedProps) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextFied {...args} />
  </div>
);
