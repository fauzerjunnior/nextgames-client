import styled, { css } from 'styled-components';
import { LogoProps } from './logo.component';
import media from 'styled-media-query';

const wrapperModifiers = {
  normal: () => css`
    width: 15rem;
    height: 4.5rem;
  `,

  large: () => css`
    width: 27rem;
    height: 7rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    `}
  `
};

export const Wrapper = styled.main<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile()}
  `}
`;
