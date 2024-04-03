import { Meta } from '@storybook/react';
import Radio, { RadioProps } from './radio.component';

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    backgrounds: {
      default: 'next-dark',
    },
  },
  argTypes: {
    onCheck: { action: 'checked' },
  },
} as Meta;

export const Default = (args: RadioProps) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
        {...args}
      />
      <Radio
        label="segundo"
        labelFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
        {...args}
      />
      <Radio
        label="terceiro"
        labelFor="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
        {...args}
      />
    </div>
  </>
);
