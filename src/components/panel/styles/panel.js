import { animated } from 'react-spring';
import styled from 'styled-components/macro';

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
`;

export const Title = styled.h2`
  font-size: 3em;
  margin-bottom: 50px;

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
`;