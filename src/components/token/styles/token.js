import styled from 'styled-components/macro';
import { animated } from 'react-spring';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  ${respondBelow.sm`
    &:last-child {
      grid-column: 2 span;
      text-align: center;
    }
  `}
`;

export const Image = styled(animated.img)`
  max-width: 250px;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0px 5px 5px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
  cursor: pointer;
  opacity: .7;
  transition: box-shadow .5s ease, opacity .5s ease;

  ${respondBelow.sm`
    width: auto;
    max-width: initial;
    max-height: 110px;
  `}

  &:hover {
    opacity: 1;
    box-shadow: 0px 10px 30px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
  }
`;