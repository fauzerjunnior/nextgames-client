import { Meta } from '@storybook/react';
import TextField, { TextFieldProps } from './text-fied.component';
import { Email } from '@styled-icons/material-outlined';

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    icon: <Email />,
  },
  argTypes: {
    onInput: { action: 'changed' },
  },
} as Meta;

export const Default = (args: TextFieldProps) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const withError = (args: TextFieldProps) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

withError.args = {
  error: 'Ops...something is wrong',
};
