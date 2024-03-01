import { Meta } from '@storybook/react';

import { GameCardProps } from '@/components/GameCard/game-card.component';
import GameCardSlider from './game-card-slider.component';

import items from './game-card-slider.mock';

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'next-dark'
    }
  }
} as Meta;

export const Default = (args: GameCardProps[]) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
);
