import { Meta, StoryFn } from '@storybook/react';
import Slider from './slider.component';
import { Settings } from 'react-slick';
import styled from 'styled-components';

export default {
  title: 'Slider',
  component: Slider
} as Meta;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const Slide = styled.div`
  background: gray;
  height: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  text-align: center;
  color: white;
`;

export const Horizontal: StoryFn = (args) => (
  <Slider settings={settings} {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
);

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
};

export const Vertical: StoryFn = (args) => (
  <Slider settings={verticalSettings} {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
  </Slider>
);
