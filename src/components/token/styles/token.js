import styled from 'styled-components/macro';
import { animated } from 'react-spring';

export const Container = styled.div`
  
`;

export const Image = styled(animated.img)`
  max-width: 250px;
  width: 100%;
  border-radius: 50%;
  box-shadow: 0px 10px 30px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
  cursor: pointer;
`;