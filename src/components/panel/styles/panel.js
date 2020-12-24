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
  font-size: 3em;
  margin-bottom: 50px;

  ${respondBelow.sm`
    font-size: 1.6em;
  `}

  span {
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
  margin-bottom: 100px;

  ${respondBelow.sm`
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    margin-bottom: 50px;
  `}
`;

export const Button = styled.a`
  padding: 8px 20px;
  font-size: 22px;
  border-radius: 14px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  box-shadow: 0px 10px 30px -5px rgba(${props => props.theme.colorsRGB.secondary},.5);
  transition: transform .5s ease;

  &:hover {
    transform: scale(1.1);
  }

  ${respondBelow.sm`
    font-size: 16px;
  `}
`;