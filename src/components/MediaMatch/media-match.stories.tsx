import { Meta } from '@storybook/react';
import MediaMatch from './media-match.component';

export default {
  title: 'MediaMatch',
  component: MediaMatch,
} as Meta;

export const Desktop = () => {
  return (
    <MediaMatch greaterThan="medium">
      <h1>Only on Desktop</h1>
    </MediaMatch>
  );
};

export const Mobile = () => {
  return (
    <MediaMatch lessThan="medium">
      <h1>Only on Mobile</h1>
    </MediaMatch>
  );
};

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
