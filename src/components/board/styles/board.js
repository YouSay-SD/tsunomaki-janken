import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`

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


`;

