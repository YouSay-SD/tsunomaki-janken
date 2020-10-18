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

export const Background = styled(animated.div)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;