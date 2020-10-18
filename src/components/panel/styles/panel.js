import styled from 'styled-components/macro';
// import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(${props => props.theme.colorsRGB.white}, .5)
`;