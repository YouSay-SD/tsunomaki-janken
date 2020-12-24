import styled from 'styled-components/macro';
import { animated } from 'react-spring';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  /* position: relative;
  overflow: hidden; */
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 22px;
  border-radius: 14px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  box-shadow: 0px 5px 5px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
  transition: all .5s ease;
  border: none;
  outline: none;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 30px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
  }

  ${respondBelow.sm`
    font-size: 16px;
  `}
`;

export const Box = styled(animated.div)`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.terciary};
  border-radius: 25px;
  padding: 30px;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  z-index: 2;
`;

export const Background = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(${props => props.theme.colorsRGB.terciary}, .7);
`;

export const Title = styled.h3`

`;