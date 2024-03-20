import { Meta } from '@storybook/react';
import Footer from './footer.component';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

export const Default = () => (
  <div
    style={{
      maxWidth: '130rem',
      margin: '0 auto',
      padding: '0 1.5rem',
    }}
  >
    <Footer />
  </div>
);
