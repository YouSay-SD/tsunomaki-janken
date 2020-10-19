import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 200px 0;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(${props => props.theme.colorsRGB.white}, .7);
  display: flex;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 3em;

  span {
    &:nth-child(odd) {
      color: ${ props => props.theme.colors.primary };
    }

    &:nth-child(even) {
      color: ${ props => props.theme.colors.secondary };
    }
  }
`;