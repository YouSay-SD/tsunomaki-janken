import { animated } from 'react-spring';
import styled from 'styled-components/macro';

export const Container = styled(animated.video)`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center;
  vertical-align: top;
`;
