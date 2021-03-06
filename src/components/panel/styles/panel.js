import { animated } from 'react-spring';
import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Content = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  padding: 200px 50px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(${props => props.theme.colorsRGB.white}, .7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${respondBelow.sm`
    padding: 150px 50px 0;
  `}
`;

export const Title = styled.h2`
  font-size: 40px;

  ${respondBelow.sm`
    font-size: 1.6em;
  `}

  span {
    font-family: ${props => props.theme.fontFamily.secondary};
    font-weight: 700;

    &:nth-child(odd) {
      color: ${ props => props.theme.colors.primary };
    }

    &:nth-child(even) {
      color: ${ props => props.theme.colors.secondary };
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 50px 0;

  ${respondBelow.sm`
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  `}
`;

export const Button = styled.a`
  padding: 8px 20px;
  font-size: 22px;
  border-radius: 14px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  box-shadow: 0px 5px 5px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
  transition: all .5s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 30px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
  }

  ${respondBelow.sm`
    font-size: 16px;
  `}
`;