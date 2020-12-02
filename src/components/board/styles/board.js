import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  background-image: url('/images/backgrounds/bg.jpg');
  background-size: 100% 100%;

  /* Mobile */
  ${respondBelow.md`
    background-size: contain;
  `}

`;

export const Content = styled.div`
  max-width: 1340px;
  padding: 0 45px;
  margin: 0 auto;

  
  /* Mobile */
  ${respondBelow.sm`
    padding: 0 30px;
  `}
`;

export const Grid = styled.div`
  margin: 0 auto;

`;

