import styled from 'styled-components/macro';
import { animated } from 'react-spring';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  ${respondBelow.sm`
    display: none;
  `}
`;

export const Image = styled(animated.img)`
  object-fit: cover;
  object-position: center;
  height: 100%;
`;