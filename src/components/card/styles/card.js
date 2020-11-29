import styled from 'styled-components/macro';
import { respondBelow } from '../../../helpers/breakPoints';

export const Container = styled.div`
  
  /* Mobile */
  ${respondBelow.sm`
  `}
`;

export const Picture = styled.img`

`;

export const Name = styled.span``;

export const Message = styled.p``;

export const Score = styled.div``;
//     background-color: ${props => props.theme.colors.white};
