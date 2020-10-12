import styled from 'styled-components/macro';
import { animated } from 'react-spring';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Background = styled(animated.div)`
  background-image: url('/images/backgrounds/watame-background.png');
  background-position: center; 
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: green;
`;