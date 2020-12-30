import styled from 'styled-components/macro';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  background-color: ${props => props.theme.colors.secondary};
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
`;